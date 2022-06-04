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
            class="white-icon"
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
        <span class="px-3">Rejimni tanlan</span>
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
      <v-sheet class="overflow-hidden" style="position: relative">
        <v-navigation-drawer
          v-model="drawer2"
          fixed
          right
          bottom
          temporary
          height="100%"
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Sozlash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-container>
            <v-list class="px-5">
              <v-list>
                <v-list-item-title
                  >Boshqaruv panelini qorong'i va yorug' holatga
                  o'tkazish.</v-list-item-title
                >
              </v-list>
              <v-list>
                <v-icon @click="darkMode">mdi-brightness-4</v-icon>
                <span class="px-5" v-if="darkmode">Tungi rejim</span>
                <span class="px-5" v-else>Kunduzgi rejim</span>
              </v-list>
            </v-list>
          </v-container>
        </v-navigation-drawer>
      </v-sheet>
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
import Night from "@/components/Night";
export default {
  components: {
    Night,
  },
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
        action: "mdi-silverware-fork-knife white--text",
        title: "Loyihalar",
        items: [
          { title: "Loyiha qo'shish", to: "/addproject" },
          { title: "Loyihalar", to: "/project" },
        ],
      },
      {
        action: "mdi-school white--text",
        title: "Xizmatar",
        items: [
          { title: "xizmatlar qo'shish", to: "/addservice" },
          { title: "xizmatlar", to: "/service" },
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
        action: "mdi-bottle-tonic-plus white--text",
        title: "Eng yaxshi loyihalar",
        items: [
          { title: "Eng yaxshi loyihalar qo'shish", to: "/addbestproject" },
          { title: "Eng yaxshi loyihalar", to: "/bestproject" },
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
