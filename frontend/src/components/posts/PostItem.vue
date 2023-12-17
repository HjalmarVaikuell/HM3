<template>
  <div class="post">
    <div class="post-header">
      <span class="user"> <strong>@{{ userName }}</strong> </span>
      <span class="date"> <em>{{ date }}</em> </span>
    </div>
    <span class="content"> {{ content }} </span>
    <div class="post-footer">
      <button @click="$emit('like-post')" class="like-btn">
        <img
             :src="require(`@/assets/images/like.png`)"
             alt="Like button"
        >
      </button>
      <span class="likes">{{likes}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    id: Number,
    name: String,
    userName: String,
    content: String,
    date: String,
    likes: Number
  },
}
</script>

<style scoped>
.post {
  background: rgb(167, 154, 154);
  width: 50dvw;
  text-align: left;
  align-self: center;
  margin-bottom: 5px;
  border-radius: 1cap;
  padding: 3px 5px;
}

.post-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.post-footer {
  display: flex;
  padding-top: 10px;
  
}

span {
  margin-right: 10px;
}

.like-btn {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.like-btn > img {
  width: 16px;
  height: 16px;
}

.likes {
  margin-left: 16px;
}

</style>