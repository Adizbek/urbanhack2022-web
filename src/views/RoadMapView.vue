<template>
  <div style="display: flex">
    <road-map style="flex-grow: 1; height: 100vh;"/>

    <router-view/>
  </div>
</template>

<script>
import RoadMap from "@/components/RoadMap";

export default {
  name: "RoadMapView",
  components: {RoadMap}
}
</script>