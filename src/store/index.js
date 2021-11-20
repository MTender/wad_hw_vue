import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [{
                "id": 1,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp1.jpg"),
                    "firstname": "Jeffrey",
                    "lastname": "Basedos"
                },
                "date": "2021-09-17",
                "time": "9:45",
                "caption": "I think it's going to rain again",
                "image": require("@/assets/post-images/post1-img.jpg"),
                "like": 0,
            },
            {
                "id": 2,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp2.jpg"),
                    "firstname": "Jeffrey",
                    "lastname": "nr 2"
                },
                "date": "2021-09-15",
                "time": "17:43",
                "caption": "Which weighs more, a pound of feathers or a pound of bricks?",
                "like": 0,
            },
            {
                "id": 3,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp3.jpg"),
                    "firstname": "Jeffrey",
                    "lastname": "the Third"
                },
                "date": "2021-09-14",
                "time": "0:00",
                "caption": "Which weighs more, a pound of feathers or a pound of bricks?",
                "image": require("@/assets/post-images/post3-img.jpg"),
                "like": 0,
            },
            {
                "id": 4,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp4.webp"),
                    "firstname": "Peter",
                    "lastname": "Man"
                },
                "date": "2021-09-14",
                "time": "8:30",
                "caption": "This is a funny-looking dog, don't you think?",
                "image": require("@/assets/post-images/post4-img.webp"),
                "like": 0,
            },
            {
                "id": 5,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp5.png"),
                    "firstname": "Mariah",
                    "lastname": "Goeswek"
                },
                "date": "2021-09-13",
                "time": "15:27",
                "caption": "When dad tells you to buy Enefit Green stock and you go all in. #stonks",
                "like": 0,
            },
            {
                "id": 6,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp1.jpg"),
                    "firstname": "Jeffrey",
                    "lastname": "Basedos"
                },
                "date": "2021-09-16",
                "time": "19:46",
                "caption": "Anyone up for some anti-union activities?",
                "like": 0,
            },
            {
                "id": 7,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp6.webp"),
                    "firstname": "Yuri",
                    "lastname": "Nate"
                },
                "date": "2021-09-17",
                "time": "13:53",
                "caption": "I really liked the last episode of Notflix's \"Cephalopod game\"",
                "image": require("@/assets/post-images/post7-img.webp"),
                "like": 0,
            },
            {
                "id": 8,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp7.png"),
                    "firstname": "Sander",
                    "lastname": "Sand"
                },
                "date": "2021-09-16",
                "time": "18:32",
                "caption": "I think it's time to finally admit it. I love sand.",
                "image": require("@/assets/post-images/post8-img.jpg"),
                "like": 0,
            },
            {
                "id": 9,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp4.webp"),
                    "firstname": "Peter",
                    "lastname": "Man"
                },
                "date": "2021-09-15",
                "time": "15:10",
                "caption": "I just found out how to actually play the game \"hangman\". Been doing it wrong for years.",
                "like": 0,
            },
            {
                "id": 10,
                "author": {
                    "pfp": require("@/assets/profile-pictures/pfp5.png"),
                    "firstname": "Mariah",
                    "lastname": "Goeswek"
                },
                "date": "2021-09-14",
                "time": "11:17",
                "caption": "Cute dog",
                "image": require("@/assets/post-images/post10-img.jpg"),
                "like": 0,
            }
        ]
    },
    mutations: {
        increaseLikes: (state, id) => {
            state.posts[id - 1].like++;
        },
        resetLikes: (state) => {
            state.posts.forEach((post) => {
                post.like = 0;
            });
        }
    },
    actions: {},
    modules: {},
});