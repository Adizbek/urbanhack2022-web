<template>
  <div
      style="width: 50vw; background: #333; display: flex; flex-direction: column; align-items: center; justify-content: center">

    <road-template-control style="display: flex"/>

    <table class="road-table">
      <tr>
        <td></td>
        <td align="center">
          <div class="road-cell" style="transform: rotate(180deg) translateY(-50px); ">
            <traffic-light class="tiny" :instructions="getInstructions['1']" :force="getForce['1']"/>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td align="center">
          <div class="road-cell" style="transform: rotate(90deg) translateY(-100px); ">
            <traffic-light class="tiny" :instructions="getInstructions['2']" :force="getForce['2']"/>
          </div>
        </td>
        <td>
        </td>
        <td align="center">
          <div class="road-cell" style="transform: rotate(-90deg) translateY(-100px);">
            <traffic-light class="tiny" :instructions="getInstructions['4']" :force="getForce['4']"/>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td align="center">
          <div class="road-cell" style="transform: translateY(-50px)">
            <traffic-light class="tiny" :instructions="getInstructions['3']" :force="getForce['3']"/>
          </div>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import TrafficLight from "@/components/tf/TrafficLight";
import {getForce, getInstructions} from "@/instructions";
import RoadTemplateControl from "@/components/RoadTemplateControl";

export default {
  name: "RoadView",
  components: {RoadTemplateControl, TrafficLight},

  setup() {
    return {
      getInstructions,
      getForce
    }
  }
}
</script>

<style>
.road-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 260px;
  position: relative;
}

.road-cell:after {
  position: absolute;
  bottom: -70px;
  content: '';
  width: 20px;
  background: #222222;
  height: 70px;
}


.road-table {
  border: 1px solid transparent;
  width: 100%;
}

.road-table td {
  /*align-items: center;*/
  /*display: flex;*/
}
</style>