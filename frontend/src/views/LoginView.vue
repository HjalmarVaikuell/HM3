<template>
    <div class="form">
      <h3>LogIn</h3>
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
      <div class="container">
        <button @click="handleLogin" class="center">LogIn</button>
        <button @click='this.$router.push("/signup")' class="center">Signup</button>
      </div>
    </div>
  </template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  name: "LogIn", // Component name

  data: function() {
    return {
      email: '',      // Data property for email
      password: '',   // Data property for password
    };
  },

  computed: {
    ...mapGetters('authStore', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },

  methods: {

    ...mapActions('authStore', [
      'login'
    ]),

    handleLogin(){
      if(this.email !== '' && this.password !== '') {
        const success = this.login(this.email, this.password);
        if(!success) {
          this.password = '';
          window.alert("Failed to log in")
        }
      }
      else {
        window.alert("Please fill the email and password fields to log in")
      }
    }
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