<template>
  <div class="row m-0 row-gap-3">
    <div class="col-12 col-sm-8 border">
      <div class="bg-white position-relative" >
      <!-- <div class="bg-white position-relative" style="height: 30rem;"> -->
        <img src="../assets/img/ppdb.jpg" alt="" class="w-100">
        <div class="position-absolute start-50 top-50 translate-middle d-flex justify-content-between w-100 p-2">
          <div class="d-flex justify-content-center bg-light rounded-circle" style="width: 1.5rem; height: 1.5rem;"><i class="bi bi-caret-left"></i></div>
          <div class="d-flex justify-content-center bg-light rounded-circle" style="width: 1.5rem; height: 1.5rem;"><i class="bi bi-caret-right"></i></div>
        </div>
      </div>
      <div class="d-flex gap-1 justify-content-center my-2">
        <div v-for="i in 5" :key="i" class="rounded-circle border" :class="i == 1 ? 'bg-primary border-primary': 'bg-light'" style="height: 5px; width: 5px;"></div>
      </div>
      <div class="text-center bg-white pb-2 w-100">Pengumuman hasil seleksi PPDB 2020</div>
    </div>
    <div class="col pe-sm-0">
      <div class="p-sm-2 d-flex flex-column h-100 justify-content-center">
        <div class="fs-2 fw-bold mb-3" style="line-height: 2.5rem;">Religius, Kompeten, Produktif.</div>
        <div class="fs-xs2" style="text-align: justify;">
          <div>{{namaSekolah}} merupakan Sekolah Menengah Kejuruan Berbasis Pesantren di bawah naungan Yayasan Al-Hamidiyyah Lasem. Yayasan Al-Hamidiyyah didirikan oleh Almarhum Abah Ahmad Thoyfoer bin Maftuchin beserta istri Ibu Muhimmah binti Fatchurrahman sekitar tahun 1980.</div>
          <div class="mt-2">{{namaSekolah}} berdiri pada tahun 2012 dan memiliki 3 Kompetensi Keahlian yakni Farmasi Klinis & Komunitas, Asisten Keperawatan Keperawatan dan Desain Komunikasi Visual.</div>
        </div>
        <div class="mt-3 fs-xs2 text-secondary">Baca Selengkapnya ..</div>
        <div class="mt-4">
          <button class="btn-ku2 px-3 py-2"><span>Daftar</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  namaSekolah: String
})
</script>

<style lang="scss" scoped>

</style>