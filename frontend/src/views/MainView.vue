<template>
  <div id="posts-background">
    <button @click="logout()">Logout</button>
    <PostsSection/>
    <div class="container">
      <button @click="resetLikes()">Reset likes</button>
      <button @click="addPost()">Add post</button>
      <button @click="deletePosts()">Delete all</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsSection from "@/components/posts/PostsSection.vue";
import auth from "../auth";

export default {
  components: { PostsSection: PostsSection },
  data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },

  methods: {
    resetLikes(){
      this.$store.commit('resetLikes')
    },
    logout() {
      this.$router.push('/login')
    },
    addPost() {
      this.authResult.then(result => {
        if (result) {
        this.$router.push('/addpost')
      } else {
        this.$router.push('/login')
      }}
      )
    
    },
    deletePosts() {

    },
    verifyAccess() {
      this.authResult.then(result => {
        if (result) {
        return
      } else {
        this.$router.push('/login')
      }}
      )
  }},
  beforeMount() {
    this.verifyAccess();
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