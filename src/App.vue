<template>
  <v-app id="inspire" class="app">
    <v-navigation-drawer v-model="drawer" app color="#363636">
      <v-card class="mx-auto elevation-0 mt-12" max-width="500" color="#363636">
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.title"
                  class="white--text"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              class="white--text"
              :to="child.to"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h3>
        <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >mdi-brightness-4</v-icon
        >
        <span class="px-3" v-if="!$vuetify.theme.dark">tungi rejim</span>
        <span class="px-3" v-else>kunduzgi rejim</span>
      </h3>

      <v-container style="height: 300px width: 300px" class="border-container">
        <v-row justify="center">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar size="48">
                  <v-img src="./assets/avatar-1.jpg"></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar>
                    <v-img src="./assets/avatar-1.jpg"></v-img>
                  </v-avatar>
                  <h3 class="py-3">{{ user.fullName }}</h3>
                  <h4 class="mt-1">
                    {{ user.role }}
                  </h4>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    <v-icon class="px-2">mdi-logout</v-icon>
                    Chiqish
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-divider></v-divider>
    <v-footer padless class="border-top">
      <v-row justify="center" no-gutters>
        <v-col class="py-4 text-center dark--text" cols="12">
          2022 © Tasnim - tasnim.uz
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    drawer2: null,
    darkmode: true,
    user: {
      fullName: "Islombek Tadjiyev",
      role: "admin",
    },
    items: [
      {
        action: "mdi-text-box-check white--text",
        title: "Biz haqimizda",
        items: [
          { title: "Biz haqimizda qo'shish", to: "/addabout" },
          { title: "Biz haqimizda ko'rish", to: "/aboutsee" },
        ],
      },
      {
        action: "mdi-school white--text",
        title: "Project",
        items: [
          { title: "Project qo'shish", to: "/addproject" },
          { title: "Projectlar", to: "/project" },
        ],
      },
      {
        action: "mdi-school white--text",
        title: "Qavatlar haqida",
        items: [
          { title: "Qavat qo'shish", to: "/addfloorname" },
          { title: "Qavatlar haqida ko'rish", to: "/floornamesee" },
        ],
      },
      {
        action: "mdi-account-group white--text",
        title: "Jamoa",
        items: [
          { title: "Jamoa qo'shish", to: "/addteam" },
          { title: "Jamoa a'zolari", to: "/team" },
        ],
      },
      {
        action: "mdi-video-3d white--text",
        title: "Eng yaxshi 3D modellar",
        items: [
          { title: "Eng yaxshi loyihalar qo'shish", to: "/addbestproject" },
          { title: "Eng yaxshi loyihalar", to: "/bestprojectsee" },
        ],
      },
      {
        action: "mdi-message-processing white--text",
        title: "xabarlar",
        items: [{ title: "Xabarni ko'rish", to: "/seemessage" }],
      },
    ],
  }),
  methods: {
    darkMode() {
      $vuetify.theme.dark = !$vuetify.theme.dark;
      this.darkmode = !this.darkmode;
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
.border-container {
  width: 60px !important;
}
</style>
