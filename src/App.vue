<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
import { useDatabase } from './databases/db'
import FooterComponent from "./components/FooterComponent.vue";
import { Vue3Lottie } from 'vue3-lottie'

import AstronautJSON from './assets/animasi/join.json'
import { useBreakpoints } from './databases/fungsi';

const { profilSekolah } = useDatabase()
const { jmlTampilBulan } = useBreakpoints()

// const naik = () => {
//   window.scrollTo(0,0);
// }
</script>

<template>
  <header>
    <nav-component :nama-sekolah='profilSekolah.nama'></nav-component>
  </header>

  <div class="position-fixed text-center" style="bottom: 0%; right: 2%; z-index: 11;">
    <Vue3Lottie :animationData="AstronautJSON" :height="jmlTampilBulan == 1 ? 100 : 200" :width="jmlTampilBulan == 1 ? 100 : 200" />
  </div>
    <!-- <i class="bi bi-arrow-up-square fs-3" @click="naik()" style="cursor: pointer;"></i> -->
    <!-- <div class="d-flex flex-column align-items-center">
      <div style="height: 7rem; padding-right: 1rem;">
        <img src="./assets/img/HjUE1ngTSDt1.gif" alt="" class="h-100">
      </div>
      <div style="height: 6rem; width: 6rem; margin-top: -3rem" class="bg-primaryku-shades-10 border border-white rounded-circle p-2 d-flex justify-content-center align-items-center">
        <img src="./assets/img/yukcek.png" alt="" class="w-100">
      </div>
    </div> -->
  <RouterView />
  <footer-component :profil-sekolah='profilSekolah'></footer-component>
</template>

<style scoped>

</style>
