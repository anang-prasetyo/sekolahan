<template>
  <section class="mt-5 px-3 px-sm-0">
    <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">sambutan</span> kepala sekolah</div>
    <div class="row m-0 row-gap-2">
      <div class="col-12 col-sm-8 p-0 ps-sm-0">
        <div class="fs-xs2" style="text-align: justify;">Selamat pagi, siang, atau sore, para siswa, guru, dan staf sekolah yang saya hormati. Saya merasa sangat bangga dan terhormat bisa berada di sini hari ini untuk menyambut acara penting ini. Saya ingin mengucapkan selamat datang kepada para siswa baru dan juga selamat kembali kepada siswa lama. Saya berharap tahun ajaran ini akan menjadi tahun yang penuh kebahagiaan, keberhasilan, dan prestasi. Di sini di sekolah kita, kami berkomitmen untuk memberikan pendidikan terbaik bagi para siswa kami. Kami akan terus berusaha untuk meningkatkan kualitas pendidikan dan memastikan bahwa setiap siswa mendapatkan pengalaman belajar yang positif dan bermanfaat. Kami juga akan terus bekerja sama dengan para orang tua dan masyarakat untuk menciptakan lingkungan belajar yang aman dan mendukung. Saya ingin mengucapkan terima kasih kepada para guru dan staf sekolah atas kerja keras mereka dalam mempersiapkan acara ini. Tanpa dukungan mereka, acara ini tidak akan mungkin terjadi. Terima kasih juga kepada para orang tua yang telah mempercayakan pendidikan anak-anak mereka kepada kami. Akhir kata, saya ingin mengucapkan selamat menempuh tahun ajaran baru. Saya berharap kita semua dapat bekerja sama untuk mencapai tujuan kita bersama. Terima kasih.</div>
      </div>
      <div class="col-10 col-sm-3 ps-0 ps-sm-2">
        <div class="d-flex flex-column h-100">
          <div id="imgSambutan" class="project-thumb">
            <img src="../assets/img/sample foto kepsek.jpeg">
          </div>
          <div class="bg-primaryku-shades-1 h-25 d-flex flex-column justify-content-center px-3" style="">
            <div class="fs-4">{{profilSekolah.kepalaSekolah}}</div>
            <div class="text-secondary fs-xs">Kepala Sekolah</div>
          </div>
        </div>
      </div>
      <div class="col-2 col-sm-1 bg-danger-subtle p-0">
        <div class="" style="height: 100%; overflow: hidden; background: url('src/assets/img/1062.jpg') no-repeat center center; background-size: cover;">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profilSekolah: Object
})
</script>

<style lang="scss" scoped>
</style>