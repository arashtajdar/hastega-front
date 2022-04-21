<template>
  <h1>Create new author</h1>
  <form @submit="PostData" method="post">
    <input class="st-input" type="text" name="name" placeholder="Author name" v-model="posts.name"> <br><br>
    <button type="submit">Add new author</button>
  </form>
  <vue-basic-alert ref="alert" :duration="500" :closeIn="3000"/>

</template>

<script>




import axios from "axios";
import VueBasicAlert from "vue-basic-alert";

export default {
name: "AddAuthorComponent",
  components: {
    VueBasicAlert
  },
  data(){
    return {
      posts:{
        name:null,
      }
    }
  },
  methods:{

    PostData(e){
      let vm = this;
      axios
          .request({
            url: this.$root.baseUrl+'author',
            method: 'post',
            data: this.posts,
            headers: {
              'Authorization': 'Bearer '+this.$root.token
            }
          })
          .then(response => {
            console.log(response);
            vm.$refs.alert.showAlert(
                'Success',
                "Author added successfully!",
                'Success',
                "Success",
                'Success'
            );
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