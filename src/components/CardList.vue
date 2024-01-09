<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <img :src="card.mediaHref" alt="">
      <h4 class="title">{{ card.title }}</h4>
      <h5 class="secondary-text">{{ card.subText}}</h5>
      <p class="supporting-tex">{{card.supportingText}}</p>
      <div v-if="card.buttonText">
        <a class="material-button">{{card.buttonText}}</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cards: Array,
    // title: String,
    // subText: String,
    // mediaHref: String,
    // supportingText: String,
    // buttonText: String
  },
    // title: String,
    // subText: String,
    // mediaHref: String,
    // supportingText: String,
    // buttonText: String},
  // computed: {
  //   mediaBg() {
  //     return {
  //       backgroundImage: `url(${this.mediaHref})`
  //     }
  //   }
  // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap');

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.card{
  background-color: #fff;
  border-radius: .2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 300px;
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
