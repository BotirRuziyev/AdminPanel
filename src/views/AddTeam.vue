<template>
  <v-sheet color="#fafbfe">
    <v-container class="px-10">
      <h1 class="dark--text py-10">Jamoa qo'shish</h1>

      <!-- Jamoa a'zosining ismi -->

      <label>Jamoa a'zosining ismi rus tilida</label>
      <v-text-field
        outlined
        v-model="nameRus"
        :counter="25"
        :rules="nameRules"
        label="Jamoa a'zosining ismi rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Jamoa a'zosining ismi ingliz tilida</label>
      <v-text-field
        outlined
        v-model="nameingliz"
        :counter="25"
        :rules="nameRules"
        label="Jamoa a'zosining ismi ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>

      <hr class="danger--text hr" />

      <!-- Jamoa a'zosining kasbi -->
      <label>Jamoa a'zosining kasbi rus tilida</label>
      <v-text-field
        outlined
        v-model="kasbiRus"
        :counter="25"
        :rules="nameRules"
        label="Jamoa a'zosining kasbi rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Jamoa a'zosining kasbi ingliz tilida</label>
      <v-text-field
        outlined
        v-model="kasbiIngliz"
        :counter="25"
        :rules="nameRules"
        label="Jamoa a'zosining kasbi ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <hr class="danger--text hr" />
      <label>Jamoa a'zosining rasmi</label>
      <v-file-input
        label="jamoa a'zosining rasmi"
        outlined
        dense
        class="mt-6"
      ></v-file-input>
      <hr class="danger--text hr" />
      <label form="#">Jamoa a'zosining E-maili</label>
      <v-text-field
        outlined
        v-model="email"
        :rules="emailRules"
        label="jamoa a'zosining E-maili"
        required
        class="mt-6"
      ></v-text-field>
      <hr class="danger--text hr" />
      <label for="#">Jamoa a'zosi haqida Rus tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="jamoa a'zosi haqida Rus tilida"
        class="my-10"
      ></v-textarea>
      <label>Jamoa a'zosi haqida Ingliz tilida</label>
      <v-textarea
        outlined
        name="input-7-4"
        label="Jamoa a'zosi haqida Ingliz tilida"
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
