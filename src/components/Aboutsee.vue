<template>
<v-container>
  <h1 class="py-3">Biz haqimizda</h1>
     <v-simple-table>
    <template v-slot:default>
      <thead class="py-16 template_bg" >
        <tr>
          <th class="text-left font-weight-medium h6">
            <h3>Ma'lumot ru</h3>
          </th>
          <th class="text-left">
            <h3>Ma'lumot en</h3>
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
          <td class="py-8">{{ item.eng }}</td>
          <td>{{ item.ru }}</td>
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
            eng: 'Frozen Yogurt',
            ru: "Замерзший йогурт",
          },
          {
            eng: 'Frozen Yogurt',
            ru: 'Замерзший йогурт',
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
</style>