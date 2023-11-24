import { createPosts } from 'vuex'

export default createPosts({
  strict: true,
  state: {
    postsList:[
      {user: {name: "Johnny Depp",userName: "JDepp123",profilePicture: "/images/user1.jpg"},picture: "/images/post1.jpg",content: "I feel happy today!",date: "2023-09-27"},
    ]
  },
  getters: {
    postsListItem: state => {
      var postsListItem = state.postsList.map(post => {
        return {
          user: post.user.name,
          userName: post.user.name,
          content: post.content,
          date: post.date
        }
      })
      return postsListItem
    }
  }
})