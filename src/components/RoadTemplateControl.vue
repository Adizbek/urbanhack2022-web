<template>
  <div class="rt-control">
    <div :class="{active: store.template === 1}" @click="setTemplate(1)">
      <img :src="require('../components/tf/templates/4.svg')" height="100">
    </div>
    <div :class="{active: store.template === 2}" @click="setTemplate(2)">
      <img :src="require('../components/tf/templates/6.svg')" height="100">
    </div>
    <div :class="{active: store.template === 3}" @click="setTemplate(3)">
      <img :src="require('../components/tf/templates/5.svg')" height="100">
    </div>
    <div :class="{active: store.template === 4}" @click="setTemplate(4)">
      <img :src="require('../components/tf/templates/7.svg')" height="100">
    </div>

    <div :class="{active: store.template === 0}" @click="setTemplate(0)">
      <span style="font-size: 40px">Auto</span>
    </div>
  </div>
</template>

<script>
import {activeTemplate, setActiveTemplate, store} from "@/instructions";

export default {
  name: "RoadTemplateControl",

  setup() {
    return {
      store,
      activeTemplate,
      setTemplate: setActiveTemplate
    }
  }
}
</script>

<style>
.rt-control {
  color: white;
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
}

.rt-control div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: #555;
  cursor: pointer;
}

.rt-control div.active {
  background: #00b2ff;
}
</style>