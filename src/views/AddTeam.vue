<template>
  <v-sheet color="#fafbfe">
    <v-container class="px-10">
      <h1 class="text-center dark--text">Jamoa qo'shish</h1>

      <!-- Jamoa a'zosining ismi -->

      <p>Jamoa a'zosining ismi rus tilida</p>
      <v-text-field
        outlined
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Jamoa a'zosining ismi rus tilida"
        required
      ></v-text-field>
      <p>Jamoa a'zosining ismi ingliz tilida</p>
      <v-text-field
        outlined
        v-model="name"
        :counter="15"
        :rules="nameRules"
        placeholder="Jamoa a'zosining ismi ingliz tilida"
        required
      ></v-text-field>

      <hr class="danger--text hr" />

      <!-- Jamoa a'zosining kasbi -->
      <p>Jamoa a'zosining kasbi rus tilida</p>
      <v-text-field
        outlined
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Jamoa a'zosining kasbi rus tilida"
        required
      ></v-text-field>
      <p>Jamoa a'zosining kasbi ingliz tilida</p>
      <v-text-field
        outlined
        v-model="name"
        :counter="15"
        :rules="nameRules"
        placeholder="Jamoa a'zosining kasbi ingliz tilida"
        required
      ></v-text-field>
      <hr class="danger--text hr" />
      <p>Jamoa a'zosining rasmi</p>
      <v-file-input
        label="jamoa a'zosining rasmi"
        aria-placeholder="jamoa a'zosining rasmi"
        outlined
        dense
      ></v-file-input>
      <hr class="danger--text hr" />
      <p>Jamoa a'zosining E-maili</p>
      <v-text-field
        outlined
        v-model="email"
        :rules="emailRules"
        placeholder="jamoa a'zosining E-maili"
        required
      ></v-text-field>
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
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 15) || "Name must be less than 10 characters",
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
  height: 5px !important;
  width: 100% !important;
  color: red !important;
  background-color: rgb(248, 99, 99) !important;
  border-radius: 5px !important;
}
</style>
