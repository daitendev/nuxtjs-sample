<template>
  <div class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <!-- <button @click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button @click="$store.commit('updateMessage', 'payload value')"> -->
      <!-- <button @click="$store.dispatch('updateMessageAction')">Update</button> -->
      <p>{{ $store.state.hello.message }}</p>
      <button
        @click="
          $store.dispatch('hello/updateMessageAction', 'component payload')
        "
      >
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

