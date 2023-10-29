<template>
  <section class="mt-5">
    <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">guru</span> & <span class="fw-bold text-uppercase">staf</span></div>
    <div class="row mx-0 my-3 row-gap-4">
      <div v-for="gs, i in guruStaf" :key="i" class="col-3" :class="[i < 7 ? '' : 'd-none']" style="height: 20rem;">
        <div class="d-flex flex-column h-100">
          <div class="bg-primaryku-shades-3 rounded-top h-75" style=""></div>
          <div class="bg-primaryku-shades-1 rounded-bottom h-25 d-flex flex-column justify-content-center px-3 text-capitalize" style="">
            <div class="">{{gs.nama}}</div>
            <div class="text-secondary fs-xs">{{gs.jabatan}}</div>
          </div>
        </div>
      </div>
      <div class="col-3" style="height: 20rem;">
        <div class="d-flex flex-column h-100">
          <div class="bg-primaryku-shades-3 rounded h-100 position-relative" style="">
            <div class="position-absolute top-50 start-50 translate-middle">
              <button class="btn btn-primary">Lihat lebih</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  guruStaf: Object
})
</script>

<style>

</style>