<template>
  <!--  <button :class="doc" :style="style" @click="clickFun">-->
  <button :style="buttonStyle" @click="clickFun">

    <img v-if="icon" :src="require(`icons/${icon}.svg`)" alt="icon">
    {{ label }}
  </button>
  <router-link :to="{name: 'login'}"><p>Зарегистрироваться</p></router-link>
<!--  <div data-testid="location-display">{{ $route.fullPath }}</div>-->
</template>

<script>
// import {computed, reactive} from "vue";

// import HomeView from "@/views/HomeView.vue";

export default {
  // components: {HomeView},
  props: {
    /** My button */
    label: {
      type: String,
      require: true,
    },
    /** Заливка */
    // filled: {
    //   type: Boolean,
    //   default: false,
    // },
    icon: {
      type: String,
      default: '',
    },
    // backgroundColor: {
    //   type: String
    // }
  },
  data() {
    return {
      buttonStyle: {}
    }
  },
  methods: {
    clickFun() {
      this.buttonStyle = {backgroundColor: "rgb(245, 15, 103)"}
    }
  },
  // computed: {
  //   style: {
  //     get(){
  //       this.buttonStyle = {backgroundColor: this.backgroundColor}
  //       return {backgroundColor: this.backgroundColor}
  //     },
  //     set(newValue){
  //       console.log(newValue)
  //       return {backgroundColor: newValue}
  //     },
  //   },
  //   // doc( ){
  //   //   return {
  //   //     'btn btn-primary': this.filled,
  //   //     'btn btn-primary-primary': !this.filled,
  //   //   }
  //
  //   // },
  // },
//   setup(props) {
//     // const clickFun = () => {
//     //   console.log("что-угодно")
//     // }
//     props = reactive(props)
//     return {
//       doc: computed(()=> ({
//         'btn btn-primary': props.filled,
//         'btn btn-primary-primary': !props.filled,
//       })),
//       style: computed({
//         get(){
//           return {backgroundColor: props.backgroundColor}
//         },
//         set(newValue){
//           return {backgroundColor: newValue}
//         },
//         // backgroundColor: props.backgroundColor
//       }),
//     }
//   }
}
</script>

<style scoped>
.btn {
  min-width: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;
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
