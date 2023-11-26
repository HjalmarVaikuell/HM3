<template>
  <div class="post">
    <div class="post-header">
      <img class="profile-picture" v-bind:src="post.user.profilePicture" alt="Profile picture">
      <span class="userName"> <b> </b> {{ post.user.userName }} </span>
    </div>
    <img class="content-picture" v-bind:src="post.picture" alt="Content picture">
    <span class="content"> <b>Content: </b> {{ post.content }} </span>
    <span class="date"> <b>Date: </b> {{ post.date }} </span>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: [],
  data: function() {
    return{}
  }
}
</script>

<style scoped>
#posts-list{
  display: flex;
  flex-direction: column;
  background: #acc8e1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;}
.post {
  background: rgb(128, 183, 235);
  width: 50dvw;
  height: 60dvw;
  align-self: center;
  margin-bottom: 5px;
  border-radius: 1cap;
  padding: 3px 5px;}
.post-header {
  display: flex;
  background-color: antiquewhite;
  margin: 0.5dvw;}
.profile-picture{
  width: 7dvw;
  height: 7dvw;
}
.userName {
  align-self: center;
  margin-left: 5px;
}
.content-picture {
  width: 48dvw;
  height: 48dvw;
}
/*#posts-list ul{
  padding: 0;
  list-style-type: none;
}
#posts-list li{
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}*/
span{
  margin-right: 10px;}
</style>