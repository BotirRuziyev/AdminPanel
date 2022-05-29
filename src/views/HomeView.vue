<template>
  <v-sheet color="#fafbfe" height="100%">
    <HelloWorld />
  </v-sheet>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
