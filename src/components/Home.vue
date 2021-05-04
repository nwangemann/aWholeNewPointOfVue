<template>
  <div class="home">
      <h1>{{homePage}}</h1>
      <input v-model="searchInput" />
      <button v-on:click="() => this.fetchAPIdata(this.searchInput)" >Search</button>
      <h2 v-if="responseAvailable">{{result.name}}</h2>
      <div id="pokemonImages" v-if="responseAvailable">
        <img :src=result.sprites.back_default />
        <img :src=result.sprites.front_default />
      </div>
      <h1 v-if="noResult">No Result</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      homePage: 'Search for pokemon or whatever',
      noResult: false,
      responseAvailable: false,
      result: '',
      searchInput: ''
    }
  },
  methods: {
    fetchAPIdata () {
      let searchRequestAddress = 'https://pokeapi.co/api/v2/pokemon/' + this.searchInput
      this.noResult = false
      fetch(searchRequestAddress, {
        'method': 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            console.log('search request failed: ' + response.status + ' : ' + response.statusText)
            this.responseAvailable = false
            this.noResult = true
          }
        })
        .then(response => {
          this.result = response
          this.responseAvailable = true
        })
        .catch(err => {
          console.log(err)
          this.noResult = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin: 15px;
}
.home {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
#pokemonImages {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
