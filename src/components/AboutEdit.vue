
<template>
  <v-sheet
  >
    <v-container class="px-10">
      <h1>Kompanya haqida Taxrirlash</h1>
      <form class="mt-16">
        <label style="width: 100%;">Kompanya haqida Taxrirlash Uz tilida</label>
        <v-textarea
         v-model="data2.name.uz"
          label="Kompanya haqida taxrirlang Uz tilida"
          outlined
          name="input-7-4"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Taxrirlash Rus tilida</label>
        <v-textarea
         v-model="data2.name.ru"
          label="Kompanya haqida taxrirlang Rus tilida"
          outlined
          name="input-7-4"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Taxrirlash Ingliz tilida</label>
        <v-textarea
         v-model="data2.name.en"
          label="Kompanya haqida taxrirlang Ingliz tilida"
          outlined
          name="input-7-4"
          class="mt-7"
        ></v-textarea>
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="aboutAdd">Taxrirlashni Yuklash </v-btn>
      </form>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
data(){
    return{
         data: {
           nameuz:null,
           nameen:null,
           nameru:null,
         },
         data2:{
           name: {
             uz:null,
             ru:null,
             en:null,
           }
         },
         image: null,
    }
  },
  computed:{
    aboutId(){
        return this.$route.params.id
     },
  },
  methods:{
    selectFile(event){
         this.image = event.target.files;
         console.log(this.image);
     },
    aboutAdd(){
      this.data.nameru = this.data2.name.ru
      this.data.nameen = this.data2.name.en
      this.data.nameuz = this.data2.name.uz
      
      this.axios.put(`http://localhost:2004/about/putinfo/${this.aboutId}`, this.data)
      .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload()
      })
      .catch((err) =>{
        console.log(err);
      })

      const fd = new FormData();

      for(let item of Object.keys(this.image)){
          fd.append("image", this.image[item]);

      }
       
       this.axios.put(`http://localhost:2004/about/putimage/${this.aboutId}`, fd)
       .then(res => {
         console.log("img ketdi");
         window.location.reload()
       })
       .catch(err => {
         console.log("ketmadi");
       })
    },

     
    
  },
  mounted(){
      this.axios.get("http://localhost:2004/about/all")
        .then(res => {
          let result = res.data;
          const d = result.find(item => item._id == this.aboutId)
          this.data2 = d
        })
        .catch(err => {
          console.log(err);
        })
  }
}
</script>

