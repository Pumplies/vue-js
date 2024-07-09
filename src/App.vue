<script setup>
import { onMounted, ref, watch } from 'vue'
import Header from './components/HeaderComponent.vue'
import Cards from './components/CardsItem.vue'
import BlockOne from './components/BlockOneComponent.vue'
import Drawer from './components/DrawerComponent.vue'
import AllCrosiHeader from './components/AllCrosiHeader.vue'
import axios from 'axios'
import SortComponent from './components/AllCrosiHeader.vue'

const isDrawerVisible = ref(false)

const toggleDrawer = () => {
  isDrawerVisible.value = !isDrawerVisible.value
}

const items = ref([])
const sortBy = ref('')
onMounted(async () => {
  try {
    const { data } = await axios.get('https://269b3b45e08bcd1a.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})

watch(sortBy, async () => {
  try {
    const { data } = await axios.get('https://269b3b45e08bcd1a.mokky.dev/items?sortBy=' + sortBy.value)
    items.value = data
  } catch (error) {
    console.log(error)
  }
})

const onChangeSelect = (e) => {
  sortBy.value = e.target.value
}
</script>

<template>
  <Drawer v-if="isDrawerVisible" :toggleDrawer="toggleDrawer" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header :toggleDrawer="toggleDrawer" />
    <div class="pl-10 pr-10">
      <BlockOne />
      <AllCrosiHeader :onchange="onChangeSelect"/>
      <Cards :items="items" />
    </div>
  </div>
</template>

<style scoped></style>
