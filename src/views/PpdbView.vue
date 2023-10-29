<template>
  <main>
    <section class="container mt-2">
      <section class="px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">penerimaan peserta didik baru</span> 2023</div>
        <div class="row m-0 row-gap-2 mt-3">
          <div class="col-12 col-sm-8 p-0 ps-sm-0">
            <div class="fs-xs2" style="text-align: justify;">
              <p>Assalamualaikum wr. wb.</p>
                  <p>Selamat pagi dan salam sejahtera untuk kita semua.</p>
                  <p>Puji syukur kita panjatkan ke hadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita, sehingga kita dapat berkumpul di hari yang penuh berkah ini. Saya selaku kepala sekolah (sebutkan nama sekolah) mengucapkan selamat datang kepada para peserta didik baru yang telah diterima melalui seleksi PPDB online tahun ajaran 2023/2024. Kami sangat senang dan bangga bisa menerima kalian sebagai bagian dari keluarga besar (sebutkan nama sekolah), sekolah yang memiliki visi dan misi untuk mencetak generasi yang unggul, berakhlak, dan berwawasan global.</p>
                  <p>Kami berharap kalian dapat beradaptasi dengan baik di lingkungan sekolah ini, mengikuti semua kegiatan yang telah disiapkan oleh panitia PPDB, dan menjalin hubungan yang harmonis dengan guru, staf, dan teman-teman kalian. Kami juga mengucapkan terima kasih kepada para orang tua/wali murid yang telah mempercayakan pendidikan anak-anaknya kepada kami. Kami akan berusaha sebaik mungkin untuk memberikan pelayanan dan fasilitas yang berkualitas untuk mendukung proses belajar mengajar di sekolah ini.</p>
                  <p>Demikian sambutan yang dapat saya sampaikan. Semoga Allah SWT senantiasa melindungi dan memberkahi kita semua.</p>
                  <p>Wassalamualaikum wr. wb.</p>
            </div>
          </div>
          <div class="col-10 col-sm-3 ps-0 ps-sm-2">
            <div class="d-flex flex-column h-100">
              <div id="imgSambutan" class="project-thumb">
                <img src="../assets/img/sample foto kepsek.jpeg">
              </div>
              <div class="bg-primaryku-shades-1 h-25 d-flex flex-column justify-content-center px-3" style="">
                <div class="fs-4">{{profilSekolah.kepalaSekolah}}</div>
                <div class="text-secondary fs-xs">Kepala Sekolah</div>
              </div>
            </div>
          </div>
          <div class="col-2 col-sm-1 bg-danger-subtle p-0">
            <div class="" style="height: 100%; overflow: hidden; background: url('src/assets/img/1062.jpg') no-repeat center center; background-size: cover;">
            </div>
          </div>
        </div>
      </section>
      <ppdb-component></ppdb-component>
      
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

const { profilSekolah } = useDatabase()
</script>

<style>

</style>