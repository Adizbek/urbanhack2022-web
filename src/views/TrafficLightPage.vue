<template>
  <traffic-light :instructions="instructions" :force="force" style="width: 100vw; height: 100vh; "/>
</template>

<script>
import TrafficLight from "@/components/tf/TrafficLight";
import {useRoute} from "vue-router";
import {getForce, getInstructions} from "@/instructions";
import {computed} from "vue";

export default {
  name: "TrafficLightPage",
  components: {TrafficLight},

  setup() {
    const route = useRoute()

    return {
      instructions: computed(() => getInstructions.value[route.params.id]),
      force: computed(() => getForce.value[route.params.id])
    }
  }
}
</script>
