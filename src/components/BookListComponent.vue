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
      </tr>
    </thead>
    <tbody v-for="(item,index) in items" :key="item.id">
      <tr>
        <td>{{ index }}</td>
        <td>{{ item.Book_name }}</td>
        <td>{{ item.Book_author }}</td>
        <td>{{ item.view_count }}</td>
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
            // baseURL: 'https://preview-deliver.kenticocloud.com/PROJECT_ID',
            headers: {
              'Authorization': 'Bearer 3|qM4eHiaCWlsnw9WrHcij475exr7yZedk2w6LOBXi'
            }
          })
          .then((response) => {

            vm.items = response.data;
          })
      // console.warn(this.posts);
      // e.preventDefault();
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

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>