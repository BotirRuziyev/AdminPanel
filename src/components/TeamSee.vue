<template>
  <v-container>
    <h1 class="dark--text py-3">Jamoa a'zolari</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead class="py-16">
          <tr>
            <th class="text-left font-weight-medium h6">
              <h3>Rasm</h3>
            </th>
            <th class="text-left">
              <h3>Ism</h3>
            </th>
            <th class="text-left">
              <h3>Kasbi</h3>
            </th>
            <th class="text-left">
              <h3>Haqida</h3>
            </th>
            <th class="text-left">
              <h3>Tahrirlash</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.ru">
            <td class="py-6"><v-img :src="item.src" max-width="50"></v-img></td>
            <td>{{ item.eng }}</td>
            <td>{{ item.ru }}</td>
            <td>{{ item.about }}</td>
            <td>
              <v-btn outlined fab small color="error">
                <v-icon> mdi-delete-outline </v-icon>
              </v-btn>
              <v-btn outlined fab small color="warning" class="mx-5">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          src: "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9",
          eng: "Islom Aka",
          ru: "Dasturchi",
          about: "Kuchli dasturchi",
          icondelete: "mdi-delete-circle-outline",
          iconedit: "mdi-pencil-outline",
        },
        {
          src: "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9",
          eng: "Botir",
          ru: "Dasturchi",
          about: "Kuchli dasturchi",
          icondelete: "mdi-delete-circle-outline",
          iconedit: "mdi-pencil-outline",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  opacity: 0.6;
}
</style>
