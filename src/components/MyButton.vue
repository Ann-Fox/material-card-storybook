<template>
  <button :class="classes" :style="backgroundColor">
    <img v-if="icon" :src="require(`icons/${icon}.svg`)" alt="icon" >
    {{label}}
  </button>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  props: {
    label: {
      type: String,
      require: true,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String
    }
  },
  setup(props) {
    props = reactive(props)
    return {
      classes: computed(()=> ({
        'btn btn-primary': props.filled,
        'btn btn-primary-primary': !props.filled,
      })),
      style: computed(()=>({
        backgroundColor: props.backgroundColor
      })),
    }
  }
}
</script>

<style scoped>
.btn {
  width: 100px;
  border: none;
  font-size: 20px;
}

.btn-primary {
  background-color: #66bf3c;
  color: #a10a61;
}

.btn-primary-primary {
  background-color: #1ea7fd;
  color: #0e0d01;

}
</style>
