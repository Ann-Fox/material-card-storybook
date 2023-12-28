<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="title">{{ title }}</h4>
    <small class="secondary-text">{{ subText}}</small>
    <p class="supporting-tex">{{supportingText}}</p>
    <div v-if="buttonText">
      <a class="material-button">{{buttonText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subText: String,
    mediaHref: String,
    supportingText: String,
    buttonText: String},
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

.title {
  margin-bottom: 0;
}

.material-button {
  color: purple;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: .2rem;

  transition: .3s all linear;
}

.material-button:hover {
  background-color: rgb(106,20,185,0.082);
}
</style>
