<template>
    <div class="form">
      <h3>LogIn</h3>
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
      <div class="container">
        <button @click="LogIn" class="center">LogIn</button>
        <button @click='this.$router.push("/signup")' class="center">Signup</button>
      </div>
    </div>
  </template>

<script>
export default {
  name: "LogIn", // Component name

  data: function() {
    return {
      email: '',      // Data property for email
      password: '',   // Data property for password
    };
  },

  methods: {
            LogIn() {
        var data = {
            email: this.email,
            password: this.password
        };

        // Using Fetch API to send a POST request to the server
        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: 'include', // Include credentials (cookies) in the request
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Redirect to the home page after successful login using Vue Router
            this.$router.push('/');
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        },
  },
}
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: #495867;
}
label {
  color: #495867;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
}
button {
  background-color: #495867;
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: #acc8e1;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
button:hover {
  color: #F9C784;
}
</style>