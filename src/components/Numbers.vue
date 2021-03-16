<template>
    <div>
    <p>Numbers ({{ countNumbers }})</p>
    <ul>
        <li v-for="numb in numbers" :key="numb.index">{{ numb }}</li>
    </ul>

        <add-number></add-number>
    </div>
</template>

<script>
import AddNumber from './AddNumber.vue'
import { mapGetters } from "vuex";

export default {
    components: { AddNumber },
    name: "Numbers",
    computed: {
        ...mapGetters({
            numbers: "numbers",
            countNumbers: "countNumbers"
        })
        /*
        numbers() {
            return this.$store.getters.numbers;
        },
        countNumbers() {
            return this.$store.getters.countNumbers;
        },
        */
    }
}
</script>
