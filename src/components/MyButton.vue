<template>
  <button>
    <img v-if="icon" :src="require(`icons/${icon}.svg`)" alt="icon" >
    {{label}}
  </button>
</template>

<script>
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
    }
  }
}
</script>
