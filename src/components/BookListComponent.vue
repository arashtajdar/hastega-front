<template>
  <h1>book list</h1>
  <li >

  </li>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Book name</th>
        <th>Book Author</th>
        <th>View count</th>
        <th>Show details</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody v-for="(item,index) in items" :key="item.id">
      <tr>
        <td>{{ index+1 }}</td>
        <td>{{ item.Book_name }}</td>
        <td>{{ item.Book_author }}</td>
        <td>{{ item.view_count }}</td>
        <td @click="ShowBook(item)" class="action-btn">SHOW</td>
        <td @click="DeleteBook(item.Book_id)"  class="action-btn">DELETE</td>
      </tr>
    </tbody>


  </table>
</template>

<script>
import axios from "axios";

export default {


  name: "BookListComponent",
  data() {
    return {
      items: [
      ]
    }
  },
  methods: {

    getBookList() {
      let vm = this;
      // e.preventDefault();
      axios
          .request({
            url: 'http://127.0.0.1:8000/api/books',
            method: 'get',
            headers: {
              'Authorization': 'Bearer '+this.$root.token
            }
          })
          .then((response) => {
            vm.items = response.data;
          })
    },
    DeleteBook(id){
      if(confirm("Do you really want to delete?")){
        axios
            .request({
              url: 'http://127.0.0.1:8000/api/book/'+id,
              method: 'delete',
              headers: {
                'Authorization': 'Bearer '+this.$root.token
              }
            })
            .then(() => {
              this.getBookList();
            })
      }

    },
    ShowBook(book){
      this.$root.current= 'ShowBookComponent';
      this.$root.bookData = book
    }

  },mounted(){
    this.getBookList();
  },
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: auto;
  width: 70%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.action-btn{
  cursor: pointer;
}
</style>