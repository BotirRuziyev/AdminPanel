<template>
    <v-container>
    <form class="mt-16">
        <label style="width: 100%;">Loyihaning rasmini Taxrirlash</label>
     <input type="file" @change="selectFile" multiple placeholder="Loyihaning rasmi" style="width: 100%; border: 1px solid rgb(30, 29, 29, 0.4);" label="Loyihaning rasmi"
        outlined
        dense
        class="mt-6 mb-16 pa-3">
        <v-btn depressed color="primary" class="mt-16 mb-6" @click="projectimgEdit">Taxrirlashni Yuklash</v-btn>
      </form>
    </v-container>
</template>

<script>
export default {
data(){
    return{
         file: null,
    }
  },
  computed:{
    projectId(){
        return this.$route.params.id
     },
  },
  methods:{
    selectFile(event){
         this.file = event.target.files;
         console.log(this.file);
     },
    projectimgEdit(){
      
      const file = new FormData();

      for(let item of Object.keys(this.file)){
          file.append("file", this.file[item]);
      }
       

       this.axios.put(`http://localhost:2004/project/multiple/${this.projectId}`, file)
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
