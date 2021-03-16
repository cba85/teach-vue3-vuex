<template>
    <div>
        <p>Direct access: {{ $store.state.number }}</p>

        <p>Getter: {{ $store.getters.number }}</p>

        <p>Computed: {{ number }}</p>

        <numbers></numbers>
    </div>
</template>

<script>
import Numbers from './Numbers.vue'
import { mapGetters } from "vuex"

export default {
    components: { Numbers },
    name: "SumForm",
    computed: {
        /*
        number() {
            return this.$store.getters.number;
        }
        */
       ...mapGetters({
           number: "number"
       })
    }
}
</script>
