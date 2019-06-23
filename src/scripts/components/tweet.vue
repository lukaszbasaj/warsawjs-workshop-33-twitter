<template>
    <b-card
        :title="tweet.author.name"
        :sub-title="tweet.created_time | myDate"
        :img-src="tweet.author.avatar_url"
        img-left
        class="m-3"
    >
        <b-card-text>{{ tweet.body }}</b-card-text>
    </b-card>
</template>

<script>
import myDate from "@/helpers/my-date.js";
export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            created_time: String,
            author: {
                id: String,
                name: String,
                avatar_url: String
            },
            body: String
        }
    },
    computed: {
        created_time() {
            myDate(this.tweet.created_time);
        }
    },
    filters: {
        myDate(value) {
            return myDate(value);
        }
    }
};
</script>

<style>
</style>

