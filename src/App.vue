<template>
  <v-app class="app">
     <div fluid class=" grey lighten-4">
        <Hero />
        <v-container >
          <router-view></router-view>
        </v-container>
     </div>
  </v-app>
</template>

<script>
import Hero from '@/components/Hero'
export default {
  components:{
    Hero
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.app{
  font-family: 'Commissioner', 'poppins', 'montserrat';
}
.grey-text{
  color:hsl(0, 0%, 48%),
}
</style>
