<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="title">{{ title }}</h4>
    <p class="secondary-text">{{ subText}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subText: String,
    mediaHref: String,
  },
  computed: {
    mediaBg() {
      return {
        backgroundImage: `url(${this.mediaHref})`
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap');

.card {
  background-color: #fff;
  border-radius: .2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 350px;
  padding: .8rem;
  font-family: 'Quicksand', sans-serif;
}

.title, .secondary-text {
  margin: .5rem auto .5rem auto;
}

.media {
  height: 150px;
}
</style>
