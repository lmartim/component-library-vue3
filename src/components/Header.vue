<template>
  <h1>{{ text }}</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "Hello World",
    },
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>