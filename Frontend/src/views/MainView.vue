<template>
  <PostsSection />
  <button class="resetLikes" @click="resetLikes()">Reset likes</button>
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
.resetLikes {
  background-color: #495867;
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top:  20px;
  margin-bottom:  20px;
  margin-right:  10px;
  color: #acc8e1;
  border-radius: 20px;
}

.resetLikes:hover {
  color: #F9C784;
}
</style>