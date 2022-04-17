<template>
  <h1>Book Details for {{data.Book_name}}</h1>
  <div @click="dum()">
    Book name : {{data.Book_name}} <br>
    Book author : {{data.Book_author}} <br>
    view count : {{data.view_count}} <br>
    created user : {{data.Created_user}} <br>
    creation date and time : {{data.Creation_date}} <br>
  </div>
</template>

<script>

// import axios from "axios";
export default {
  name: "ShowBookComponent",
  data(){
    return {
      data : this.$root.bookData
    }
  }
}
</script>

<style scoped>

</style>