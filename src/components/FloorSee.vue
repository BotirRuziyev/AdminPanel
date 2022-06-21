<template>
  <v-container>
    <h1 class="dark--text py-3">Qavatlar Haqida</h1>
    <v-row class="py-10" justify="center">
      <v-col cols="12" sm="12" md="10">
        <v-row width="100%" class="pa-0 g-5 col-card" dense>
          <v-col cols="12" sm="6" class="pa-0">
            <v-carousel class="pa-0 carousel">
              <v-carousel-item
                v-for="(item, i) in data2.file"
                :key="i"
                :src="`http://localhost:2004/uploads/projects/${item}`"
                class="pa-0"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-card class="mx-auto white--text cards card">
          <v-card-text class="d-flex flex-column fdsfs">
            <p class="text-h5 white--text">Проект №1</p>
            <div>
              <span class="text-h6 white--text">Площадь :</span><span class="pl-3 white--text">{{ data2.space }} M<sup>2</sup></span>
            </div>
            <div class="py-4">
              <span class="text-h6 white--text">Комнаты :</span><span class="pl-3 white--text">{{ data2.rooms }}</span>
            </div>
            <div>
              <span class="text-h6 white--text">Этажы :</span><span class="pl-3 white--text">{{ data2.floor }}</span>
            </div>
          </v-card-text>
          <!-- <v-card-actions class=" button">
            <v-btn
                outlined
                fab
                small
                color="error"
                @click="deleteId(item._id)"
              >
                <v-icon> mdi-delete-outline </v-icon>
              </v-btn>
              <v-btn
                outlined
                fab
                small
                color="warning"
                class="mx-5"
                :to="`/floornameedit/${item._id}`"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
          </v-card-actions> -->
        </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="4" sm="3" class="text-center">
               <p class="text-center text-h5 etaj">1 этаж</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
          </v-col>
          <v-col cols="4" sm="3" class="text-center">
               <p class="text-center text-h5 etaj">1 этаж</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
          </v-col>
          <v-col cols="4" sm="3" class="text-center">
               <p class="text-center text-h5 etaj">1 этаж</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
          </v-col>
          <v-col cols="4" sm="3" class="text-center">
               <p class="text-center text-h5 etaj">1 этаж</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
                 <p>қдўкуь шзфцвфц</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data2: null,
      data: null,
    };
  },
  computed:{
      projectId(){
        return this.$route.params.id
      }
  },

  methods: {
    deleteId(id) {
      this.axios
        .delete(`http://localhost:2004/floorInfo/deletetwo/${id}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
        



    this.axios
      .get("http://localhost:2004/floorName/all")
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });


    this.axios
      .get("http://localhost:2004/project/all")
      .then((res) => {
        console.log(res);
        let result = res.data;
          const d = result.find(item => item._id == this.projectId)
          this.data2 = d
      })
      .catch((err) => {
        console.log(err);
      });
      
  },

  
};
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
.cards{
  background-color: #203647;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.button{
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
}

.carousel {
  height: 400px !important;
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
.etaj{
  background-color: #203647;
  color: white;
  border-radius: 10px;
} 
</style>