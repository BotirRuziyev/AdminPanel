<template>
  <div>
    <h1 class="py-10">Biz haqimizda</h1>
    <div class="d-none">{{ data }}</div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search About"
      single-line
      color="dark"
      @change="searchAbout"
    ></v-text-field>

    <v-row class="py-10">
      <v-col cols="12" md="6" v-for="item of searchAbout" :key="item.id">
        <v-row width="100%" class="pa-0 g-5 col-card" dense>
          <v-col cols="6" class="pa-0">
            <v-carousel class="pa-0 carousel">
              <v-carousel-item
                v-for="(item, i) in data"
                :key="i"
                :src="`http://localhost:2004/uploads/about/${item.image}`"
                class="pa-0"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="6" class="pa-0">
            <v-card class="mx-auto pa-0 card" height="100%">
              <v-card-text class="d-flex flex-column fdsfs">
                <div>
                  <h2 class="text-center mt-3 white--text">Malumotlar:</h2>
                  <div class="white--text d-flex mt-10">
                    <h3 style="font-size: 20px">Ru:</h3>
                    <h3 class="ml-3">
                      {{ item.name.ru }}
                    </h3>
                  </div>
                  <div class="white--text d-flex mt-5">
                    <h3 style="font-size: 20px">Eng:</h3>
                    <h3 class="ml-3">
                      {{ item.name.en }}
                    </h3>
                  </div>
                </div>
                <v-row class="v-row">
                  <v-col cols="2"
                    ><v-btn
                      dark
                      fab
                      small
                      color="error"
                      @click="deleteId(item._id)"
                    >
                      <v-icon> mdi-delete-outline </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      dark
                      fab
                      small
                      color="primary"
                      class="mx-2"
                      :to="`/aboutedit/${item._id}`"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="8">
                    <v-btn
                      color="primary"
                      dark
                      class="mx-2"
                      :to="`/aboutedit/${item._id}`"
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
      search: "",
    };
  },
  methods: {
    deleteId(id) {
      this.axios
        .delete(`http://localhost:2004/about/delete/${id}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    searchAbout: function () {
      return this.data.filter((item) => {
        if (!item.name.en) {
          return item.name.en.match(this.search);
        } else {
          return item.name.ru.match(this.search);
        }
      });
    },
  },
  mounted() {
    this.axios
      .get("http://localhost:2004/about/all")
      .then((res) => {
        console.log(res);
        this.data = res.data;
        console.log(res.data);
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
  height: 350px !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.card {
  border-radius: 0 !important;
  box-shadow: none !important;
  background-color: #82b1ff;
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
</style>
