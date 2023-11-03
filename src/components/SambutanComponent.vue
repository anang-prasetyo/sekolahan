<template>
  <section class="mt-5 px-3 px-sm-0">
    <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">sambutan</span> kepala sekolah</div>
    <div class="row m-0 row-gap-2">
      <div class="col-12 col-sm-9 p-0 ps-sm-0 order-2 order-sm-1">
        <div class="fs-xs2" style="text-align: justify;">
          <p>Kami Menyambut baik terbitnya Website SMK 10 NOVEMBER SUKODONO yang baru, dengan harapan dipublikasinya website ini sekolah berharap pelayanan pendidikan semakin baik.</p>
        </div>
      </div>
      <div class="col-6 col-sm-2 ps-0 px-sm-2 d-flex align-items-center order-1 order-sm-2">
        <div class="d-flex flex-column">
          <div v-if="kepalaSekolahOnly" id="imgSambutan" class="project-thumb" style="height: 15rem;">
            <img :src="'https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/guru%20staff/'+kepalaSekolahOnly.url+'.png'">
          </div>
          <div class="bg-primaryku-shades-1 d-flex flex-column justify-content-center p-2" style="">
            <div class="">{{profilSekolah.kepalaSekolah}}</div>
            <div class="text-secondary fs-xs">Kepala Sekolah</div>
          </div>
        </div>
      </div>
      <div class="col-2 col-sm-1 bg-danger-subtle p-0 d-none d-sm-block order-3">
        <div class="" style="height: 100%; overflow: hidden; background: url('https://raw.githubusercontent.com/anang-prasetyo/sekolahan/master/src/assets/img/1062.jpg') no-repeat center center; background-size: cover;">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from "vue"

const props = defineProps({
  profilSekolah: Object,
  dbGuruStaf: Object
})
const dbGuruStaf = computed(() => props.dbGuruStaf)
const kepalaSekolahOnly = ref(null)
watch(() => {
  if (dbGuruStaf.value){
    for (let a=0; a<dbGuruStaf.value.length; a++){
      if (dbGuruStaf.value[a].jabatan === 'Kepala Sekolah'){
        kepalaSekolahOnly.value = dbGuruStaf.value[a]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>