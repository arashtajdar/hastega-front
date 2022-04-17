<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TopMenuComponent msg=""/>
  <PostComponent msg=""/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PostComponent from './components/PostComponent.vue'
import TopMenuComponent from "@/components/TopMenuComponent";

export default {
  name: 'App',
  components: {
    TopMenuComponent,
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
