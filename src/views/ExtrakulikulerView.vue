<template>
  <main>
    <section class="container mt-2">
      <tabmenu-component :menus="profilSekolah.extrakulikuler"></tabmenu-component>

      <extrakulikuler-detail :index="0"></extrakulikuler-detail>
      
      <tabmenu-component :menus="profilSekolah.extrakulikuler" class="mt-5"></tabmenu-component>
    </section>
  </main>
</template>

<script setup>
import { useDatabase } from '../databases/db'
import TabmenuComponent from '../components/TabmenuComponent.vue'
import { onMounted } from 'vue'
import ExtrakulikulerDetail from '../components/ExtrakulikulerDetail.vue'

const { profilSekolah } = useDatabase()
onMounted(() => {
  window.scrollTo(0,0);
})
</script>

<style>

</style>