<template>
  <section>{{ message }}</section>
</template>

<script>
export default {
  data() {
    return {
      message: this.$route.params,
    };
  },
};
</script>