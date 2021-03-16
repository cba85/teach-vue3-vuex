<template>
<div>
    <button @click="addNumber">Add a number</button>
</div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name:"Number",
    methods: {
        ...mapActions({
            fetchRandomNumber: "fetchRandomNumber"
        }),
        addNumber() {
            //this.$store.state.numbers.push(1);
            //const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
            //this.$store.commit('addNumber', randomNumber);
            //this.$store.commit('addRandomNumber', { min: 1, max: 10 });
            //this.$store.dispatch('fetchRandomNumber', { min: 1, max: 10 });
            this.fetchRandomNumber({ min: 1, max: 10})
        }
    }
}
</script>