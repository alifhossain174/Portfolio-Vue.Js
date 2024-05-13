<template>
  <TopHeader></TopHeader>
  <router-view></router-view>
  <BottomFooter></BottomFooter>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
import BottomFooter from './components/BottomFooter.vue'

export default {
    name: 'App',
    components: {
      TopHeader,
      BottomFooter
    }
}
</script>

<style scoped>

</style>
