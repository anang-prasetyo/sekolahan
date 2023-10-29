<template>
  <main>
    <section class="container mt-2">
      <section class="">
        <div class="fs-3 fw-light text-capitalize px-3 px-sm-0"><span class="fw-bold text-uppercase">contact</span> center</div>
        <div class="row m-0 d-flex align-items-center mt-3 row-gap-2">
          <div class="col-12 col-sm ps-sm-0">
            <img src="../assets/img/waefgwh.png" alt="" class="w-100">
          </div>
          <div class="col-12 col-sm pe-sm-0">
            <div class="bg-primaryku-shades-1 p-3 d-flex flex-column gap-3">
              <div>Berikut adalah contact center {{profilSekolah.nama}}, silakan hubungi jika Anda membutuhkan bantuan atau informasi lebih lanjut.</div>
              <ul class="mb-0">
                <li>Admin Website : +628123456789</li>
                <li>Panitia PPDB : +628123456789</li>
                <li>Bendahara PPDB : +628123456789</li>
              </ul>
              <div>Informasi lain terkait {{profilSekolah.nama}} bisa Anda ikuti melalui laman media sosial kami. Silahkan pilih icon di bawah untuk masuk ke halaman sosial media {{profilSekolah.nama}}.</div>
              <div class="d-flex gap-3 justify-content-center fs-3">
                <div><i class="bi bi-instagram"></i></div>
                <div><i class="bi bi-facebook"></i></div>
                <div><i class="bi bi-youtube"></i></div>
                <div><i class="bi bi-tiktok"></i></div>
                <div><i class="bi bi-whatsapp"></i></div>
                <div><i class="bi bi-telegram"></i></div>
              </div>
              <div>{{profilSekolah.alamat}}</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { useDatabase } from '../databases/db'

const { profilSekolah } = useDatabase()
</script>

<style>

</style>