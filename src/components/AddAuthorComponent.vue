<template>
  <h1>Create new Author</h1>
  <form @submit="PostData" method="post">
    <input class="st-input" type="text" name="name" placeholder="Author name" v-model="posts.name"> <br><br>
    <button type="submit">Create book</button>
  </form>
</template>

<script>




import axios from "axios";

export default {
name: "AddAuthorComponent",
  data(){
    return {
      posts:{
        name:null,
      }
    }
  },
  methods:{

    PostData(e){
      axios
          .request({
            url: 'http://127.0.0.1:8000/api/author',
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
      axios
          .request({
            url: 'http://127.0.0.1:8000/api/author',
            method: 'get',
            headers: {
              'Authorization': 'Bearer '+this.$root.token
            }
          })
    }
  },

}
</script>

<style scoped>

</style>