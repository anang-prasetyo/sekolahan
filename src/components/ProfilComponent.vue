<template>
  <section class="">
    <div class="fs-3 fw-light text-capitalize px-3 px-sm-0"><span class="fw-bold text-uppercase">profil</span> sekolah</div>
    <div class="row m-0 mt-2 justify-content-center row-gap-2">
      <div class="col-12 col-sm ps-sm-0">
        <div class="bg-primaryku-shades-1  p-3" style="min-height: 10rem;">
          <ul class="list-unstyled m-0 text-secondary">
            <li class="fw-bold text-uppercase text-body">{{profilSekolah.nama}}</li>
            <li class="">{{profilSekolah.alamat}}</li>
            <li class="mt-3">Kepala Sekolah : {{profilSekolah.kepalaSekolah}}</li>
            <li class="row mx-0 mt-2">
              <ul class="col ps-0 list-unstyled m-0">
                <li>NSS : {{profilSekolah.nss}}</li>
                <li>NDS : {{profilSekolah.nds}}</li>
                <li>NIS : {{profilSekolah.nis}}</li>
                <li>
                  <div>SK Pendirian</div>
                  <ul class="ps-4 mb-0">
                    <li class="">
                      <div class="fs-xs">Nomor</div>
                      <div>{{profilSekolah.skPendirian.nomor}}</div>
                    </li>
                    <li class="">
                      <div class="fs-xs">Tanggal</div>
                      <div>{{profilSekolah.skPendirian.tanggal}}</div>
                    </li>
                    <li class="">
                      <div class="fs-xs">Dari</div>
                      <div>{{profilSekolah.skPendirian.dari}}</div>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="col ps-4 text-capitalize m-0">
                <li>
                  <div class="fs-xs">kompetensi keahlian</div>
                  <ol>
                    <li v-for="k, i in profilSekolah.keahlian" :key="i">{{k.nama}}</li>
                  </ol>
                </li>
                <li>
                  <div class="fs-xs">extrakulikuler</div>
                  <ol>
                    <li v-for="e, i in profilSekolah.extrakulikuler" :key="i">{{e.nama}}</li>
                  </ol>
                </li>
                <li>
                  <div class="fs-xs">Nama yayasan</div>
                  <div>{{profilYayasan.nama}}</div>
                </li>
                <li>
                  <div class="fs-xs">Alamat</div>
                  <div>{{profilYayasan.alamat}}</div>
                </li>
                <li>
                  <div class="fs-xs">Ketua</div>
                  <div>{{profilYayasan.ketua}}</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm pe-sm-0 d-flex justify-content-center">
        <div class="project-thumb " style="height: 100%;">
          <img src="../assets/img/Gedung-Sekolah.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  profilSekolah: Object,
  profilYayasan: Object
})
</script>

<style>

</style>