<template>
    <h1>Posts</h1>
</template>

<script>
export default {
    name: "PostsCompo",
    data: function() {
        return{

        }
    },
    computed: {
        postsList(){
            return this.$store.state.postsList
        }
    }
}
</script>
