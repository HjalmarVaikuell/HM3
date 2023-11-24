<template>
        <div class="posts">
          <PostsCompo></PostsCompo>
        </div>
</template>

<script>
import PostsCompo from '@/components/PostsCompo.vue';
export default {
  name: "PostsList",
  components: { PostsCompo },
  data: function() {
    return{}
  }
}
</script>