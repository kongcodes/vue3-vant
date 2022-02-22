<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <h3>战队信息页</h3>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
h3 {
  color: $myColor;
}
</style>
