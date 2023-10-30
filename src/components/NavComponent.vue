<template>
  <div class="bg-primaryku text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid gap-sm-5 row m-0 px-2 px-sm-0">
          <div class="d-flex gap-2 align-items-center col-10 col-sm-auto ps-0">
            <div class="" style="height: 2rem; width: 2rem;">
              <img src="../assets/img/smk 10 november sukodono sragen-logo.png" alt="" class="h-100">
            </div>
            <RouterLink to="/" class="nav-link text-decoration-none" style="color: inherit;">{{namaSekolah}}</RouterLink>
          </div>
          <button id="navMenuMobile" class="btn col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list text-white"></i>
          </button>
          <div class="collapse navbar-collapse col-auto pe-0 ps-0 ps-sm-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center text-center w-100">
              <li class="nav-item w-100">
                <RouterLink to="/" class="nav-link active text-decoration-none" style="color: inherit;">Home</RouterLink>
              </li>
              <li class="nav-item w-100 dropdown">
                <a class="nav-link dropdown-toggle" style="color: inherit;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profil</a>
                <ul class="dropdown-menu text-center">
                  <li><RouterLink to="/sekolah" class="dropdown-item text-decoration-none" style="color: inherit;">Sekolah</RouterLink></li>
                  <li><RouterLink to="/guru" class="dropdown-item text-decoration-none" style="color: inherit;">Guru</RouterLink></li>
                </ul>
              </li>
              <li class="nav-item w-100">
                <RouterLink to="/contact" class="nav-link text-decoration-none" style="color: inherit;">Contact</RouterLink>
              </li>
              <li class="nav-item w-100">
                <RouterLink to="/ppdb" class="nav-link text-decoration-none" style="color: inherit;">PPDB</RouterLink>
              </li>
              <li class="nav-item w-100 dropdown">
                <a class="nav-link dropdown-toggle" style="color: inherit;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Akademik</a>
                <ul class="dropdown-menu text-center">
                  <li><RouterLink to="/extrakulikuler" class="dropdown-item text-decoration-none" style="color: inherit;">Extrakulikuler</RouterLink></li>
                  <li><RouterLink to="/keahlian" class="dropdown-item text-decoration-none" style="color: inherit;">Keahlian</RouterLink></li>
                  <li><RouterLink to="/mapel" class="dropdown-item text-decoration-none" style="color: inherit;">Kelas</RouterLink></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><RouterLink to="/kaldik" class="dropdown-item text-decoration-none" style="color: inherit;">Kalender Akademik</RouterLink></li>
                </ul>
              </li>
              <li class="nav-item w-100">
                <RouterLink to="/galery" class="nav-link text-decoration-none" style="color: inherit;">Galeri</RouterLink>
              </li>
              <!-- <li class="nav-item w-100">
                <RouterLink to="/" class="nav-link text-decoration-none" style="color: inherit;">Login</RouterLink>
              </li> -->
              <li class="nav-item w-100">
                <div><button class="btn-ku2 px-3 py-2 m-auto"><span>Daftar</span></button></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  namaSekolah: String
})
</script>

<style scoped>

</style>