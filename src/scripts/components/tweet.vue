<template>
    <div class="tweet">
        <b-card title="Card title" sub-title="Card subtitle">
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
            body: String
        }
    },
};
</script>

<style>
</style>

