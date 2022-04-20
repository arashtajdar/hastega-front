<template>
  <img alt="Vue logo" style="width: 100px;" src="./assets/logo.png">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" :class="{ active: current === 'BookListComponent' }">
          <a class="nav-link" @click="current= 'BookListComponent'" href="#">Books list</a>
        </li>
        <li class="nav-item" :class="{ active: current === 'AddBookComponent' }">
          <a class="nav-link" @click="current= 'AddBookComponent'" href="#">Add book</a>
        </li>
        <li class="nav-item" :class="{ active: current === 'AddAuthorComponent' }">
          <a class="nav-link" @click="current= 'AddAuthorComponent'" href="#">Add author</a>
        </li>
      </ul>
    </div>
  </nav>
  <AddBookComponent v-if="current==='AddBookComponent'"/>
  <BookListComponent v-if="current==='BookListComponent'" />
  <ShowBookComponent v-if="current==='ShowBookComponent'" />
  <AddAuthorComponent v-if="current==='AddAuthorComponent'" />
  <FooterComponent />
</template>

<script>
import AddBookComponent from './components/AddBookComponent.vue'
import BookListComponent from "@/components/BookListComponent";
import FooterComponent from "@/components/FooterComponent";
import ShowBookComponent from "@/components/ShowBookComponent";
import AddAuthorComponent from "@/components/AddAuthorComponent";
export default {
  name: 'App',
  components: {
    AddBookComponent,BookListComponent,FooterComponent,ShowBookComponent,AddAuthorComponent
  },
  data(){
    return {
      current: "BookListComponent",
      bookData: null,
      baseUrl: "http://127.0.0.1:8000/api/",
      token: "1|Mnd9MBYSfJ8bPcU9T5oNk18XdPvERNU1l8A8ibgo",
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
  padding: 5px;
  border: 1px solid #41b883;
  background: white;
}
.nav-item.active{
  background: #41b883;

}
.nav-item.active>.nav-link{
  color:white;
}
.nav-link {
  text-decoration: navajowhite;
  color: black;
  font-size: 16px;
}
.nav-link:hover {
  color: #41b883;
}
</style>
