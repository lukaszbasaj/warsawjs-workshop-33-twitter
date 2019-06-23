

<template>
    <div>
        <TweetList :tweets="tweets"/>
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";
export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: [
                { id: "1234", body: "o jejku" },
                { id: "123456", body: "ojojo" },
                { id: "324523", body: "ale działa" },
                { id: "3434", body: "łał jak bardzo działa" },
                { id: "15345", body: "fiu fiu" }
            ]
        };
    }
};
</script>

<style>
</style>


