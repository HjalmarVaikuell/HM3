<template>
  <div id="posts-background">
    <button>Logout</button>
    <PostsSection/>
    <div class="container">
      <button @click="resetLikes()">Reset likes</button>
      <button>Add post</button>
      <button>Delete all</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsSection from "@/components/posts/PostsSection.vue";

export default {
  components: { PostsSection: PostsSection },

  methods: {
    resetLikes(){
      this.$store.commit('resetLikes')
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