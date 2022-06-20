<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-5">Projectni qo'shish</h1>

      <label>Projectni Nomi Uzbek tilida</label>
      <v-text-field
        outlined
        v-model="nameuz"
        :counter="20"
        label="Loyiha nomini yozing uzbek tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni Nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="nameru"
        :counter="20"
        label="Loyiha nomini yozing rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni Nomi Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="nameen"
        :counter="20"
        label="Projectni nomini yozing ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Maydonni o'lchamini kiriting</label>
      <v-text-field
        outlined
        v-model="space"
        :counter="20"
        type="number"
        label="Maydonni o'lchamini kiriting"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni narxini kiriting</label>
      <v-text-field
        outlined
        v-model="price"
        :counter="20"
        label="Narxini kiriting"
        required
        type="number"
        class="mt-6"
      ></v-text-field>

      <label form="#">Xonalar sonini kiriting</label>
      <v-text-field
        v-model="rooms"
        label="Xonalar sonini kiriting"
        outlined
        class="mt-6"
        type="number"
      ></v-text-field>
      <label form="#">Qavatlar sonini kiriting</label>
      <v-text-field
        v-model="floor"
        label="Qavatlar sonini kiriting"
        outlined
        class="mt-6"
      ></v-text-field>

      <label>Project Rasmini yuklang</label>
      <input type="file" @change="selectFile" multiple placeholder="Loyihaning rasmi" style="width: 100%; border: 1px solid;" label="Loyihaning rasmi" />
      <input
        type="file"
        @change="selectFile"
        multiple
        placeholder="Loyihaning rasmi"
        style="width: 100%; border: 1px solid rgb(30, 29, 29, 0.4)"
        label="Loyihaning rasmi"
        outlined
        dense
        class="mt-6 mb-16 pa-3"
      />
      <v-btn depressed color="primary mb-10" @click="aboutAdd"> Yuklash </v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "About",
  data(){
    return{
         nameuz: null,
         nameru: null,
         nameen: null,
         space: null,
         price: null,
         rooms: null,
         floor: null,
         file: null,
    }
  },

  methods: {
    selectFile(event) {
      this.file = event.target.files;
      console.log(this.file);
    },

    aboutAdd() {
      const fd = new FormData();
      for (let item of Object.keys(this.file)) {
        fd.append("file", this.file[item]);
      }
       fd.append("nameuz", this.nameuz);
       fd.append("nameen", this.nameen);
       fd.append("nameru", this.nameru);
       fd.append("space", this.space);
       fd.append("price", this.price);
       fd.append("rooms", this.rooms);
       fd.append("floor", this.floor);

      this.axios
        .post("http://localhost:2004/project/add", fd)
        .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload()
      })
      .catch((err) =>{
        console.log("err");
      })
    }
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
input{
  border-radius: 7px;
}
</style>
