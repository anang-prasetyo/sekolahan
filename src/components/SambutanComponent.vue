<template>
  <section class="mt-5 px-3 px-sm-0">
    <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">sambutan</span> kepala sekolah</div>
    <div class="row m-0 row-gap-2">
      <div class="col-12 col-sm-9 p-0 ps-sm-0 order-2 order-sm-1">
        <div class="fs-xs2" style="text-align: justify;">
          <p>Assalamualaikum wr. wb.</p>
          <p>Selamat pagi dan salam sejahtera untuk kita semua.</p>
          <p>Puji syukur kita panjatkan ke hadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita, sehingga kita dapat berkumpul di hari yang penuh berkah ini. Saya selaku kepala sekolah (sebutkan nama sekolah) mengucapkan selamat datang kepada para peserta didik baru yang telah diterima melalui seleksi PPDB online tahun ajaran 2023/2024. Kami sangat senang dan bangga bisa menerima kalian sebagai bagian dari keluarga besar (sebutkan nama sekolah), sekolah yang memiliki visi dan misi untuk mencetak generasi yang unggul, berakhlak, dan berwawasan global.</p>
          <p>Kami berharap kalian dapat beradaptasi dengan baik di lingkungan sekolah ini, mengikuti semua kegiatan yang telah disiapkan oleh panitia PPDB, dan menjalin hubungan yang harmonis dengan guru, staf, dan teman-teman kalian. Kami juga mengucapkan terima kasih kepada para orang tua/wali murid yang telah mempercayakan pendidikan anak-anaknya kepada kami. Kami akan berusaha sebaik mungkin untuk memberikan pelayanan dan fasilitas yang berkualitas untuk mendukung proses belajar mengajar di sekolah ini.</p>
          <p>Demikian sambutan yang dapat saya sampaikan. Semoga Allah SWT senantiasa melindungi dan memberkahi kita semua.</p>
          <p>Wassalamualaikum wr. wb.</p>
        </div>
      </div>
      <div class="col-10 col-sm-2 ps-0 px-sm-2 d-flex align-items-center order-1 order-sm-2">
        <div class="d-flex flex-column">
          <div v-if="kepalaSekolahOnly" id="imgSambutan" class="project-thumb" style="height: 15rem;">
            <img :src="'https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/guru%20staff/'+kepalaSekolahOnly.url+'.png'">
          </div>
          <div class="bg-primaryku-shades-1 d-flex flex-column justify-content-center p-2" style="">
            <div class="">{{profilSekolah.kepalaSekolah}}</div>
            <div class="text-secondary fs-xs">Kepala Sekolah</div>
          </div>
        </div>
      </div>
      <div class="col-2 col-sm-1 bg-danger-subtle p-0 d-none d-sm-block order-3">
        <div class="" style="height: 100%; overflow: hidden; background: url('https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/1062.jpg') no-repeat center center; background-size: cover;">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue"

const props = defineProps({
  profilSekolah: Object,
  dbGuruStaf: Object
})
const dbGuruStaf = computed(() => props.dbGuruStaf)
const kepalaSekolahOnly = ref(null)
watch(() => {
  if (dbGuruStaf.value){
    for (let a=0; a<dbGuruStaf.value.length; a++){
      if (dbGuruStaf.value[a].jabatan === 'Kepala Sekolah'){
        kepalaSekolahOnly.value = dbGuruStaf.value[a]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>