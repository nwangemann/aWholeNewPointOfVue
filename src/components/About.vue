<template>
  <div class="about">
      <h1>{{aboutMessage}}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      aboutMessage: 'Here is some brief information about our exploration!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.about {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
