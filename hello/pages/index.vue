<template>
  <section>
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">Price Page</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello nuxt js",
    };
  },
};
</script>

<style>
</style>
