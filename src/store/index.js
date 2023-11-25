import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    storeList:[
      {id:1,user:{name:"Johnny Depp1",userName:"JDepp123",profilePicture:"/images/user1.jpg"},picture:"/images/post1.jpg",content:"I feel happy today!",date:"2023-09-27"},
      {id:2,user:{name:"Johnny Depp2",userName:"JDepp123",profilePicture:"/images/user1.jpg"},picture:"/images/post1.jpg",content:"I feel happy today!",date:"2023-09-27"},
      {id:3,user:{name:"Johnny Depp3",userName:"JDepp123",profilePicture:"/images/user1.jpg"},picture:"/images/post1.jpg",content:"I feel happy today!",date:"2023-09-27"},
      {id:4,user:{name:"Johnny Depp4",userName:"JDepp123",profilePicture:"/images/user1.jpg"},picture:"/images/post1.jpg",content:"I feel happy today!",date:"2023-09-27"}
    ]
  },
  getters: {
    postsListItem: state => {
      var postsListItem = state.storeList.map(post => {
            return {
                id:post.id,
                user:post.user.name,
                userName:post.user.userName,
                content:post.content,
                date:post.date
            }
        });
        return postsListItem
    }
  }
})