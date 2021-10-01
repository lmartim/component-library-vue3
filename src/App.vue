<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Header />
  <Button
    label="teste asdasd asd asd asd asd asd asd"
    type="destructive"
    size="lg"
  />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Button from "./components/Button/Button.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Button,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
