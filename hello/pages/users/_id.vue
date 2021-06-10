<template>
  <section>
    <h1>{{ message }}</h1>
    <p>id: {{ this.$route.params.id }}</p>
    {{ this.$data }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "/user/_id.vue を表示中",
    };
  },
  validate(hoge) {
    console.log(hoge.params);
    // return /^\d+$/.test(params.id);
    return true;
  },
};
</script>