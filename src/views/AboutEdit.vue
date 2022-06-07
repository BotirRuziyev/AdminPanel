
<template>
  <v-sheet
  @Putemit="put"
  >
  {{ id }}
    <v-container class="px-10">
      <h1>Kompanya haqida Taxrirlash</h1>
      <form class="mt-16">
        <label style="width: 100%;">Kompanya haqida Taxrirlash Rus tilida</label>
        <v-textarea
         v-model="nameru"
          outlined
          name="input-7-4"
          label="Kompanya haqida taxrirlang Rus tilida"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Taxrirlash Ingliz tilida</label>
        <v-textarea
          v-model="nameen"
          outlined
          name="input-7-4"
          label="Kompanya haqida taxrirlang Ingliz tilida"
          class="mt-7"
        ></v-textarea>
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="aboutAdd">TAxrirlashni Yuklash </v-btn>
      </form>
    </v-container>
  </v-sheet>
</template>
</template>

<script>
export default {
data(){
    return{
         nameru: null,
         nameen: null,
         id: null,
    }
  },
  methods:{
    aboutAdd(){
      const fd = new FormData();
       fd.append("nameen", this.nameen);
       fd.append("nameru", this.nameru);

      this.axios.put("http://localhost:2004/putinfo/:id", fd)
      .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload()
      })
      .catch((err) =>{
        console.log(err);
      })
    },
    put(Id){
        this.id = Id
        console.log(id);
    }
    
  },
}
</script>

