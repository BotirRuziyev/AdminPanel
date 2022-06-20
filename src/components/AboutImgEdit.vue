<template>
    <v-container>
    <form class="mt-16">
        <label style="width: 100%;">Rasmni Taxrirlash</label>
     <input type="file" @change="selectFile" multiple placeholder="Loyihaning rasmi" style="width: 100%; border: 1px solid;" label="Loyihaning rasmi"
        outlined
        dense
        class="mt-6 mb-16 pa-3">
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="aboutimgEdit">Taxrirlashni Yuklash</v-btn>
      </form>
    </v-container>
</template>

<script>
export default {
data(){
    return{
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
         this.image = event.target.files[0];
         console.log(this.image);
     },
    aboutimgEdit(){
      
      const image = new FormData();
      image.append("image", this.image, this.image.name);

      // for(let item of Object.keys(this.image)){
      //     image.append("image", this.image[item]);
      // }
       

       this.axios.put(`http://localhost:2004/about/putimage/${this.aboutId}`, image)
       .then(res => {
         console.log("img ketdi");
         window.location.reload()
       })
       .catch(err => {
         console.log("ketmadi");
       })
    },

     
    
  },
}
</script>
