<template>
  <section class="mt-5">
    <div class="fs-3 fw-light text-capitalize text-white">kompetensi <span class="fw-bold text-uppercase">Keahlian</span></div>
    <div class="row mx-0 mt-3 row-gap-4">
      <div v-for="k, i in keahlian" :key="i" class="col-12 px-0 px-sm-2 col-sm-3">
        <div class="bg-primaryku-shades-1 px-3 py-3" style="height: 30rem;">
          <div class="bg-theme1 rounded-circle mx-auto d-flex align-items-center justify-content-center" style="height: 13rem; width: 13rem">
            <div class="fs-1">{{k.nama}}</div>
          </div>
          <ul class="list-unstyled mt-3 mb-0 fs-xs2">
            <li class="d-flex gap-3 border-bottom px-3 py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div>Ilustrasi Digital</div>
            </li>
            <li class="d-flex gap-3 border-bottom px-3 py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div>UI UX & Web Desain</div>
            </li>
            <li class="d-flex gap-3 border-bottom px-3 py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div>Fotografi & Videografi</div>
            </li>
            <li class="d-flex gap-3 border-bottom px-3 py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div class="fw-bold">Lab. {{k.nama}}</div>
            </li>
          </ul>
          <div class="text-center mt-3">
            <button class="btn btn-primary rounded-0"><RouterLink to="/keahlian" class="dropdown-item text-decoration-none" style="color: inherit;">Lihat Lebih</RouterLink></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  keahlian: String
})
</script>

<style scoped lang="scss">

.bg-theme1{
  background: var(--color-primary-shades-3);
}
</style>