<template>
  <main>
    <section class="container mt-2">
      <hero-component :nama-sekolah='profilSekolah.nama'></hero-component>
      <ppdb-component></ppdb-component>
    </section>
    <div class="bg-primaryku px-4">
      <keahlian-component class="py-5 p-sm-5" :keahlian='profilSekolah.keahlian'></keahlian-component>
    </div>
    <section class="container">
      <extrakulikuler-component :extrakulikuler='profilSekolah.extrakulikuler'></extrakulikuler-component>
    </section>
    <div class="bg-primaryku px-4 my-5">
      <section class="py-5 p-sm-5 text-white">
        <div class="fs-3 fw-light text-capitalize text-center mb-4"><span class="fw-bold text-uppercase">Tahun ajaran</span> 2023/2024</div>
        <div class="row m-0 text-center row-gap-4">
          <div class="col-4 col-sm-2">
            <div class="bg-primaryku-shades-10 p-3 py-sm-5 border border-2 border-white">
              <div>Guru</div>
              <div class="display-2">{{dbGuruStaf.length}}</div>
            </div>
          </div>
          <div class="col-4 col-sm-2">
            <div class="bg-primaryku-shades-10 p-3 py-sm-5 border border-2 border-white text-white">
              <div>Peserta didik</div>
              <div class="display-2">100</div>
            </div>
          </div>
          <div v-for="k, i in profilSekolah.keahlian" :key="i" class="col-4 col-sm-2">
            <div class="bg-primaryku-shades-10 p-3 py-sm-5 border border-2 border-white text-white">
              <div>{{k.nama}}</div>
              <div class="display-2">25</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="container">
      <section class="mt-5">
        <div class="row m-0 row-gap-4">
          <div class="col-12">
            <div class="project-thumb" style="height: 15rem;">
              <img src="../assets/img/Gedung-Sekolah3.jpg">
            </div>
          </div>
          <div v-for="i in 3" :key="i" class="col-4">
            <div class="project-thumb" style="height: 15rem;">
              <img :src="'src/assets/img/Gedung-Sekolah-dalam'+i+'.jpg'">
            </div>
          </div>
        </div>
      </section>
      <testimoni-component></testimoni-component>
    </section>
  </main>
</template>

<script setup>
import HeroComponent from "../components/HeroComponent.vue";
import KeahlianComponent from "../components/KeahlianComponent.vue";
import PpdbComponent from "../components/PpdbComponent.vue";
import TestimoniComponent from "../components/TestimoniComponent.vue";
import ExtrakulikulerComponent from "../components/ExtrakulikulerComponent.vue";
import { useDatabase } from '../databases/db'

const { profilSekolah, dbGuruStaf } = useDatabase()
</script>