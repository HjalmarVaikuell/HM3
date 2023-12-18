<template>
  <div id="posts-background">
    <button v-if="loggedIn" @click="handleLogout()">Logout</button>
    <PostsSection v-if="loggedIn" />
    <div class="container">
      <button @click="addPost()">Add post</button>
      <button @click="deletePosts()">Delete all</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsSection from "@/components/posts/PostsSection.vue";

import { mapGetters, mapActions } from "vuex";


export default {
  name: "MainView",
  components: { PostsSection: PostsSection },

  data: function() {
    return {
    }
  },

  computed: {
    ...mapGetters('authStore', [
      'loggedIn',
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },

  methods: {

    ...mapActions('authStore', [
      'logout'
    ]),

    handleLogout() {

      const success = this.logout();
      if(!success){
        window.alert("Failed to log out");
      }
    },

    addPost() {
      this.$router.push('/addpost')
    },

    deletePosts() {

    }
  }
};
</script>

<style scoped>
#posts-background {
  margin: 5px;
  background-color: #acc8e1;
}
.container {
  display: flex;
  justify-content: center;
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
  color: #F9C784;
}
</style>