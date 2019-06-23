<template>
    <div class="tweet">
        <b-card
            img-src="https://placekitten.com/300/300"
            img-alt="Card image"
            img-left
            class="mb-3"
        >
            <b-card-text>{{ tweet.author.name }}</b-card-text>
            <b-card-text>{{ tweet.body }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            body: String,
            avatar_url: String
        }
    }
};
</script>

<style>
</style>

