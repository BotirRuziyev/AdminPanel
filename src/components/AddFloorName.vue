<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-3">Qavat nomini qo'shish</h1>
      {{ data }}
      <v-select
        :items="item2"
        label="Outlined style"
        outlined
        v-model="project_ID"
      ></v-select>

      <label>Qavat nomi Uzbek tilida</label>
      <v-text-field
        outlined
        v-model="nameuz"
        :counter="25"
        label="xizmat nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="nameru"
        :counter="25"
        label="xizmat nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi English tilida</label>
      <v-text-field
        outlined
        v-model="nameen"
        :counter="25"
        label="xizmat nomini yozing ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <!-- <label>Qavat nomi English tilida</label>
      <v-text-field
        outlined
        v-model="project_ID"
        :counter="25"
        label="xizmat nomini yozing ingliz tilida"
        required
        class="mt-6"
        type="number"
      ></v-text-field> -->
      <v-btn depressed color="primary" @click="floorNameAdd"> Yuklash </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      nameuz: null,
      nameru: null,
      nameen: null,
      project_ID: null,
      items: [],
      data: null,
      // items: [1, 2, 3, 4],
    };
  },
  methods: {
    floorNameAdd() {
      const fd = new FormData();
      fd.append("nameuz", this.nameuz);
      fd.append("nameen", this.nameen);
      fd.append("nameru", this.nameru);
      fd.append("project_ID", this.project_ID);

      this.axios
        .post("http://localhost:2004/floorName/add", fd)
        .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.axios
      .get("http://localhost:2004/project/all")
      .then((res) => {
        console.log(res);
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
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
