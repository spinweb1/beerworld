<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Beer />
  </div>
</template>

<script>
import Beer from '@/components/Beer'

export default {
  name: 'app',
  data() {
    return {
      title: 'Beer World'
    }
  },
  components: {
    Beer
  }
}
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 200;
  color: #ee6e73;
}
body {
  font-family: Open Sans, sans-serif;
}

h1 {
  color: rgb(91, 155, 207);
  text-align: center;
  font-family: 'Anton', sans-serif;
  text-shadow: 0 -1px 1px rgba(34,60,100,0.5);
}

/* On screens that are 675px or less, set the sorting font smaller */
@media screen and (max-width: 675px) {
  li {
    font-size: 14px;
    margin: 0 6px;
  }
}
</style>
