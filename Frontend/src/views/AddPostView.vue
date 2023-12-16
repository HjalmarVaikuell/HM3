<template>
  <div class="container">
    <h3>Add a post</h3>
    <label for="body">Body</label>
    <input type="text" id="body" name="body" required v-model="body">
    <button @click="submitPost">Add</button>
  </div>
</template>

<script>
export default ({
  name: 'AddPost',

  data() {
    return {
      body: '',
    };
  },

  methods: {
    submitPost() {
      // TODO
      console.log('Post submitted:', this.body);
    },
  },
});
</script>

<style scoped>
.container {
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

button:hover {
  color: #f9c784;
}
</style>
