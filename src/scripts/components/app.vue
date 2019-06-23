

<template>
    <div>
        <TweetList :tweets="tweets"/>
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";
import tweetVue from "./tweet.vue";
export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: []
        };
    },
    methods: {
        async fetchTweets() {
            const url = "http://localhost:3000/tweets";
            try {
                const responce = await fetch(url);
                return await responce.json();
            } catch (err) {
                console.log(err);
            }
        }
    },
    // old fashion style:
    // mounted() {
    //     const url = "http://localhost:3000/tweets";
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //             this.tweets = json;
    //         });
    // proper way style:

    async mounted() {
        this.tweets = await this.fetchTweets();
    }
};
</script>

<style>
</style>


