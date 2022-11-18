<template>
  <div ref="mapRef"></div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import {onMounted, ref} from "vue";

export default {
  name: "RoadMap",

  setup() {
    const mapRef = ref(null)

    onMounted(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpemJlayIsImEiOiJja3d4Z2JyejAwZDU4MzFyMDJ6cXJqNm96In0.PR6YGTLH02mfrXwX9JKo5A';
      const map = new mapboxgl.Map({
        container: mapRef.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [69.240562, 41.311081], // starting position [lng, lat]
        zoom: 14, // starting zoom
        projection: 'globe' // display the map as a 3D globe
      });

      map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
      });
    })

    return {mapRef}
  }
}
</script>