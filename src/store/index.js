import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    postsList:[
      {
        id:1,
        user: {
          name: "Johnny Depp",
          userName: "JDepp123",
          profilePicture: "https://img.freepik.com/premium-vector/cartoon-cute-cat-with-square-shape-square-icon-apps-games-vector-illustration-isolated_351178-23.jpg"
        },
        picture: "https://as2.ftcdn.net/v2/jpg/02/73/11/99/1000_F_273119914_9HDh3b4CBXZ8zSo4Ezyinadc5BUW3QI2.jpg",
        content: "I feel happy today!",
        date: "2023-09-27"
      },
      {
        id:2,
        user: {
          name: "Tom Cruise",
          userName: "Tommyboy",
          profilePicture: "https://i.kym-cdn.com/photos/images/original/001/250/216/305.jpg"
        },
        picture: "post2.webp",
        content: "Made a huge discovery today! Never going to mix a hen and a rooster up any more! #MoreEggs",
        date: "2023-09-24"
      },
      {
        id:3,
        user: {
          name: "Chris Hemsworth",
          userName: "ChrisHemsworthOfficial",
          profilePicture: "https://thumbs.dreamstime.com/b/gray-fluffy-cat-blue-eyes-shot-close-up-square-image-173304539.jpg"
        },
        picture: "post3.jpeg",
        content: "Sounds scary guys, Stay safe out there! #ImFeelingScared",
        date: "2023-09-17"
      },
      {
        id:4,
        user: {
          name: "Bruce Willis",
          userName: "MrDieHard",
          profilePicture: "https://i.pinimg.com/originals/90/c0/34/90c034b9f17c0d1e93dc88d2f73859e7.jpg"
        },
        content: "I think I'll retire, I've had enough",
        date: "2022-03-04"
      },
      {
        id:5,
        user: {
          name: "Scarlett Johansson",
          userName: "ScarlettJohansson84",
          profilePicture: "https://static.vecteezy.com/system/resources/previews/006/873/332/non_2x/cat-emoji-square-emoticon-smile-cute-illustration-free-vector.jpg"
        },
        content: "Ate a 5 pound cake yesterday. Now feeling complete :D #CakeIsLife",
        date: "2022-02-21"
      },
      {
        id:6,
        user: {
          name: "Kanye West",
          userName: "Yeezy",
          profilePicture: "https://thumbs.dreamstime.com/b/tabby-cat-looking-out-jar-square-white-gray-old-stoneware-86472666.jpg"
        },
        content: "I'm nice at ping pong",
        date: "2022-01-25"
      },
      {
        id:7,
        user: {
          name: "Lebron James",
          userName: "KingJames",
          profilePicture: "https://images.ctfassets.net/sfnkq8lmu5d7/7Mq8f3j1ULBEZ1MALmvnog/a3ada063518e190c7acbd46142dcf7de/The_Wildest_Poets_Square_Cats_Snapinsta_1.jpg?w=750&h=750&fl=progressive&q=70&fm=jpg"
        },
        picture: "post7.jpg",
        content: "My love for music is INSANE!!! I think I'm going to do a album. #KidfromAkron #KingJames #GreatestOfAllTime #ChangedTheGame",
        date: "2021-12-03"
      },
      {
        id:8,
        user: {
          name: "Donald Trump",
          userName: "realDonaldTrump",
          profilePicture: "https://static01.nyt.com/images/2021/07/07/world/asia/cat-billboard/cat-billboard-mediumSquareAt3X.jpg"
        },
        content: "Despite the constant negative press covfefe",
        date: "2021-09-30"
      },
      {
        id:9,
        user: {
          name: "CIA",
          userName: "CIA",
          profilePicture: "https://pbs.twimg.com/profile_images/1675159188475879424/Z7_mKZeY_400x400.jpg"
        },
        content: "We can neither confirm nor deny that this is our first tweet.",
        date: "2021-08-17"
      },
      {
        id:10,
        user: {
          name: "Tom Cruise",
          userName: "Tommyboy",
          profilePicture: "https://images.markonart.com/wp-content/uploads/2023/03/colorful-cat-stylized-mosaic-art-print.jpg.webp"
        },
        picture: "post10.jpg",
        content: "Remembering the time I met the wonderful Prince Philip #RIP",
        date: "2021-04-10"
      }
    ]
  },
  getters: {
    postsListItem: state => {
      var postsListItem = state.storeList.map(post => {
            return {
                id:post.id,
                profilePicturePath:post.user.profilePicture,
                user:post.user.name,
                userName:post.user.userName,
                picture:post.picture,
                content:post.content,
                date:post.date
            }
        });
        return postsListItem
    }
  }
})