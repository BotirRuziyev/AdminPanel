<template>
  <div>
    <h1 class="py-10">Project Haqida</h1>

    <v-row class="py-10">
      <v-col cols="12" sm="12" md="6" v-for="item of data" :key="item.id">
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
                  <h2 class="text-center mt-3 white--text">Malumotlar:</h2>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Ru:</h3>
                    <h3 class="ml-3">{{ item.name.en }}</h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Eng:</h3>
                    <h3 class="ml-3">{{ item.name.ru }}</h3>
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
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">floor:</h3>
                    <h3 class="ml-3">{{ item.floor }}</h3>
                  </div>
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
                  <v-col cols="2" class="d-flex align-items-center">
                    <v-btn
                      class="mx-2"
                      outlined
                      fab
                      small
                      color="#f5f5f5"
                      :to="`/projectedit/${item._id}`"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="8">
                    <v-btn
                      color="#f5f5f5"
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
  data() {
    return {
      data: null,
    };
  },
  methods: {
    deleteId(id) {
      this.axios
        .delete(`http://localhost:2004/project/delete/${id}`)
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
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
.carousel {
  height: 400px !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.card {
  border-radius: 0 !important;
  box-shadow: none !important;
  background-color: #424242;
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
</style>
