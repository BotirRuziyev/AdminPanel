<template>
  <v-sheet>
    <v-container class="px-10">
      <h1>Kompanya haqida</h1>
      <form class="mt-16">
        <label style="width: 100%;">Kompanya haqida Uzbek tilida</label>
        <v-textarea
         v-model="nameuz"
          outlined
          name="input-7-4"
          label="Kompanya haqida yozing Rus tilida"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Rus tilida</label>
        <v-textarea
         v-model="nameru"
          outlined
          name="input-7-4"
          label="Kompanya haqida yozing Rus tilida"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Ingliz tilida</label>
        <v-textarea
          v-model="nameen"
          outlined
          name="input-7-4"
          label="Kompanya haqida yozing Ingliz tilida"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Loyihaning rasmini yuklang</label>
      <input type="file" @change="selectFile" placeholder="Loyihaning rasmi" style="width: 100%; border: 1px solid;" label="Loyihaning rasmi"
        outlined
        dense
        class="mt-6 mb-16 pa-3">
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="aboutAdd"> Yuklash </v-btn>
      </form>
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
         image: null,
    }
  },
  methods:{
     selectFile(event){
         this.image = event.target.files[0];
         console.log(this.image);
     },

    aboutAdd(){
      const fd = new FormData();
       fd.append("image", this.image, this.image.name);
       fd.append("nameuz", this.nameuz);
       fd.append("nameen", this.nameen);
       fd.append("nameru", this.nameru);

      this.axios.post("http://localhost:2004/about/add", fd)
      .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload()
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  },

}
</script>


<style scoped>
label {
  opacity: 0.8;
  width: 100px;
}
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
input{
  border-radius: 7px;
}
</style>
