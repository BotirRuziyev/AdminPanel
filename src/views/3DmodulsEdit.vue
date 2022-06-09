<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-3">3d modul Taxrirlash</h1>

      <label>Loyihaning turi Rus</label>
      <v-text-field
        outlined
        v-model="nameRus"
        :counter="25"
        :rules="nameRules"
        label="Loyiha turini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Loyihaning turi English</label>
      <v-text-field
        outlined
        v-model="nameingliz"
        :counter="25"
        :rules="nameRules"
        label="Loyiha turini yozing ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <!-- Jamoa a'zosining kasbi -->
      <label>Loyihaning sarlavhasi Rus tilida</label>
      <v-text-field
        outlined
        v-model="kasbiRus"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning sarlavhasini yozing Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Loyihaning sarlavhasi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning sarlavhasini yozing Ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <label>Loyihaning rasmi</label>
      <v-file-input
        label="Loyihaning rasmi"
        outlined
        dense
        class="mt-6"
      ></v-file-input>

      <label form="#">Loyihaning topshirilgan yili</label>
     <v-text-field
        label="Loyihaning topshirilgan yili"
        outlined
        dense
        class="mt-6"
        type="number"
      ></v-text-field>

      <label>Loyihani qildirgan kompanyani yozing</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihani qildirgan kompanyani yozing"
        required
        class="mt-6"
      ></v-text-field>

      <label>Loyihaning nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning nomini yozing Rus tilida "
        required
        class="mt-6"
      ></v-text-field>

      <label>Loyihaning nomi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning nomini yozing Ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Loyihaning qurilgan joyi Rus tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning qurilgan joyini yozing Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Loyihaning qurilgan joyi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Loyihaning qurilgan joyini yozing Ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <label for="#">3D model haqida Rus tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="3D modullar haqida yozing Rus tilida"
        class="my-10"
      ></v-textarea>
      <label>3D model haqida Ingliz tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="3D modullar haqida yozing Ingliz tilida"
        class="my-10"
      ></v-textarea>
      <v-btn depressed color="primary">Taxrirlashni Yuklash </v-btn>
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
  h1{
  font-family: sans-serif;
  opacity: 0.6;
}
label{
  opacity: 0.8;
}
</style>
