<template>
    <v-sheet>
    <v-container class="px-10">
      <h1 class="dark--text py-3">Qavat nomini taxrirlash</h1>
      <label>Project nomini tanlang</label>
      <select name="" id="" class="select" v-model="data2.project_ID" >
        <option  :value="item._id" v-for="item of data3" :key="item._id">{{item.name.ru}}</option>
      </select>
      <br>

      <label>Qavat nomi Uzbek tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.uz"
        :counter="25"
        label="Qavat nomini taxrirlash Uzbek tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi Rus tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.ru"
        :counter="25"
        label="Qavat nomini taxrirlash Rus tilida"
        required
        class="mt-6"
      ></v-text-field>
      <label>Qavat nomi English tilida</label>
      <v-text-field
        outlined
        v-model="data2.name.en"
        :counter="25"
        label="Qavat nomini taxrirlash ingliz tilida"
        required
        class="mt-6"
      ></v-text-field>
      <v-btn depressed color="primary" @click="floorNameEdit"> Yuklash </v-btn>
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
           project_ID: null,
         },
         data2:{
           name: {
             uz:null,
             ru:null,
             en:null,
           },
           project_ID: null,
         },
         data3: null,
    }
  },
  computed:{
    flooreditId(){
        return this.$route.params.id
     },
  },
  methods:{
    floorNameEdit(){
      this.data.nameuz = this.data2.name.uz
      this.data.nameru = this.data2.name.ru
      this.data.nameen = this.data2.name.en
      this.data.project_ID = this.data2.project_ID



      this.axios.put(`http://localhost:2004/floorName/putinfo/${this.flooreditId}`, this.data)
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
      this.axios.get("http://localhost:2004/floorName/all")
        .then(res => {
          let result = res.data;
          const d = result.find(item => item._id == this.flooreditId)
          this.data2 = d
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })



        this.axios
      .get("http://localhost:2004/project/all")
      .then((res) => {
        console.log(res);
        this.data3 = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style>
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
select{
  margin: 20px 0;
}
option{
  padding: 10px;
  height: 30px;
}
</style>