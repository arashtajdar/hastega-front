<template>
<div>
  <h1>Post is here</h1>
  <form @submit="PostData" method="post">
      <input type="text" name="name"> <br><br>
      <input type="text" name="author"> <br><br>
      <button type="submit">Create book</button>
  </form>
</div>
</template>

<script>
export default {
name: "PostComponent",
  data(){},
  methods:{
      PostData(){

    }

  }
}
</script>

<style scoped>

</style>