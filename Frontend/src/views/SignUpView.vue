<template>
  <div class="form">
    <h3>Sign-up</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="validatePassword">Sign-up</button><br>
      <button @click='this.$router.push("/login")'>Back to Login</button>
    </div>
    <b v-if="badPassword">Bad password</b>
    <li v-for="(requirement, key) in requirements" :key="key">
      {{ requirement.text }}
    </li>
  </div>
  </template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      email: '',
      password: '',
      requirements: [],
      badPassword: false,
    }
  },
  methods: {
    validatePassword() {
      const password = this.password;
      this.requirements = [];
      this.badPassword = false;

      if (this.email == '' || this.password == '') {
        this.addRequirement({text: "Both email and password are necessary"});
        return false;
      }
      // Email requirements
      // eslint-disable-next-line
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
        this.addRequirement({text: "Enter valid email (####@####.###)"});
        return false;
      }
      // Password requirements
      if (password.length < 8 || password.length > 15) {
        this.addRequirement({text: "Password needs to be 8-15 characters"});
      }
      if (password.toLowerCase() === password) {
        this.addRequirement({text: "Include atleast 1 uppercase letter"});
      }
      if (!/[a-z]{1}.{0,}[a-z]{1}/.test(password)) {
        this.addRequirement({text: "Include atleast 2 lowercase letters"});
      }
      if (!/\d/.test(password)) {
        this.addRequirement({text:"Include atleast 1 number"});
      }
      if (password[0].toUpperCase() !== password[0]) {
        this.addRequirement({text: "Needs to start with an uppercase letter"});
      }
      if (!/_/.test(password)) {
        this.addRequirement({text: "Should include the letter '_'"});
      }
      
      // if all requirements are met, go to main page
      if( this.requirements.length === 0) {
        router.push('/')
      }
      this.badPassword = true;
      return false; // requirements not met
   },
    addRequirement(requirement) {
      this.requirements.push(requirement);
    }

  }
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
li {
  color: red;
  font-size: 2vh;
}

@media (max-width: 500px) {
.form {
  margin: 10px, 0, 10px, 0;
  width: 90%;
}
}
</style>