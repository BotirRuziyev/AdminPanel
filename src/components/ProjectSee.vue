<template>
     <v-simple-table>
    <template v-slot:default>
      <thead class="py-16 template_bg" >
        <tr>
          <th class="text-left font-weight-medium h6" colspan="3">
            <h3>Ma'lumot ru</h3>
          </th>
          <th class="text-left" colspan="3">
            <h3>Ma'lumot en</h3>
          </th>
          <th class="text-left" colspan="1">
            	<h3>Tahrirlash</h3>
          </th>
        </tr>
      </thead>
      <tbody class="template_bg">
        <tr
          v-for="item in desserts"
          :key="item.ru"
          class="py-10"
        >
          <td class="" colspan="3">{{ item.eng }}</td>
          <td  colspan="3">{{ item.ru }}</td>
          <td colspan="1"><v-icon>{{ item.icondelete }}</v-icon><v-icon class="ml-10">{{ item.iconedit }}</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            eng: 'Frozen Yogurt',
            ru: "Замерзший йогурт",
            icondelete: "mdi-delete-circle-outline",
            iconedit: 'mdi-pencil-outline'
          },
          {
            eng: 'Frozen Yogurt',
            ru: 'Замерзший йогурт',
            icondelete: "mdi-delete-circle-outline",
            iconedit: 'mdi-pencil-outline'
          },
          {
            eng: 'Frozen Yogurt',
            ru: 'Замерзший йогурт',
            icondelete: "mdi-delete-circle-outline",
            iconedit: 'mdi-pencil-outline'
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