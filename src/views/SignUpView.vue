<template>
  <div class="login-form">
    <div class="center">
      <h>   Email</h>
      <input type="email" v-model="email" required placeholder="Email"/><br>
      <h>Password</h>
      <input type="password" v-model="password" required placeholder="Password"/><br>
      <button @click="validatePassword">SignUp</button><br>
      <b v-if="badPassword">Bad password</b>
      <li v-for="(requirement, key) in requirements" :key="key">
        {{ requirement.text }}
      </li>
    </div>
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
.login-form {
  text-align: center;
  align-items: center;
  margin: auto;
  width: 50%;
  height: 50vh;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 40px;
  background-color: rgb(198, 188, 155);

}
.center {
  text-align: center;
  align-items: center;
  border: 10px black;
  float: left;
  padding: 7%;
  padding-top: 2%;
  
}

input {
  height: 10vh;
  width: 23vw;
  border-radius: 4vh;
  border: 0;
  margin-top: 2vh;
  text-align: center;
  font-size: 3vh;
  right:5vw;
  margin-left: auto; 
  margin-right: 0;
}

h {
  font-size: 3vh;
  margin-left: 2vw;
  margin-right: 2vw;
}

button {
  height: 8vh;
  width: 15vw;
  background-color: #acc8e1;
  border-radius: 4vh;
  border: 0;
  font-size: 3vh;
  margin-top: 1vh;
}
li {
  color: red;
  font-size: 2vh;
}
</style>