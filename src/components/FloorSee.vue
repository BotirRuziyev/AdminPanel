<template>
  <v-container>
    <h1 class="dark--text py-3">Qavatlar Haqida</h1>
    <v-row class="py-10" justify="center">
      <v-col cols="12" sm="12" md="12">
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
              <v-card-text class="d-flex flex-column fdsfs pl-16">
                <p class="text-h5 white--text">Проект №1</p>
                <div>
                  <span class="text-h6 white--text">Площадь :</span
                  ><span class="pl-3 white--text"
                    >{{ data2.space }} M<sup>2</sup></span
                  >
                </div>
                <div class="py-4">
                  <span class="text-h6 white--text">Комнаты :</span
                  ><span class="pl-3 white--text">{{ data2.rooms }}</span>
                </div>
                <div>
                  <span class="text-h6 white--text">Этажы :</span
                  ><span class="pl-3 white--text">{{ data2.floor }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="3"
            class="text-center mt-10 px-6"
            v-for="(item, i) in data1"
            :key="i"
          >
           
            <v-row class="etaj" align="center">
              <v-col cols="6" class="text-center text-h5">
                 {{ i + 1 }} этаж
              </v-col>
              <v-col cols="6">
                <v-btn
                  outlined
                  fab
                  small
                  color="error"
                  @click="deleteId(item._id)"
                >
                  <v-icon> mdi-delete-outline </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="6" class="name">
                <p>{{ item.name.uz }}</p>
              </v-col>
              <v-col cols="6" class="button">
                <!-- <v-btn
                  outlined
                  fab
                  small
                  color="error"
                  @click="deleteId(item._id)"
                >
                  <v-icon> mdi-delete-outline </v-icon>
                </v-btn> -->

                <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  fab
                  small
                  color="warning"
                  :to="`/floornameedit/${item._id}`"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FloorNameEdit from "@/components/FloorNameEdit";
export default {
  components: {
    FloorNameEdit,
  },
  data() {
    return {
      data2: null,
      data1: null,
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
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
async mounted() {
    this.axios
      .get("http://localhost:2004/floorName/all")
      .then((res) => {
        this.data1 = res.data;

      })
      .catch((err) => {
        console.log(err);
      });

    this.axios
      .get("http://localhost:2004/project/all")
      .then((res) => {
        console.log(res);
        let result = res.data;
        const d = result.find((item) => item._id == this.projectId);
        this.data2 = d;
        this.data3 = result;
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
.cards {
  background-color: #203647;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.button {
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
.etaj {
  background-color: #203647;
  color: white;
  border-radius: 10px;
}
.name {
  overflow: hidden;
}
.name p {
  margin-top: 12px;
}
.label{
   line-height: 10px;
}
</style>