<template>
  <div class="tf">
    <transition-group name="slide-up">
      <div key="red" class="tf tf-red" v-if="Modes.RED === instruction.item.type">
        <div class="text" v-if="instruction.nextTime" v-html="Math.ceil(instruction.nextTime / 1000)"/>

        <tf-sign :sign="instruction.item.sign"/>
      </div>

      <div key="yellow" class="tf tf-yellow" v-else-if="Modes.YELLOW === instruction.item.type">
        <div class="text" v-if="instruction.nextTime" v-html="Math.ceil(instruction.nextTime / 1000)"/>

        <tf-sign :sign="instruction.item.sign"/>
      </div>

      <div key="green" class="tf tf-green" v-else-if="Modes.GREEN === instruction.item.type">
        <div class="text" v-if="instruction.nextTime" v-html="Math.ceil(instruction.nextTime / 1000)"/>
        <tf-sign :sign="instruction.item.sign"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
import TfSign from "@/components/tf/TfSign";
import Modes from "@/components/tf/Modes";

export default {
  name: "TrafficLight",

  components: {TfSign},

  props: {
    instructions: {},
    force: {},
  },

  setup(props) {
    const currentTime = ref(Date.now())

    setInterval(() => {
      currentTime.value = Date.now();
    }, 300)

    const max = computed(() => props.instructions.reduce((total, i) => {
      return total + i.time
    }, 0));

    const range = computed(() => props.instructions.reduce((arr, cur, i) => {
      if (arr.length === 0) {
        arr.push({min: 0, max: cur.time, i: cur})
      } else {
        arr.push({min: arr[i - 1].max, max: arr[i - 1].max + cur.time, i: cur})
      }
      return arr
    }, []))

    const instruction = computed(() => {
      if (props.force) {
        return {item: props.force}
      }

      if (props.instructions.length === 0) return null;

      const div = currentTime.value % max.value;

      for (let i = 0; i < range.value.length; i++) {
        const item = range.value[i];

        let next;

        if (range.value.length <= i + 1) {
          next = range.value[0];
        } else {
          next = range.value[i + 1];
        }

        if (item.min <= div && item.max >= div) {
          return {item: item.i, next: next, nextTime: Math.abs(div - item.max)}
        }
      }

      return null;
    })

    const color = computed(() => {
      const i = instruction.value.item;

      if (!i)
        return null;

      if (i.type === Modes.RED) {
        return 'tf-red'
      } else if (i.type === Modes.YELLOW) {
        return 'tf-yellow'
      } else if (i.type === Modes.GREEN) {
        return 'tf-green'
      } else {
        return null;
      }
    })

    return {
      color,
      instruction,
      Modes,
    }
  }
}
</script>

<style>
@import "./tf.scss";

html, body {
  overflow: hidden !important;
}

.tf {
  width: 100%;
  height: 100%;
  position: relative;
}

.tf .text {
  line-height: 0;
  padding-top: 50%;
}

.tf.tiny {
  border-radius: 20px;
  border: 6px solid #222;
  position: relative;
  overflow: hidden;
}

.tf.tiny > .tf {
  font-size: 100px !important;
}

.tf > .tf {
  position: absolute;
  font-size: 300px;
  color: white;
  display: flex;
  justify-content: center
}

.tf-green {
  background: #33a532;
}

.tf-red {
  background: #bb1e10;
}

.tf-yellow {
  background: #EFB700;
}
</style>