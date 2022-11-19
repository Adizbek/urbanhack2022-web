<template>
  <traffic-light :instructions="instructions" :force="force" style="width: 100vw; height: 100vh; "/>
</template>

<script>
import TrafficLight from "@/components/tf/TrafficLight";
import {useRoute} from "vue-router";
import {getForce, getInstructions} from "@/instructions";
import {computed, onBeforeUnmount, onMounted} from "vue";

export default {
  name: "TrafficLightPage",
  components: {TrafficLight},

  setup() {
    const route = useRoute()

    const connection = new window.RTCMultiConnection();

    onMounted(() => {
      connection.socketURL = 'https://muazkhan.com:9001/';
      connection.session = {
        audio: false,
        video: true,
      };

      connection.onstream = function(/*event*/) {
        // if(event.stream.isScreen) {
        //   $('.teacher-big-screen').html('').append(event.mediaElement);
        //   return;
        // }
        //
        // $('.students-videos').append(event.mediaElement);
      };

      connection.openOrJoin('urbanhack2022tuit');
    })

    onBeforeUnmount(() => {
      connection.leave()
    })

    return {
      instructions: computed(() => getInstructions.value[route.params.id]),
      force: computed(() => getForce.value[route.params.id])
    }
  }
}
</script>
