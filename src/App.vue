<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" @click="current= 'BookListComponent'" href="#">List of your books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="current= 'PostComponent'" href="#">create new book</a>
        </li>
      </ul>
    </div>
  </nav>
  <PostComponent v-if="current==='PostComponent'" msg=""/>
  <BookListComponent v-if="current==='BookListComponent'" msg=""/>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import BookListComponent from "@/components/BookListComponent";

export default {
  name: 'App',
  components: {
    PostComponent,BookListComponent
  },
  data(){
    return {
      current: "PostComponent"
    }
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
.nav-item {
  display: inline;
  margin-right: 3%;
}
.nav-link {
  text-decoration: navajowhite;
  color: black;
  font-size: 14px;
}
.nav-link:hover {
  color: #41b883;
}
</style>
