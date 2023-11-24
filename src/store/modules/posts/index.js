const getters = {
    displayPosts:(state) => state.posts
}

const actions = {}

const mutations = {}

export default{
    namespaced:true,
    state(){
        return{
            posts:[
                {
                    'id':'c101',
                    'name':'Roger',
                    'age':30,
                    'skills':['handing', 'wanding']
                }
            ]
        }
  },
  getters,
  actions,
  mutations
}