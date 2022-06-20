<template>
  <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-5">Projectni Taxrirlash</h1>

      <label>Projectni taxrirlash Uzbek tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.uz"
        :counter="25"
        label="Projectni taxrirlash  rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni taxrirlash Rus tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.ru"
        :counter="25"
        label="Projectni taxrirlash  rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni taxrirlash Ingliz tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.en"
        :counter="25"
        label="Projectni taxrirlash ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Maydonni o'lchamini kiriting</label>
      <v-text-field
        outlined
        v-model="data2.space"
        :counter="25"
        label="Maydonni o'lchamini kiriting"
        required
        class="mt-6"
      ></v-text-field>
      <label>Projectni narxini taxrirlash</label>
      <v-text-field
        outlined
        v-model="data2.price"
        :counter="25"
        label="Projectni narxini taxrirlash "
        required
        class="mt-6"
      ></v-text-field>
      <label>Xonalar sonini taxrirlash</label>
      <v-text-field
        outlined
        v-model="data2.rooms"
        :counter="25"
        label="Xonalar sonini taxrirlash"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavatlar sonini taxrirlash</label>
      <v-text-field
        outlined
        v-model="data2.floor"
        :counter="25"
        label="Qavatlar sonini taxrirlash"
        required
        class="mt-6"
      ></v-text-field>
      <v-btn depressed color="primary mb-10" @click="projectAdd">Taxrirlashni Yuklash</v-btn>
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
           space: null,
           price: null,
           rooms: null,
           floor: null,
         },
         data2:{
           name: {
             uz:null,
             ru:null,
             en:null,
           },
           space: null,
           price: null,
           rooms: null,
           floor: null,
         },
    }
  },
  computed:{
    projectId(){
        return this.$route.params.id
     },
  },
  methods:{
    projectAdd(){
      this.data.nameuz = this.data2.name.uz
      this.data.nameru = this.data2.name.ru
      this.data.nameen = this.data2.name.en
      this.data.space = this.data2.space
      this.data.price = this.data2.price
      this.data.rooms = this.data2.rooms
      this.data.floor = this.data2.floor



      this.axios.put(`http://localhost:2004/project/putinfo/${this.projectId}`, this.data)
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
      this.axios.get("http://localhost:2004/project/all")
        .then(res => {
          let result = res.data;
          const d = result.find(item => item._id == this.projectId)
          this.data2 = d
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
  }
}
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
