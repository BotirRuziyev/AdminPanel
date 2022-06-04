<template>
  <v-sheet >
    <v-container class="px-10">
      <h1 class="dark--text py-3">Xizmatlar qo'shish</h1>

      <!-- Jamoa a'zosining ismi -->

      <label>Xizmatning nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="nameRus"
        :counter="25"
        :rules="nameRules"
        label="xizmat nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Xizmatning nomi English tilida</label>
      <v-text-field
        outlined
        v-model="nameingliz"
        :counter="25"
        :rules="nameRules"
        label="xizmat nomini yozing ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <label>Xizmatning sarlavhasi Rus tilida </label>
      <v-text-field
        outlined
        v-model="kasbiRus"
        :counter="25"
        :rules="nameRules"
        label="Xizmat sarlavhasini yozing Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Xizmatning sarlavhasi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Xizmat sarlavhasini yozing Ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <label>Xizmatning  rasmi</label>
      <v-file-input
        label="Loyihaning rasmini yuklang"
        outlined
        dense
        class="mt-6"
      ></v-file-input>

      <label for="#">Xizmat haqida Rus tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="Xizmat haqida yozing Rus tilida"
        class="my-10"
      ></v-textarea>
      <label>Xizmat haqida Ingliz tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="Xizmat haqida yozing Ingliz tilida"
        class="my-10"
      ></v-textarea>
      <v-btn depressed color="primary"> Yuklash </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 15) || "Name must be less than 25 characters",
      ],

      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style>
.hr {
  height: 3px !important;
  width: 100% !important;
  background-color:red !important;
  border-radius: 5px !important;
  margin-bottom: 20px;
}
  h1{
  font-family: sans-serif;
  opacity: 0.6;
}
label{
  opacity: 0.8;
}
</style>
