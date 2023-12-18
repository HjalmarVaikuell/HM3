import { createStore } from 'vuex';
import { auth } from '@/store/modules/auth'


export default createStore({
  strict: true,
  modules: {
    authStore: auth,
  },
  state: {
    postsList:[],
  },

  mutations: {
    resetLikes (state) {
      state.postsList.forEach(post => {
        post.likes = 0;
      })
    },

    addLike (state, id){
      let post = state.postsList[id - 1];
      post.likes++;
    }
  },

  getters: {
    getPosts: state => {
      return state.postsList.map(post => {
          return {
            id: post.id,
            name: post.user.name,
            userName: post.user.userName,
            content: post.content,
            date: post.date,
            likes: post.likes
          }
        })
    }
  }
})