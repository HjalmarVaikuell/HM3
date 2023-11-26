<template>
  <div id="posts-list">
    <PostItem v-for="post in posts"
              :key="post.id"
              v-bind="post"
              @like-post="likePost(post.id)"
    />
  </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem.vue";

export default {
  name: "PostsSection",
  components: {PostItem},

  computed: {
    posts () {
      return this.$store.getters.getPosts;
    }
  },

  methods: {
    likePost (id) {
      this.$store.commit('addLike', id);
    }
  }

}
</script>

<style scoped>
#posts-list {
  display: flex;
  flex-direction: column;
  background: #acc8e1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

span {
  margin-right: 10px;
}
</style>