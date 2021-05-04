<template>
  <div class="hello">
    <div id="mainTitle">
      <h1>{{ title }}</h1>
    </div>
    <div id="headerLinks">
      <router-link to="/">{{headerLink1}}</router-link>
      <router-link to="/logo">{{headerLink2}}</router-link>
      <router-link to="/about">{{headerLink3}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Welcome to VueExploration Co.',
      headerLink1: 'Home',
      headerLink2: 'Logo',
      headerLink3: 'About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  margin: 15px;
}
.hello {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: whitesmoke;
}
#headerLinks {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5=75%;
  height: 100%;
}
#mainTitle {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
