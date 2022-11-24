<template>
    <div id="app">
        <div class="search-wrapper mt-4">
            <input type="text" v-model="search" placeholder="Search title.." />
            <label>Search title:</label>
        </div>
        <div class="wrapper">
            <div class="card" v-for="post, index in filteredList" :key="index">
                <a v-bind:href="post.link" target="_blank">
                    <img v-bind:src="post.img" />
                    <small>posted by: {{ post.author }}</small>
                    {{ post.title }}
                </a>
                <q-btn color="red" icon="delete" @click="del(index)" size="md"
                    style="position: relative; padding: 0px 20px 0px 60px; ">
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script>
class Post {
    constructor(title, link, author, img) {
        this.title = title;
        this.link = link;
        this.author = author;
        this.img = img;
    }
}
export default {
    data() {
        return {
            search: '',
            postList: [
                new Post(
                    'Vue.js',
                    'https://vuejs.org/',
                    'Karan',
                    'https://vuejs.org//images/logo.png'
                ),
                new Post(
                    'React.js',
                    'https://facebook.github.io/react/',
                    'Karan',
                    'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
                ),
                new Post(
                    'Angular.js',
                    'https://angularjs.org/',
                    'Karan',
                    'https://angularjs.org/img/ng-logo.png'
                ),
                new Post(
                    'Ember.js',
                    'http://emberjs.com/',
                    'Karan',
                    'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
                ),
                new Post(
                    'Meteor.js',
                    'https://www.meteor.com/',
                    'Karan',
                    'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
                ),
                new Post(
                    'Aurelia',
                    'http://aurelia.io/',
                    'Karan',
                    'https://cdn.auth0.com/blog/aurelia-logo.png'
                ),
                new Post(
                    'Node.js',
                    'https://nodejs.org/en/',
                    'Karan',
                    'https://code-maven.com/img/node.png'
                ),
                new Post(
                    'Pusher',
                    'https://pusher.com/',
                    'Karan',
                    'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
                ),
                new Post(
                    'Feathers.js',
                    'http://feathersjs.com/',
                    'Karan',
                    'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
                ),
            ]
        };
    },
    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        del(index) {
            this.postList.splice(index, 1)
        },
    },
}
</script>

<style scoped lang="scss">
html,
body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
}

div#app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .search-wrapper {
        position: relative;

        label {
            position: absolute;
            font-size: 12px;
            color: rgba(0, 0, 0, .50);
            top: 8px;
            left: 12px;
            z-index: -1;
            transition: .15s all ease-in-out;
        }

        input {
            padding: 4px 12px;
            color: rgba(0, 0, 0, .70);
            border: 1px solid rgba(0, 0, 0, .12);
            transition: .15s all ease-in-out;
            background: white;

            &:focus {
                outline: none;
                transform: scale(1.05);

                &+label {
                    font-size: 10px;
                    transform: translateY(-24px) translateX(-12px);
                }
            }

            &::-webkit-input-placeholder {
                font-size: 12px;
                color: rgba(0, 0, 0, .50);
                font-weight: 100;
            }
        }
    }

    .wrapper {
        display: flex;
        max-width: 444px;
        flex-wrap: wrap;
        padding-top: 12px;
    }

    .card {
        box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
        max-width: 124px;
        margin: 12px;
        transition: .15s all ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        a {
            text-decoration: none;
            padding: 12px;
            color: #03A9F4;
            font-size: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                height: 100px;
            }

            small {
                font-size: 10px;
                padding: 4px;
            }
        }
    }

    .hotpink {
        background: hotpink;
    }

    .green {
        background: green;
    }

    .box {
        width: 100px;
        height: 100px;
        border: 1px solid rgba(0, 0, 0, .12);
    }
}
</style>