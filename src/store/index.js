import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    postsList:[
      {
        id: 1,
        user: {
          name: "Johnny Depp",
          userName: "JDepp123",
          profilePicture: "/images/user1.jpg"
        },
        picture: "/images/post1.jpg",
        content: "I feel happy today!",
        date: "2023-09-27",
        likes: 0
      },
      {
        id: 2,
        user: {
          name: "Tom Cruise",
          userName: "Tommyboy",
          profilePicture: "/images/user2.jpg"
        },
        picture: "/images/post2.webp",
        content: "Made a huge discovery today! Never going to mix a hen and a rooster up any more! #MoreEggs",
        date: "2023-09-24",
        likes: 0
      },
      {
        id: 3,
        user: {
          name: "Chris Hemsworth",
          userName: "ChrisHemsworthOfficial",
          profilePicture: "/images/user3.jpg"
        },
        picture: "/images/post3.jpeg",
        content: "Sounds scary guys, Stay safe out there! #ImFeelingScared",
        date: "2023-09-17",
        likes: 0
      },
      {
        id: 4,
        user: {
          name: "Bruce Willis",
          userName: "MrDieHard",
          profilePicture: "/images/user4.jpg"
        },
        content: "I think I'll retire, I've had enough",
        date: "2022-03-04",
        likes: 0
      },
      {
        id: 5,
        user: {
          name: "Scarlett Johansson",
          userName: "ScarlettJohansson84",
          profilePicture: "/images/user1.jpg"
        },
        content: "Ate a 5 pound cake yesterday. Now feeling complete :D #CakeIsLife",
        date: "2022-02-21",
        likes: 0
      },
      {
        id: 6,
        user: {
          name: "Kanye West",
          userName: "Yeezy",
          profilePicture: "/images/user6.jpg"
        },
        content: "I'm nice at ping pong",
        date: "2022-01-25",
        likes: 0
      },
      {
        id: 7,
        user: {
          name: "Lebron James",
          userName: "KingJames",
          profilePicture: "/images/user7.jpg"
        },
        picture: "/images/post7.jpg",
        content: "My love for music is INSANE!!! I think I'm going to do a album. #KidfromAkron #KingJames #GreatestOfAllTime #ChangedTheGame",
        date: "2021-12-03",
        likes: 0
      },
      {
        id: 8,
        user: {
          name: "Donald Trump",
          userName: "realDonaldTrump",
          profilePicture: "/images/user8.jpg"
        },
        content: "Despite the constant negative press covfefe",
        date: "2021-09-30",
        likes: 0
      },
      {
        id: 9,
        user: {
          name: "CIA",
          userName: "CIA",
          profilePicture: "/images/user9.png"
        },
        content: "We can neither confirm nor deny that this is our first tweet.",
        date: "2021-08-17",
        likes: 0
      },
      {
        id: 10,
        user: {
          name: "Tom Cruise",
          userName: "Tommyboy",
          profilePicture: "/images/user2.jpg"
        },
        picture: "/images/post10.jpg",
        content: "Remembering the time I met the wonderful Prince Philip #RIP",
        date: "2021-04-10",
        likes: 0
      }
    ],


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
    postsListItem: state => {
      return state.postsList.map(post => {
          return {
            id: post.id,
            profilePicturePath: post.user.profilePicture,
            user: post.user.name,
            userName: post.user.userName,
            picturePath: post.picture,
            content: post.content,
            date: post.date
          }
        })
    }
  }
})