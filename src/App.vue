<script setup>
import { onMounted, ref, watch } from 'vue'
import Header from './components/HeaderComponent.vue'
import Cards from './components/CardsItem.vue'
import BlockOne from './components/BlockOneComponent.vue'
import Drawer from './components/DrawerComponent.vue'
import AllCrosiHeader from './components/AllCrosiHeader.vue'
import axios from 'axios'

const isDrawerVisible = ref(false)

const toggleDrawer = () => {
  isDrawerVisible.value = !isDrawerVisible.value
}

const items = ref([])
const sortBy = ref('')
onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})

watch(sortBy, async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/items?sortBy=${sortBy.value}`)
    items.value = data
  } catch (error) {
    console.log(error)
  }
})

const onChangeSelect = (e) => {
  sortBy.value = e.target.value
}

const updateFavoriteStatus = async (item) => {
  try {
    const updatedItem = { ...item, isFavorite: !item.isFavorite }
    await axios.put(`http://localhost:3000/api/items/${item._id}`, updatedItem)
    const { data } = await axios.get('http://localhost:3000/api/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <Drawer v-if="isDrawerVisible" :toggleDrawer="toggleDrawer" />
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header :toggleDrawer="toggleDrawer" />
    <div class="pl-10 pr-10">
      <BlockOne />
      <AllCrosiHeader :onchange="onChangeSelect" />
      <Cards :items="items" :onUpdateFavorite="updateFavoriteStatus" />
    </div>
  </div>
</template>

<style scoped></style>
