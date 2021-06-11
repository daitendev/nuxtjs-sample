<template>
  <section>
    <h1>Counter</h1>
    <span>
      count: {{ $store.state.count.count }}
      <button @click="$store.dispatch('count/countUpAction', 1)">+1</button>
      <button @click="$store.dispatch('count/resetAction')">reset</button>
    </span>
    <hr />
  </section>
</template>