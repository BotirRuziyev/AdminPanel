<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-3">Qavat nomini qo'shish</h1>
      <v-select
        label="Outlined style"
        outlined
        v-model="data.project_ID"
      >
      <option  :value="item._id" v-for="item of data2" :key="item._id">{{item.name.ru}}</option>
      </v-select>
      <select name="" id="2" class="select" v-model="data.project_ID" >
        <option value="" active>Id</option>
        <option  :value="item._id" v-for="item of data2" :key="item._id">{{item.name.ru}}</option>
      </select>
      <br>

      <label>Qavat nomi Uzbek tilida</label>
      <v-text-field
        outlined
        v-model="data.nameuz"
        :counter="25"
        label="Qavat nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="data.nameru"
        :counter="25"
        label="Qavat nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi English tilida</label>
      <v-text-field
        outlined
        v-model="data.nameen"
        :counter="25"
        label="Qavat nomini yozing ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <v-btn depressed color="primary" @click="floorNameAdd"> Yuklash </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      data:{
      nameuz: null,
      nameru: null,
      nameen: null,
      project_ID: null,
      },
      data2: null,
      items: [1, 2, 3, 4],
    };
  },
  methods: {
    floorNameAdd() {

      this.axios
        .post("http://localhost:2004/floorName/add", this.data)
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
        this.data2 = res.data;
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
.select{
  width: 100%;
  padding: 13px;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
option{
  padding: 10px;
  height: 30px;
}
</style>
