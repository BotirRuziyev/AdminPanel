<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-10">Eng yaxshi loyihani qo'shish</h1>

      <label>Eng yaxshi loyihaning turi Rus tilida</label>
      <v-text-field
        outlined
        v-model="nameRus"
        :counter="25"
        :rules="nameRules"
        label="Eng yaxshi loyihaning turi Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Eng yaxshi loyihaning turi English tilida</label>
      <v-text-field
        outlined
        v-model="nameingliz"
        :counter="25"
        :rules="nameRules"
        label="Eng yaxshi loyihaning turi English tilida"
        required
        class="mt-6"
      ></v-text-field>

      <!-- Jamoa a'zosining kasbi -->
      <label>Eng yaxshi loyihaning sarlavhasi Rus tilida</label>
      <v-text-field
        outlined
        v-model="kasbiRus"
        :counter="25"
        :rules="nameRules"
        label="Eng yaxshi loyihaning sarlavhasi Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Eng yaxshi loyihaning sarlavhasi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Eng yaxshi loyihaning sarlavhasi Ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <label>Eng yaxshi loyihaning rasmi</label>
      <v-file-input
        label="Eng yaxshi loyihaning rasmi"
        outlined
        dense
        class="mt-6"
      ></v-file-input>

      <label form="#">Jamoa a'zosining E-maili</label>
      <v-text-field
        outlined
        v-model="email"
        :rules="emailRules"
        label="jamoa a'zosining E-maili"
        required
        class="mt-6"
      ></v-text-field>

      <label for="#">Eng yaxshi loyiha haqida Rus tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="Eng yaxshi loyiha haqida Rus tilida"
        class="my-10"
      ></v-textarea>
      <label>Eng yaxshi loyiha haqida Ingliz tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="Eng yaxshi loyiha haqida Ingliz tilida"
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
      name: "",
      nameRus: "",
      nameIngliz: "",
      kasbiRus: "",
      kasbiIngliz: "",
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
  background-color: red !important;
  border-radius: 5px !important;
  margin-bottom: 20px;
}
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
label {
  opacity: 0.8;
}
</style>
