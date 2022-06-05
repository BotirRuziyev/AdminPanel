<template>

     <v-container>
       <v-container>
           <h1 class="dark--text py-3">Loyihalar</h1>
       <v-simple-table>
    <template v-slot:default>
      <thead class="py-16" >
        <tr>
          <th class="text-left font-weight-medium h6">
            <h3>Ism</h3>
          </th>
          <th class="text-left font-weight-medium h6">
            <h3>Telefon</h3>
          </th>
          <th class="text-left">
            <h3>Xabar</h3>
          </th>
          <th class="text-left">
            	<h3>Sana</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.ru"
        >
          <td class="py-6">{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.message }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
       </v-container>
     </v-container>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Botir',
            phone: +998996799977,
            message: "Xabar",
            date: '31.02.2022',
          },
          {
            name: 'Islom Aka',
            phone: +998996799977,
            message: "Xabar",
            date: '31.02.2022',
          },
          
        ],
      }
    },
  }
</script>

<style scoped>
  h1{
  font-family: sans-serif;
  opacity: 0.6;
}
</style>