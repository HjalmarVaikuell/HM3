<template>
  <div class="post">
    <div class="post-header">
      <img class="profile-picture"
           :src="require(`@/assets/images/${profilePicturePath}`)"
           alt="Profile picture"
      />
      <span class="userName"> <b> </b> {{ name }} </span>
      <span class="userName"> <b> </b> @{{ userName }} </span>
    </div>
    <img
        v-if="picturePath != null && picturePath.length > 0"
        class="content-picture"
        :src="require(`@/assets/images/${picturePath}`)"
        alt="Content picture"
    />
    <span class="content"> <b>Content: </b> {{ content }} </span>
    <span class="date"> <b>Date: </b> {{ date }} </span>
    <div class="post-footer">
      <button @click="$emit('like-post')" class="like-btn">
        <img
             :src="require(`@/assets/images/like.png`)"
             alt="Like button"
        >
      </button>
      <span class="likes">Likes: {{likes}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    id: Number,
    profilePicturePath: String,
    name: String,
    userName: String,
    picturePath: String,
    content: String,
    date: String,
    likes: Number
  },
}
</script>

<style scoped>
.post {
  background: rgb(128, 183, 235);
  width: 50dvw;
  height: 60dvw;
  align-self: center;
  margin-bottom: 5px;
  border-radius: 1cap;
  padding: 3px 5px;
}

.post-header {
  display: flex;
  background-color: antiquewhite;
  margin: 0.5dvw;
}

.post-footer {
  display: flex;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.profile-picture {
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

span {
  margin-right: 10px;
}

.like-btn {
  border-radius: 50%;
  width: 2vw;
  height: 2vw;
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.like-btn > img {
  width: 2vw;
  height: 2vw;
}

.likes {
  margin-left: 1vw;
}

</style>