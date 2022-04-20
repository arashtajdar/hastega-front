<template>
<div>
  <h1>Create new book</h1>
  <form @submit="PostData" method="post">
      <input class="st-input" type="text" name="name" placeholder="Book name" v-model="posts.name"> <br><br>
      <input class="st-input" v-model="authors.prefix" placeholder="Type author name to search"><br>
      <select v-show="authors.prefix.length > 2" class="st-input" name="author" size="5" v-model="posts.author_id">
        <option  v-for="Author in filteredNames" :key="Author.Author_id" :value="Author.Author_id">{{ Author.Author_name }}</option>
      </select> <br><br>
      <button type="submit">Create book</button>
  </form>
</div>
</template>

<script>
import axios from "axios";

export default {
name: "PostComponent",
  data(){
    return {
      posts:{
        name:null,
        author_id:null
      },
      authors:{
        names: [
          {
            "Author_id": 1,
            "Author_name": "Phyllis Zulauf IV",
            "Creation_date": "2022-04-16T11:50:47.000000Z"
          }
        ],
        selected: '',
        prefix: '',
        first: '',
        last: ''
      }
    }
  },
  computed: {
    filteredNames() {
      return this.authors.names.filter((n) =>
          n.Author_name.toLowerCase().search(this.authors.prefix.toLowerCase()) >= 0
      )
    }
  },
  methods:{

    PostData(e){
      axios
            .request({
              url: 'http://127.0.0.1:8000/api/book',
              method: 'post',
              data: this.posts,
              headers: {
                'Authorization': 'Bearer '+this.$root.token
              }
            })
            .then(response => {
              console.log(response)
            })
        e.preventDefault();
    },
    getAuthors(){
      let vm = this;

      axios
            .request({
              url: 'http://127.0.0.1:8000/api/authors',
              method: 'get',
              headers: {
                'Authorization': 'Bearer '+this.$root.token
              }
            })
            .then(response => {
              vm.authors.names = response.data;
            })
    }

  },mounted(){
    this.getAuthors();
  },
}
</script>

<style scoped>
.st-input {
  min-width: 200px;
}
</style>