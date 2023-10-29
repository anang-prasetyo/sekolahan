<template>
  <section class="mt-5 px-2 px-sm-0">
    <div class="fs-3 fw-light text-capitalize">kegiatan <span class="fw-bold text-uppercase">extrakulikuler</span></div>
    <div class="row mx-0 mt-3 row-gap-4">
      <div v-for="e, i in extrakulikuler" :key="i" class="col-12 px-0 px-sm-2 col-sm-3">
        <div class="bg-primaryku-shades-1 px-3 py-3">
          <div id="imgExtrakulikuler" class="project-thumb">
            <img :src="'src/assets/img/'+ e.nama.toLowerCase() +'.jpg'">
          </div>
          <div class="text-center mt-2 fs-3">{{e.nama}}</div>
          <ul class="list-unstyled mb-0 fs-xs2">
            <li v-for="ek,j in e.kegiatan" :key="j" class="d-flex gap-3 border-bottom py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div>{{ek}}</div>
            </li>
            <li class="d-flex gap-3 border-bottom py-2">
              <div><i class="bi bi-check-circle"></i></div>
              <div class="fw-bold">Ruangan {{e.nama}}</div>
            </li>
          </ul>
          <div class="text-center mt-3">
            <button class="btn btn-primary rounded-0">Lihat lebih</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  extrakulikuler: Array
})
</script>

<style lang="scss" scoped>

</style>