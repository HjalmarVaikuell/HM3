<template>
<div id="posts-list">
<ul class="item" v-for="post in postsList" :key="post.id">
<span class="profilePicture"></span>
<img class="profile-picture" v-bind:src="'@/assets/' + post.user.profilePicture">
<span class="user"> <b>Author: </b> {{ post.user.name }} </span>
<span class="userName"> <b>Alias: </b> {{ post.user.userName }} </span>
<span class="content"> <b>Content: </b> {{ post.content }} </span>
<span class="date"> <b>Date: </b> {{ post.date }} </span>
</ul>
</div>
</template>

<script>
export default {
    name: "PostsCompo", 
    data: function() {return{}},
    computed: {postsList(){return this.$store.state.postsList}}
}
</script>

<style scoped>
.item {
  background: rgb(128, 183, 235);
  margin-bottom: 5px;
  padding: 3px 5px;}
#posts-list{
  background: #1862c9;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;}
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