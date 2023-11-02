<template>
  <main>
    <section class="container mt-2">
      <section class="px-3 px-sm-0">
        <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">guru</span> & <span class="fw-bold text-uppercase">staf</span></div>
        <div class="row mx-0 my-3 row-gap-2 row-gap-sm-4">
          <div v-for="gs, i in dbGuruStaf" :key="i" class="col-6 col-sm-3 px-1 px-sm-2" :class="[i < jmlTampil ? '' : 'd-none']">
            <div class="d-flex flex-column">
              <div id="imgGuruStaf" class="project-thumb" style="height: 22rem;">
                <img :src="gs.isFoto ? 'src/assets/img/guru staff/'+gs.nama+'.png' : 'src/assets/img/guru staff/Photo-Missing.png'">
              </div>
              <!-- <div id="imgGuruStaf" class="bg-primaryku-shades-3" style="height: 20rem;">
              </div> -->
              <div class="bg-primaryku-shades-1 d-flex flex-column justify-content-center px-2 px-sm-3 py-1 text-capitalize" style="">
                <div class="">{{gs.nama}}</div>
                <div class="text-secondary fs-xs">{{gs.jabatan}}</div>
              </div>
            </div>
          </div>
          <div v-if="jmlTampil < dbGuruStaf.length" class="col-6 col-sm-3">
            <div class="d-flex flex-column">
              <div id="imgGuruStaf" class="bg-primaryku-shades-3 position-relative" style="height: 20rem;">
                <div class="position-absolute top-50 start-50 translate-middle">
                  <button class="btn btn-primary" @click="jmlTampil = jmlTampil + 4">Lihat lebih</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <!-- <section class="mt-5">
      <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">profil</span> sekolah</div>
    </section> -->
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useDatabase } from '../databases/db'

const { dbGuruStaf } = useDatabase()
const jmlTampil = ref(7)
</script>

<style>

</style>