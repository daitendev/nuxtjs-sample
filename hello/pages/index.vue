<template>
  <section>
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
    <!-- <h1>{{ users[0].id }}: {{ users[0].name }}</h1> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}: {{ user.name }}, {{ user.company.name }}
      </li>
    </ul>
  </section>
</template>

<script>
const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/usersxxx";

export default {
  asyncData({ params, error }) {
    return axios
      .get(url)
      .then((res) => {
        return { users: res.data };
      })
      .catch((e) => {
        error({ statusCode: e.response.status, message: e.message });
      });
  },
  data() {
    return {
      message: "Hello nuxt js",
    };
  },
};
</script>

<style>
</style>
