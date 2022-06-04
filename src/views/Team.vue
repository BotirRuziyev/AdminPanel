<template>
  <v-container>
    <TeamSee :style="{ background: $vuetify.theme.themes[theme].background }" />
  </v-container>
</template>

<script>
import TeamSee from "@/components/TeamSee";
export default {
  components: {
    TeamSee,
  },
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style scoped></style>
