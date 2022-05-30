<template>
    <v-sheet color="#fafbfe" height="100%">
    <v-container class="px-10">
        <ProjectSee />
   </v-container>
</v-sheet>
</template>

<script>
import ProjectSee from "@/components/ProjectSee.vue"
export default {
    components:{
        ProjectSee,
    }
}
</script>

<style scoped>
 h1{
  font-family: sans-serif;
  opacity: 0.6;
}
</style>