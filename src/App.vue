<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#313a46"
    >
      <v-card
    class="mx-auto elevation-0 mt-12"
    max-width="500"
    color="#313a46"
  >

    <v-list>
      <v-list-group color="white"
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          class="white--text"
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

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({ 
    drawer: null,
     items: [
        {
          action: 'mdi-text-box-check',
          title: 'Biz haqimizda',
          items: [
            { title: 'Biz haqimizda qo\'shish', to: "/"},
            { title: 'Biz haqimizda ko\'rish', to: "/"},
            
            ],
        },
        {
          action: 'mdi-silverware-fork-knife',
          title: 'Loyihalar',
          items: [
            { title: 'Loyiha qo\'shish' },
            { title: 'Loyihalar' },
          ],  
        },
        {
          action: 'mdi-school',
          title: 'Xizmatar',
          items: [
            { title: 'xizmatlar qo\'shish' },
            {title: 'xizmatlar'}
            ],
        },
        {
          action: 'mdi-account-group',
          title: 'Jamoa',
          items: [
            { title: 'Jamoa qo\'shish' },
            { title: 'Jamoa a\'zolari' }
          ],
        },
        {
          action: 'mdi-bottle-tonic-plus',
          title: 'Eng yaxshi loyihalar',
          items: [
            { title: 'Eng yaxshi loyihalar qo\'shish' },
            { title: 'Eng yaxshi loyihalar' }
          ],
        },
        {
          action: 'mdi-message-processing',
          title: 'xabarlar',
          items: [{ title: 'Xabarni ko\'rish' }],
        },
      ],
    }),
    computed:{

    }
};
</script>
