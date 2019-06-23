

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
        const url = "http://localhost:3000/tweets";
        const responce = await fetch(url);
        const tweets = await responce.json();
        this.tweets = tweets;
    }
};
</script>

<style>
</style>


