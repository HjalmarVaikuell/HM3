<template>
  <div>
    <posts-compo/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsCompo from "@/components/PostsCompo.vue";

export default {
  name: "compoPosts",
  components: { PostsCompo },
};
</script>

<style scoped>
body {
    position: relative;
}

.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
}
</style>