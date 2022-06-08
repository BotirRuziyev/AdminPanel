
<template>
  <v-sheet
  >
    <v-container class="px-10">
      <h1>Kompanya haqida Taxrirlash</h1>
      <form class="mt-16">
        <label style="width: 100%;">Kompanya haqida Taxrirlash Rus tilida</label>
        <v-textarea
         v-model="data.name.ru"
          label="Kompanya haqida taxrirlang Rus tilida"
          outlined
          name="input-7-4"
          class="mt-7"
        ></v-textarea>
        <label style="width: 100%;">Kompanya haqida Taxrirlash Ingliz tilida</label>
        <v-textarea
         v-model="data.name.en"
          label="Kompanya haqida taxrirlang Ingliz tilida"
          outlined
          name="input-7-4"
          class="mt-7"
        ></v-textarea>
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="aboutAdd">TAxrirlashni Yuklash </v-btn>
      </form>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
data(){
    return{
         data: {
           nameen:null,
           nameru:null,
         },  
    }
  },
  computed:{
    aboutId(){
        return this.$route.params.id
     },
  },
  methods:{
    aboutAdd(){

      this.axios.put(`http://localhost:2004/about/putinfo/${this.aboutId}`, this.data)
      .then((res) => {
          console.log(res, "Chiqdi");
          window.location.reload()
      })
      .catch((err) =>{
        console.log(err);
      })
    },
     
     
    
  },
  mounted(){
      this.axios.get("http://localhost:2004/about/all")
        .then(res => {
          let result = res.data;
          console.log(result);
          const d = result.find(item => item._id == this.aboutId)
          this.data = d
        })
        .catch(err => {
          console.log(err);
        })
  }
}
</script>

