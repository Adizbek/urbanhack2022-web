<template>
  <div class="sign">
    <img :src="require('./signs/'+ (sign || 4) + '.svg')">
  </div>
</template>

<script>
export default {
  name: "TfSign",

  props: {
    sign: {}
  },
}
</script>

<style>

.sign {
  position: absolute;
  z-index: 5;
  left: 0;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.sign img {
  width: 70%;
}
</style>