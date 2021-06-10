<template>
  <section>
    <h1 v-if="error.statusCode === 404">404 Error!</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["error"],
};
</script>