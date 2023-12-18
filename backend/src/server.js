const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const randToken = require('rand-token');

const port = process.env.PORT || 3000;

const app = express();

app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// We need to include "credentials: true" to allow cookies to be represented  
// Also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json()); // Parses incoming requests with JSON payloads and is based on body-parser.

const refreshTokens =  {};
const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret
const maxAge = 300; //unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
        //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
}

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});


// is used to check whether a user is authenticated
app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been received');
    const token = req.getHeader("Authorization").substring(8); // read auth token from header and assign it to token const
    console.log("token " + token);
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": false });
                } else { // token exists and it is verified 
                    console.log('author is authenticated');
                    res.send({ "authenticated": true });
                }
            })
        } else { //applies when the token does not exist
            console.log('author is not authenticated');
            res.send({ "authenticated": false });
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

// signup a user
app.post('/auth/signup', async(req, res) => {
    try {
        console.log("a signup request has been received");
        //console.log(req.body);
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password with the salt
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        const refreshToken = randToken.uid(256);

        refreshTokens[refreshToken] = email;


        res
            .status(201)
            .cookie('refresh_token', refreshToken, { maxAge: 3600000, httpOnly: true })
            .json({jwt: token, refresh_token: refreshToken})
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

//attempt to login
app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has been received");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "No user found with the requested email" });

        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        const refreshToken = randToken.uid(256);

        refreshTokens[refreshToken] = email;

        res
            .status(201)
            .cookie('refresh_token', refreshToken, { maxAge: 3600000, httpOnly: true })
            .json({jwt: token, refresh_token: refreshToken})
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});


app.post('/auth/refresh_token', async(req, res) => {
    try {
        console.log("a refresh token request has been received");
        const { refresh_token } = req.cookies.refresh_token;

        if(refresh_token in refreshTokens){
            const email = refreshTokens[refresh_token];

            const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
            if (user.rows.length === 0) return res.status(401).json({ error: "No user found with the requested email" });

            const token = await generateJWT(user.rows[0].id);
            const refreshToken = randToken.uid(256);

            refreshTokens[refreshToken] = email;

            res
                .status(401)
                .send()
        }
        else {
            return res.status(401).json({ error: "Invalid refresh token" });
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});



//logout a user = delete refresh_token
app.get('/auth/logout', (req, res) => {
    console.log('delete refresh_token request received');
    res.status(202).clearCookie('refresh_token').json({ "Msg": "cookie cleared" }).send()
});