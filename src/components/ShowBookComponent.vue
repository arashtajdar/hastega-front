<template>
  <h1>Book Details for {{data.Book_name}}</h1>
  <div>
    Book name : {{data.Book_name}} <br>
    Book author : {{data.Book_author}} <br>
    view count : {{data.view_count}} <br>
    created user : {{data.Created_user}} <br>
    creation date and time : {{data.Creation_date}} <br>
  </div>
</template>

<script>

// import axios from "axios";
import axios from "axios";

export default {
  name: "ShowBookComponent",
  data(){
    return {
      data : []
    }
  },mounted() {
    let vm = this;
    axios
        .request({
          url: this.$root.baseUrl+'book/'+this.$root.bookId,
          method: 'get',
          headers: {
            'Authorization': 'Bearer '+this.$root.token
          }
        })
        .then((response) => {
          vm.data = response.data;
          // console.log(vm.data);
        })
  }
}
</script>

<style scoped>

</style>