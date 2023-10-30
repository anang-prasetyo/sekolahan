<template>
  <footer class="mt-5 bg-primaryku text-white">
    <div class="container pt-5 pb-2">
      <div class="row m-0 d-flex align-items-center row-gap-4">
        <div class="col-12 col-sm-4 d-flex flex-column gap-2 fs-xs2 align-items-center align-items-sm-start text-center text-sm-start">
          <div class="" style="height: 10rem; width: 10rem;">
            <img src="../assets/img/smk 10 november sukodono sragen-logo.png" alt="" class="h-100">
          </div>
          <div class="fs-3">{{profilSekolah.nama}}</div>
          <div>{{profilSekolah.alamat}}</div>
          <div><i class="bi bi-envelope"></i> : info@smk10novembersragen.sch.id</div>
          <div><i class="bi bi-telephone"></i> : (0271) 711876</div>
          <div class="d-flex gap-3 fs-5 mt-3">
            <div><i class="bi bi-instagram"></i></div>
            <div><i class="bi bi-facebook"></i></div>
            <div><i class="bi bi-youtube"></i></div>
            <div><i class="bi bi-tiktok"></i></div>
            <div><i class="bi bi-whatsapp"></i></div>
            <div><i class="bi bi-telegram"></i></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 d-flex flex-column gap-2">
          <div class="row m-0">
            <div class="col ps-0">
              <div>Keahlian</div>
              <div class="d-flex flex-column gap-2">
                <div v-for="k, ki in profilSekolah.keahlian" :key="ki" class="fs-xs2 text-white-50">{{k.nama}}</div>
              </div>
            </div>
            <div class="col pe-0">
              <div>Extrakulikuler</div>
              <div class="d-flex flex-column gap-2">
                <div v-for="e, ei in profilSekolah.extrakulikuler" :key="ei" class="fs-xs2 text-white-50">{{e.nama}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 text-center text-sm-start">
          <iframe id="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9891890480626!2d110.97537817361494!3d-7.355107172363582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a07666de7af63%3A0x1540b516f97e6c8!2sSMK%2010%20NOVEMBER%20SRAGEN!5e0!3m2!1sid!2sid!4v1698067405269!5m2!1sid!2sid" width="350" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <p class="m-0 mt-5 text-center">&copy; 2023 {{profilSekolah.nama}}</p>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  profilSekolah: Object
})
</script>

<style>

</style>