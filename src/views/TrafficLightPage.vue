<template>
  <traffic-light :instructions="instructions" :force="force" style="width: 100vw; height: 100vh; "/>
</template>

<script>
import TrafficLight from "@/components/tf/TrafficLight";
import Modes from "@/components/tf/Modes";
import {useRoute} from "vue-router";

export default {
  name: "TrafficLightPage",
  components: {TrafficLight},

  setup() {
    const route = useRoute()

    const instructions = route.params.id === '1' ? [
      {type: Modes.RED, time: 5000},
      {type: Modes.YELLOW, time: 2000},
      {type: Modes.GREEN, time: 5000, sign: '1'},
      {type: Modes.YELLOW, time: 2000},
    ] : [
      {type: Modes.GREEN, time: 5000, sign: '1'},
      {type: Modes.YELLOW, time: 2000},
      {type: Modes.RED, time: 5000},
      {type: Modes.YELLOW, time: 2000},
    ];

    // const force = route.params.id === '1' ? {type: Modes.RED} : {type: Modes.GREEN};
    const force = null;

    return {instructions, force}
  }
}
</script>
