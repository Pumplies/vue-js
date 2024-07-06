<script setup>
import { ref } from 'vue'
import Header from './components/HeaderComponent.vue'
import Cards from './components/CardsItem.vue'
import BlockOne from './components/BlockOneComponent.vue'
import Drawer from './components/DrawerComponent.vue'

const isDrawerVisible = ref(false)

const toggleDrawer = () => {
  isDrawerVisible.value = !isDrawerVisible.value
}
</script>

<template>
  <Drawer v-if="isDrawerVisible" :toggleDrawer="toggleDrawer" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header :toggleDrawer="toggleDrawer" />
    <div class="pl-10 pr-10">
      <BlockOne />
      <h2>Все кроссовки</h2>
      <Cards />
    </div>
  </div>
</template>

<style scoped></style>
