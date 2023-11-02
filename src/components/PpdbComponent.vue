<template>
  <section class="mt-5 px-2 px-sm-0">
    <div class="fs-3 fw-light text-capitalize">timeline <span class="fw-bold text-uppercase">ppdb</span> 2023</div>
    <div class="my-3 overflow-auto">
      <div v-if="dbPpdbGenap.length !== 0" class="d-flex text-capitalize">
        <div v-for="pt, pti in dbPpdbGenap" :key="pti" style="min-width: 370px; padding: .75rem;" class="pb-5 border-start border-5 border-primaryku">
          <div v-if="tahun(pt.tanggalMulai) === tahun(pt.tanggalSelesai) && bulan(pt.tanggalMulai) === bulan(pt.tanggalSelesai) && hari(pt.tanggalMulai) === hari(pt.tanggalSelesai)">{{hari(pt.tanggalMulai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div v-else-if="tahun(pt.tanggalMulai) === tahun(pt.tanggalSelesai) && bulan(pt.tanggalMulai) === bulan(pt.tanggalSelesai)">{{hari(pt.tanggalMulai) + ' - ' + hari(pt.tanggalSelesai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div v-else>{{hari(pt.tanggalMulai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' - ' + hari(pt.tanggalSelesai) + ' ' + namaBulan[(bulan(pt.tanggalSelesai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div>{{pt.nama}}</div>
        </div>
      </div>
      <div class="bg-primaryku position-relative" style="height: .5rem; min-width: calc(370px * 3);">
        <div class="bg-warning rounded-circle position-absolute" style="height: 1.5rem; width: 1.5rem; top: -.5rem;" :style="'left: calc((100% / 6) * '+ todayStartDot +'); translate: calc(0px - (9px + (1px * '+ todayStartDot +')));'"></div>
      </div>
      <div v-if="dbPpdbGanjil.length !== 0" class="text-capitalize d-flex">
        <div style="min-width: calc(370px / 2);" class=""></div>
        <div id="timelineBot" v-for="pt, pti in dbPpdbGanjil" :key="pti" style="min-width: 370px; padding: .75rem;" class="pt-5 border-start border-5 border-primaryku">
          <div v-if="tahun(pt.tanggalMulai) === tahun(pt.tanggalSelesai) && bulan(pt.tanggalMulai) === bulan(pt.tanggalSelesai) && hari(pt.tanggalMulai) === hari(pt.tanggalSelesai)">{{hari(pt.tanggalMulai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div v-else-if="tahun(pt.tanggalMulai) === tahun(pt.tanggalSelesai) && bulan(pt.tanggalMulai) === bulan(pt.tanggalSelesai)">{{hari(pt.tanggalMulai) + ' - ' + hari(pt.tanggalSelesai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div v-else>{{hari(pt.tanggalMulai) + ' ' + namaBulan[(bulan(pt.tanggalMulai))] + ' - ' + hari(pt.tanggalSelesai) + ' ' + namaBulan[(bulan(pt.tanggalSelesai))] + ' ' + tahun(pt.tanggalMulai)}}</div>
          <div>{{pt.nama}}</div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center p-3 position-relative">
      <div class="overflow-hidden position-absolute" style="height: 5rem; opacity: .5;">
        <img src="../assets/img/1062.jpg" alt="" class="w-100">
      </div>
      <div class="bg-white border-2 border-white p-2" style="z-index: 2;">
      <button class="btn-ku2 px-3 py-2 m-auto"><span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZtRyCoa1-bWJzOFlT20hI7QxBi5hIlcNhnclZGCks5-8V-w/viewform?usp=sf_link" target=”_blank” class="text-decoration-none" style="color: inherit;">daftar</a>
        </span>
      </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useDatabase } from "../databases/db";
import { konversiDate } from "../databases/fungsi";

const { dbPpdb,namaBulan } = useDatabase()
const { tahun, bulan, hari, _day, _jam, compare } = konversiDate()
const dbPpdbGanjil = ref([])
const dbPpdbGenap = ref([])
const dbPpdbSorted = ref(null)
const todayEvent = ref(null)
const todayStartDot = ref(null)

watch(() => {
  if ( dbPpdbSorted.value ) {
    for (let a=0; a<dbPpdbSorted.value.length; a++){
      if (a%2 == 0){
        dbPpdbGenap.value.push(dbPpdbSorted.value[a])
      }
      else {
        dbPpdbGanjil.value.push(dbPpdbSorted.value[a])
      }
    }
  }
  if (dbPpdbSorted.value && todayEvent.value == null){
    for (let a=0; a<dbPpdbSorted.value.length; a++){
      if (_day(new Date(dbPpdbSorted.value[a].tanggalMulai)) <= _day(new Date()) && _jam(new Date(dbPpdbSorted.value[a].tanggalSelesai)) >= _jam(new Date())){
        todayEvent.value = (dbPpdbSorted.value[a])
        todayStartDot.value = a
      }
    }
  }
})
onMounted(() => {
  dbPpdbSorted.value = dbPpdb.value.timeline.sort(compare)
})
</script>

<style lang="scss" scoped>
#timelineBot:last-child{
  min-width: calc(370px / 2) !important;
}
</style>