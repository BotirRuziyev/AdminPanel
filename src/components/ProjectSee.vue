<template>
  <div>
    <h1 class="py-10">Project Haqida</h1>

    <v-row class="py-10">
      <v-col cols="12"  lg="6" v-for="item of data" :key="item.id">
        <v-row width="100%" class="pa-0 g-5 col-card" dense>
          <v-col cols="12" sm="6" class="pa-0">
            <v-carousel class="pa-0 carousel">
              <v-carousel-item
                v-for="(item, i) in item.file"
                :key="i"
                :src="`http://localhost:2004/uploads/projects/${item}`"
                class="pa-0"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-card class="mx-auto pa-0 card" height="100%">
              <v-card-text class="d-flex flex-column fdsfs">
                <div>
                  <router-link :to="`/floornamesee/${item._id}`" class="eye"><v-icon class="icon">mdi-eye-arrow-right-outline</v-icon></router-link>
                  <h2 class="
                   mt-3 white--text">Malumotlar:</h2>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Uz:</h3>
                    <h3 class="ml-3">{{ item.name.uz }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Ru:</h3>
                    <h3 class="ml-3">{{ item.name.ru }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Eng:</h3>
                    <h3 class="ml-3">{{ item.name.en }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">space:</h3>
                    <h3 class="ml-3">{{ item.space }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">price:</h3>
                    <h3 class="ml-3">{{ item.price }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">rooms:</h3>
                    <h3 class="ml-3">{{ item.rooms }}</h3>
                  </div>
                  <h3 class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px" >floor:</h3>
                    <h3 class="ml-3">{{ item.floor }}</h3>
                  </h3>
                </div>
                <v-row class="v-row">
                  <v-col cols="2"
                    ><v-btn
                      dark
                      fab
                      outlined
                      small
                      color="error"
                      @click="deleteId(item._id)"
                    >
                      <v-icon> mdi-delete-outline </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      class="mx-2 pencil"
                      outlined
                      fab
                      small
                      color="#f5f5f5"
                      :to="`/projectedit/${item._id}`"
                    >
                      <v-icon class="mt-2">mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="8">
                    <v-btn
                      class="mx-2"
                      :to="`/projectimgedit/${item._id}`"
                    >
                      img tahrirlash
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
            data: null,
      }
    },
    methods:{
       deleteId(id){
         this.axios.delete(`http://localhost:2004/floorInfo/delete/${id}`)
         .then(res => {
          window.location.reload()
         })
       }
    },
  mounted() {
    this.axios
      .get("http://localhost:2004/project/all")
      .then((res) => {
        console.log(res);
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
  padding: 0 0 10px 0;
}
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
.carousel {
  height: 450px !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.card {
  border-radius: 0 !important;
  box-shadow: none !important;
  background-color: #203647;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.fdsfs {
  height: 100%;
}
.v-row {
  display: flex;
  align-items: flex-end;
}

@media (max-width: 600px) {
  .card {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    border-top-right-radius: 0 !important;
    height: 400px !important;
  }
  .carousel {
    height: 400px !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.eye{
  position: absolute;
  top: 25px;
  right: 20px;
}
.eye .icon{
  color: white;
  font-size: 30px;
}
.eye .icon:hover{
  color: #007CC7;
}
</style>