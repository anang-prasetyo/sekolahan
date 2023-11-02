<template>
  <main>
    <section class="container mt-2">
      <section class="mt-3 px-3 px-sm-0">
        <div class="row m-0 row-gap-2">
          <div class="col-12 col-sm-6 px-0 px-sm-2 ps-sm-0 py-5 d-flex flex-column gap-3">
            <div class="display-5 fw-light text-capitalize"><span class="fw-bold text-primaryku-shades-10">promo spesial</span> HUT ke-1 {{profilSekolah.nama}}</div>
            <div></div>
            <ul class="list-unstyled mb-0">
              <li class="d-flex gap-2 align-items-center">
                <i class="bi bi-check text-success fs-4"></i>
                <div>Uang Pangkal PPDB 2024/2025</div>
              </li>
              <li class="d-flex gap-2 align-items-center">
                <i class="bi bi-check text-success fs-4"></i>
                <div>SPP 1 Tahun</div>
              </li>
            </ul>
            <div>
              <div class="fs-5">Rp. <span class="fw-bold display-5">0</span></div>
              <div><s>Rp. 2.400.000</s></div>
            </div>
            <div>
              <button class="btn-ku2 px-3 py-2"><span>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZtRyCoa1-bWJzOFlT20hI7QxBi5hIlcNhnclZGCks5-8V-w/viewform?usp=sf_link" target=”_blank” class="text-decoration-none" style="color: inherit;">daftar</a>
              </span></button>
            </div>
          </div>
          <div class="col-12 col-sm-6 px-0 px-sm-2 d-flex justify-content-center align-items-center">
            <div class="project-thumb" style="background: transparent; height: 20rem;">
              <img  src="../assets/img/Asset 2.png">
            </div>
          </div>
        </div>
      </section>

      <section class="mt-5 px-3 px-sm-0">
        <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">syarat</span> & <span class="fw-bold text-uppercase">alur</span> pendaftaran</div>
        <div class="row m-0 row-gap-2">
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="text-capitalize">syarat pendaftaran</div>
            <ol class="text-capitalize">
              <li>mengisi formulir pendaftaran</li>
              <li>fotocopy KK</li>
              <li>fotocopy akta kelahiran</li>
              <li>pas foto 3x4 (4 lembar)</li>
            </ol>
          </div>
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="text-capitalize">alur pendaftaran <b>online</b></div>
            <ol class="">
              <li>Calon peserta didik membuka web {{profilSekolah.nama}}</li>
              <li>Calon peserta didik mengisi formulir pendaftaran yang disediakan melalui google form.</li>
              <li>Calon peserta didik mengupload berkas yang diperlukan (scan KK, scan akta kelahiran, pas foto 3x4) dengan ukuran maksimal 1 MB pada google form.</li>
              <li>Calon peserta didik menunggu hasil pengumuman seleksi.</li>
              <li>Jika diterima, Calon peserta didik harus membawa berkas (fotocopy KK, fotocopy akta kelahiran, pas foto 3x4 (4 lembar)) saat melakukan daftar ulang.</li>
            </ol>
          </div>
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="text-capitalize">alur pendaftaran <b>offline</b></div>
            <ol class="">
              <li>Calon peserta didik datang langsung ke {{profilSekolah.nama}} di {{profilSekolah.alamat}}</li>
              <li>Calon peserta didik mengisi formulir pendaftaran yang disediakan oleh panitia PPDB.</li>
              <li>Calon peserta didik melampirkan berkas (fotocopy KK, fotocopy akta kelahiran, pas foto 3x4 (4 lembar)) kepada panitia PPDB.</li>
              <li>Calon peserta didik menunggu hasil pengumuman seleksi.</li>
              <li>Jika diterima, Calon peserta didik menemui panitia PPDB untuk melakukan daftar ulang.</li>
            </ol>
          </div>
        </div>
      </section>
      <div class="mt-5">
        <div v-if="todayEvent">
          <div class="text-uppercase text-center fs-3 mb-3 fw-bold">{{todayEvent.nama}}</div>
          <vue3-flip-countdown :deadlineISO="todayEvent.tanggalSelesai" :labels="{ days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik', }" />
        </div>
      </div>


      <ppdb-component></ppdb-component>
      <sambutan-component :profil-sekolah='profilSekolah' />
      
      <section class="mt-5 px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">form</span> pendaftaran</div>
        <div class="row mx-0 row-gap-2">
          <div class="col-12 col-sm p-0 ps-sm-0 pt-3">
            <div style="text-align: justify;">
              <p>Jika berminat mendaftar di {{profilSekolah.nama}}, silahkan isi whatsapp form di bawah ini untuk pendataan awal calon peserta didik.</p>
              <p>Setelah menekan tombol daftar, data akan tersimpan ke dalam database, dan Anda akan otomatis diteruskan ke nomor WA panitia PPDB {{profilSekolah.nama}} untuk dilakukan pendataan awal.</p>
            </div>
          </div>
          <div class="col-12 col-sm p-0 pe-sm-0 d-flex justify-content-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZtRyCoa1-bWJzOFlT20hI7QxBi5hIlcNhnclZGCks5-8V-w/viewform?usp=sf_link" target=”_blank” class="bg-primaryku-shades-1 d-flex flex-column gap-2 justify-content-center text-center w-50 px-3 py-5 text-decoration-none" style="color: inherit;">
              <google-form style="height: 5rem;"></google-form>
              <div>Form Pendaftaran Penerimaan Peserta Didik Baru (PPDB) 2024</div>
            </a>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import PpdbComponent from "../components/PpdbComponent.vue";
import GoogleForm from "../icons/GoogleForm.vue";
import { useDatabase } from '../databases/db'
import SambutanComponent from '../components/SambutanComponent.vue'
import { onMounted, ref, watch } from "vue";
import { konversiDate } from "../databases/fungsi";

const { profilSekolah, dbPpdb } = useDatabase()
const { _day, _jam, compare } = konversiDate()
const dbPpdbSorted = ref(null)

const maxDaysOfTheYear = ref(null)
const checkLastDayOfTheYear = () => {
  var tahun = new Date().getFullYear()
  maxDaysOfTheYear.value = _day(new Date(tahun+'-12-31'))
}

const todayEvent = ref(null)
watch(() => {
  if (dbPpdbSorted.value && todayEvent.value == null){
    for (let a=0; a<dbPpdbSorted.value.length; a++){
      if (_day(new Date(dbPpdbSorted.value[a].tanggalMulai)) <= _day(new Date()) && _jam(new Date(dbPpdbSorted.value[a].tanggalSelesai)) >= _jam(new Date())){
        todayEvent.value = (dbPpdbSorted.value[a])
      }
    }
  }
})

onMounted(() => {
  dbPpdbSorted.value = dbPpdb.value.timeline.sort(compare)
  checkLastDayOfTheYear()
})
</script>

<style>

</style>