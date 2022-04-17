<template>
<div>
  <h1>Create new book</h1>
  <form @submit="PostData" method="post">
      <input type="text" name="name" placeholder="Book name" v-model="posts.name"> <br><br>
      <input type="text" name="author" placeholder="Author" v-model="posts.author_id"> <br><br>
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
      }
    }
  },
  methods:{
      PostData(e){
        axios
            .request({
              url: 'http://127.0.0.1:8000/api/book',
              method: 'post',
              data: this.posts,
              // baseURL: 'https://preview-deliver.kenticocloud.com/PROJECT_ID',
              headers: {
                'Authorization': 'Bearer 3|qM4eHiaCWlsnw9WrHcij475exr7yZedk2w6LOBXi'
              }
            })
            .then(response => {
              console.log(response)
            })
        console.warn(this.posts);
        e.preventDefault();
    }

  }
}
</script>

<style scoped>

</style>