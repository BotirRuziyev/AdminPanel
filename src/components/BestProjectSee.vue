<template>
     <v-container>
       <h1 class="dark--text py-3">Eng yaxshi loyihalar</h1>
       <v-simple-table>
    <template v-slot:default>
      <thead class="py-16 template_bg" >
        <tr>
          <th class="text-left font-weight-medium h6">
            <h3>Rasm</h3>
          </th>
          <th class="text-left font-weight-medium h6">
            <h3>Turi</h3>
          </th>
          <th class="text-left">
            <h3>Topshirilgan sana</h3>
          </th>
          <th class="text-left">
            <h3>Sarlavha</h3>
          </th>
          <th class="text-left">
            	<h3>Tahrirlash</h3>
          </th>
        </tr>
      </thead>
      <tbody class="template_bg">
        <tr
          v-for="item in desserts"
          :key="item.ru"
        >
          <td class="py-6"><v-img :src="item.src" max-width="50"></v-img></td>
          <td>{{ item.type }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td><v-btn
                            outlined
                            fab
                            small
                            color="indigo"

                          >
                             <v-icon>
                           mdi-delete-outline
                        </v-icon>
                          </v-btn>
                       <v-btn
                          outlined
                          fab
                          small
                          color="indigo"
                          class="mx-5"
                        >
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
    data () {
      return {
        desserts: [
          {
            src: "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9",
            type: 'Frozen Yogurt',
            date: "Замерзший йогурт",
            title: "isdbdsb",
          },
          {
            src: "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9",
            type: 'Frozen Yogurt',
            date: "Замерзший йогурт",
            title: "isdbdsb",
          },
          
        ],
      }
    },
  }
</script>

<style scoped>
.template_bg{
    background-color: #fafbfe !important;
}
  h1{
  font-family: sans-serif;
  opacity: 0.6;
}
</style>