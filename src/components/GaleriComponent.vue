<template>
  <section class="mt-5">
    <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">galeri</span> kegiatan</div>
    <div class="mb-2">
      <div class="d-flex flex-column">
        <div>Desain Komunikasi Visual (DKV)</div>
      </div>
      <div class="row mx-0 mt-2">
        <div v-for="i in 4" :key="i" class="col-3 bg-primaryku-shades-3 border border-white" style="height: 17rem;"></div>
      </div>
    </div>
    <div class="mb-2">
      <div class="d-flex flex-column">
        <div>Farmasi Klinis</div>
      </div>
      <div class="row mx-0 mt-2">
        <div v-for="i in 4" :key="i" class="col-3 bg-primaryku-shades-3 border border-white" style="height: 17rem;"></div>
      </div>
    </div>
    <div class="d-flex py-2">
      <button class="btn btn-primary m-auto">Lihat semua event</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>