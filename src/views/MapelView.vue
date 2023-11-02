<template>
  <main>
    <section class="container mt-2">
      <section class="px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">kelas</span> tersedia</div>
        <div class="row m-0 mt-2 row-gap-4">
          <div v-for="m, i in makul" :key="i" class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="border">
              <div class="project-thumb" style="height: 15rem;">
                <!-- <img :src="'https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/'+ profilSekolah.extrakulikuler[index].nama.toLowerCase() +'-kegiatan-'+ (eki+1) +'.jpg'"> -->
                <img :src="'src/assets/img/'+m+'.jpg'" alt="">
              </div>
              <div class="px-3 py-2">
                <div class="fw-semibold fs-4 mb-2">{{m}}</div>
                <div class="fs-xs2 text-secondary overflow-elipsis">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, vel. Doloribus quasi vero in id deleniti sunt veritatis, cum, repellendus a est incidunt libero repudiandae quas eaque sequi nobis perferendis?</div>
                <div class="row mx-0 my-2 text-center">
                  <div class="col-6 ps-0">
                    <div class="bg-primaryku-shades-1 py-1 px-2 fs-xs2">40 Soal</div>
                  </div>
                  <div class="col-6 ps-0">
                    <div class="bg-primaryku-shades-1 py-1 px-2 fs-xs2">25% Exp</div>
                  </div>
                </div>
                <button class="btn btn-primary w-100 rounded-0 my-1">Ikuti Kelas</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" /> -->
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
// import { Vue3Lottie } from 'vue3-lottie'

// import AstronautJSON from '../assets/animasi/up.json'

const makul = ref(['Matematika', 'Bahasa Inggris', 'IPA'])
</script>

<style>
.overflow-elipsis{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>