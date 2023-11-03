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
          <p>{{profilSekolah.nama}} berada di {{profilSekolah.alamat}}. Mulai berdiri pada tahun 2007 sampai saat ini 16 tahun sudah memiliki 4 cabang smk 10 november diantaranya <span class="text-uppercase">smk 10 november tambun</span>, <span class="text-uppercase">smk 10 november cibitung</span>, <span class="text-uppercase">smk 10 november kebumen</span>, dan <span class="text-uppercase">smk 10 november sukodono</span>. Untuk ajaran 2023/2024 {{profilSekolah.nama}} dipimpin oleh {{profilSekolah.kepalaSekolah}}.</p>
        </div>
        <div class="mt-3 fs-xs2 text-secondary"><RouterLink to="/sekolah/#sejarahSekolah" class="dropdown-item text-decoration-none" style="color: inherit;">Baca Selengkapnya ...</RouterLink></div>
        <div class="mt-4">
          <button class="btn-ku2 px-3 py-2"><span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZtRyCoa1-bWJzOFlT20hI7QxBi5hIlcNhnclZGCks5-8V-w/viewform?usp=sf_link" target=”_blank” class="text-decoration-none" style="color: inherit;">daftar</a>
          </span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  profilSekolah: Object
})
</script>

<style lang="scss" scoped>

</style>