<template>
  <div style="display: flex;">
    <div style="display: flex; height: 80vh; flex-grow: 1;">
      <road-map style="flex-grow: 1; height: 100vh;"/>
      <div id="video-container"></div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import RoadMap from "@/components/RoadMap";
import {onBeforeUnmount, onMounted} from "vue";

export default {
  name: "RoadMapView",
  components: {RoadMap},

  setup() {
    const connection = new window.RTCMultiConnection();

    onMounted(() => {
      connection.socketURL = 'https://muazkhan.com:9001/';
      connection.session = {
        audio: false,
        video: true,
      };

      connection.onstream = function (event) {
        const el = document.getElementById('video-container')

        el.append(event.mediaElement);
      };

      connection.openOrJoin('urbanhack2022tuit');
    })

    onBeforeUnmount(() => {
      connection.leave()
    })
  }
}
</script>

<style>
#video-container {
  display: flex;
  flex-direction: column;
}
#video-container video {
  width: 200px;
  height: 250px;
  background: black;
}
</style>