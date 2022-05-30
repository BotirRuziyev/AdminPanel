<template>
  <v-sheet color="#fafbfe">
    <v-container class="px-10">
    <h1>Kompanya haqida</h1>
    <form class="mt-16">
      <label for="#">Kompanya haqida Rus tilida</label>
      <v-textarea
          outlined
          name="input-7-4"
          label="Kompanya haqida yozing Rus tilida"
          class="mt-7"
        ></v-textarea>
        <label for="#">Kompanya haqida Ingliz tilida</label>
    <v-textarea
          outlined
          name="input-7-4"
          label="Kompanya haqida yozing Ingliz tilida"
          class="mt-7"
        ></v-textarea>
        <v-btn
      depressed
      color="primary"
      class="mb-5"
    >
      Yuklash
    </v-btn>
    </form>
  </v-container>
  </v-sheet>
</template>

<style scoped>
label{
  opacity: 0.8;
  width: 100px;
}
h1{
  font-family: sans-serif;
  opacity: 0.6;
}
</style>
