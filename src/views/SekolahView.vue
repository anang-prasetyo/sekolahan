<template>
  <main>
    <section class="container mt-2">
      <profil-component :profil-sekolah='profilSekolah' :profil-yayasan='profilYayasan' class="mt-3"></profil-component>
      <sejarah-component id="sejarahSekolah"></sejarah-component>
      <!-- <sambutan-component :profil-sekolah='profilSekolah'></sambutan-component> -->
      <visimisi-component></visimisi-component>
      <section class="mt-5">
        <div class="fs-3 fw-light text-capitalize px-3 px-sm-0">struktur <span class="fw-bold text-uppercase">organisasi</span></div>
        <div>
          <img src="../assets/img/struktur.jpg" alt="" class="w-100">
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import ProfilComponent from '../components/ProfilComponent.vue'
import VisimisiComponent from '../components/VisimisiComponent.vue'
// import SambutanComponent from '../components/SambutanComponent.vue'
import SejarahComponent from '../components/SejarahComponent.vue'
import { useDatabase } from '../databases/db'

const { profilSekolah, profilYayasan } = useDatabase()
</script>

<style>

</style>