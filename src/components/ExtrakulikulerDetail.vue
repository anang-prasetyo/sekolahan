<template>
  <div>
    <section class="mt-3 mt-sm-5 px-2 px-sm-0">
      <div class="fs-3 fw-light text-capitalize">Pengertian <span class="fw-bold text-uppercase">{{profilSekolah.extrakulikuler[index].nama}}</span></div>
      <div class="row mx-0 mt-2 row-gap-3">
        <div class="col-12 col-sm p-0 ps-sm-0 order-2 order-sm-1" style="text-align: justify;">
          <div class="fs-xs2 lh-md">
            <p>Mengutip Kamus Besar Bahasa Indonesia atau KBBI, pramuka adalah singkatan dari Praja Muda Karana. Apa itu? Merupakan organisasi untuk pemuda yang mendidik para anggotanya dalam berbagai keterampilan, disiplin, kepercayaan pada diri sendiri, saling menolong, dan sebagainya.</p>
            <p>Melansir laman resmi Pramuka Kwartir Nasional, dijelaskan bahwa gerakan pramuka adalah organisasi pendidikan nonformal yang menyelenggarakan pendidikan kepanduan yang dilaksanakan di Indonesia. Pramuka sendiri merupakan sebutan bagi anggota gerakan Pramuka. Apa saja?</p>
            <ul>
              <li>Pramuka Siaga (7-10 tahun).</li>
              <li>Pramuka Penggalang (11-15 tahun).</li>
              <li>Penegak (16-20 tahun).</li>
              <li>Pramuka Pandega (21-25 tahun).</li>
            </ul>
            <p>Lalu apa yang dimaksud Kepramukaan? Adalah proses pendidikan di luar lingkungan sekolah dan di luar lingkungan keluarga dalam bentuk kegiatan menarik, menyenangkan, sehat, teratur, terarah, praktis yang dilakukan di alam terbuka berdasarkan prinsip dan metode Kepramukaan.</p>
          </div>
        </div>
        <div class="col-12 col-sm p-0 pe-sm-0 d-flex justify-content-center align-items-center order-sm-2">
          <div style="height:15rem;">
            <img src="../assets/img/pramuka-logo.png" alt="" class="h-100">
          </div>
        </div>
      </div>
    </section>
    <section class="mt-5 px-2">
      <div class="fs-3 fw-light text-capitalize">kegiatan <span class="fw-bold text-uppercase">{{profilSekolah.extrakulikuler[index].nama}}</span></div>
      <div class="row m-0 row-gap-4 mt-3">
        <div v-for="ek, eki in profilSekolah.extrakulikuler[index].kegiatan" :key="eki" class="col-12 col-sm-6 px-0 px-sm-2">
          <div class="bg-primaryku-shades-1">
            <div id="imgKegiatanExtrakulikuler" class="project-thumb" style="height: 20rem;">
              <img :src="'https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/'+ profilSekolah.extrakulikuler[index].nama.toLowerCase() +'-kegiatan-'+ (eki+1) +'.jpg'">
            </div>
            <div class="p-3">{{ek}}</div>
          </div>
        </div>
        <div class="col-12 col-sm-6 px-0 px-sm-2">
          <div class="bg-primaryku-shades-1">
            <div id="imgKegiatanExtrakulikuler" class="project-thumb" style="height: 20rem;">
              <img :src="'https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/'+ profilSekolah.extrakulikuler[index].nama.toLowerCase() +'-kegiatan-'+ (profilSekolah.extrakulikuler[index].kegiatan.length + 1) +'.jpg'">
            </div>
            <div class="p-3">Sanggar {{profilSekolah.extrakulikuler[index].nama}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useDatabase } from "../databases/db";

const { profilSekolah } = useDatabase()
defineProps({
  index: Number
})
</script>

<style>

</style>