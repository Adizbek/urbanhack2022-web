<template>
  <div ref="mapRef"></div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "RoadMap",

  setup() {
    const mapRef = ref(null)
    const router = useRouter()

    onMounted(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpemJlayIsImEiOiJja3d4Z2JyejAwZDU4MzFyMDJ6cXJqNm96In0.PR6YGTLH02mfrXwX9JKo5A';
      const map = new mapboxgl.Map({
        container: mapRef.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [69.27988954278246,41.33491815525525], // starting position [lng, lat]
        zoom: 17, // starting zoom
      });

      map.on('load', () => {
        // Add a source for the state polygons.
        map.addSource('states', {
          'type': 'geojson',
          'data': '/geojson/map.geojson'
        });

        // Add a layer showing the state polygons.
        map.addLayer({
          'id': 'states-layer',
          'type': 'fill',
          'source': 'states',
          'paint': {
            'fill-color': 'rgba(58,204,99,0.4)',
            'fill-outline-color': 'rgb(12,70,6)'
          }
        });

        // When a click event occurs on a feature in the states layer,
        // open a popup at the location of the click, with description
        // HTML from the click event's properties.
        map.on('click', 'states-layer', () => {
          router.push({path: '/map/road'})
          // console.log(e.features[0].properties)
        });

        // Change the cursor to a pointer when
        // the mouse is over the states layer.
        map.on('mouseenter', 'states-layer', () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        // Change the cursor back to a pointer
        // when it leaves the states layer.
        map.on('mouseleave', 'states-layer', () => {
          map.getCanvas().style.cursor = '';
        });
      })
    });

    return {mapRef}
  }
}
</script>