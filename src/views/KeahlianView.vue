<template>
  <main>
    <section class="container mt-2">
      <tabmenu-component :menus="profilSekolah.keahlian"></tabmenu-component>
      <section class="mt-3 mt-sm-5 px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize">Pengertian <span class="fw-bold text-uppercase">{{profilSekolah.keahlian[0].nama}}</span></div>
        <div class="row mx-0 mt-2 row-gap-2">
          <div class="col-12 col-sm p-0 ps-sm-0 order-2 order-sm-1" style="text-align: justify;">
            <div class="fs-xs2 lh-md">
              <p>Teknik Kendaraan Ringan Otomotif (TKRO) adalah ilmu yang mempelajari tentang alat-alat transportasi darat yang menggunakan mesin, terutama mobil. TKRO menekankan pada keterampilan dan pelayanan jasa mekanik kendaraan roda empat dengan tujuan untuk membekali peserta didik dengan ilmu kendaraan ringan agar mampu melaksanakan perawatan dan perbaikan komponen – komponen mobil secara mandiri, merawat dan memperbaiki mobil sesuai dengan standar yang ditentukan oleh pabrik, merawat dan memperbaiki mobil pada bengkel atau perusahaan dimana tempat ia bekerja, serta menciptakan lapangan kerja baru bagi dirinya dan orang lain.</p>
              <p>Lulusan kompetensi keahlian Teknik Kendaraan Ringan SMK Negeri 3 Surabaya dibekali dengan ilmu pengetahuan dan keterampilan dalam perawatan dan perbaikan motor otomotif, Perawatan dan perbaikan system pemindah tenaga otomotif, Perawatan dan perbaikan chasis dan suspense otomotif, Perawatan dan perbaikan system kelistrikan otomotif serta dibekali kemampuan dalam berwirausaha sesuai dengan perkembangan kebutuhan masyarakat, dunia industri.</p>
            </div>
          </div>
          <div class="col-12 col-sm p-0 pe-sm-0 order-1 order-sm-2 d-flex justify-content-center align-items-center">
            <div style="height:15rem;">
              <img src="../assets/img/TKR.png" alt="" class="h-100">
            </div>
          </div>
        </div>
      </section>
      <section class="mt-3 px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize">Kegiatan <span class="fw-bold text-uppercase">{{profilSekolah.keahlian[0].nama}}</span></div>
        <div class="row mx-0 mt-3 row-gap-3">
          <div class="col-12 col-sm p-0 ps-sm-0">
            <div style="">
              <img src="../assets/img/post-image-1635826886075.jpg" alt="" class="w-100">
            </div>
          </div>
          <div class="col-12 col-sm p-0 ps-sm-3 pe-sm-0 d-flex justify-content-center align-items-center" style="text-align: justify;">
            <div class="fs-xs2 lh-md">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam delectus, maiores facere, sit veritatis ad quisquam libero adipisci esse facilis reiciendis assumenda, id inventore officiis expedita! Molestiae, nemo. Possimus!</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquam placeat natus eaque esse iste non nostrum sequi! Facere fuga itaque consequatur et obcaecati expedita quaerat placeat aspernatur suscipit eos?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti consequatur quam ducimus cumque perferendis molestiae, pariatur itaque consequuntur culpa, provident enim quibusdam facere veniam recusandae explicabo quidem esse? Modi?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolore? Corporis quaerat nostrum dolores, repudiandae ullam velit et sapiente deserunt, ex excepturi non minima voluptatum id laudantium sint vel eum.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5 px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize">Prospek kerja <span class="fw-bold text-uppercase">{{profilSekolah.keahlian[0].nama}}</span></div>
        <div class="row mx-0 mt-3 row-gap-3">
          <div class="col-12 col-sm p-0 ps-sm-0 order-2 order-sm-1">
            <div class="fs-xs2 lh-md">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam delectus, maiores facere, sit veritatis ad quisquam libero adipisci esse facilis reiciendis assumenda, id inventore officiis expedita! Molestiae, nemo. Possimus!</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquam placeat natus eaque esse iste non nostrum sequi! Facere fuga itaque consequatur et obcaecati expedita quaerat placeat aspernatur suscipit eos?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti consequatur quam ducimus cumque perferendis molestiae, pariatur itaque consequuntur culpa, provident enim quibusdam facere veniam recusandae explicabo quidem esse? Modi?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolore? Corporis quaerat nostrum dolores, repudiandae ullam velit et sapiente deserunt, ex excepturi non minima voluptatum id laudantium sint vel eum.</p>
            </div>
          </div>
          <div class="col-12 col-sm p-0 pe-sm-0 order-1 order-sm-2 d-flex justify-content-center align-items-center" style="text-align: justify;">
            <div style="">
              <img src="../assets/img/4-min.jpg" alt="" class="w-100">
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5 px-2 px-sm-0">
        <div class="fs-3 fw-light text-capitalize">Fasilitas <span class="fw-bold text-uppercase">{{profilSekolah.keahlian[0].nama}}</span></div>
        <div class="row m-0 mt-3 row-gap-4">
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="bg-primaryku-shades-1 p-3 rounded-3">
              <p>DKV SMK Avicenna memiliki 2 Laboratorium untuk menunjang pembelajaran media komunikasi visual dan konten kreatif berbasis digital maupun konvensional.</p>
              <ul class="mb-0">
                <li>Laboratorium DKV 1 (Dasar) yang representatif untuk kebutuhan project ringan</li>
                <li>Laboratorium DKV 2 (Tingkat Lanjut) untuk kebutuhan project berat. Dengan PC Desktop & Laptop standar grafis untuk menunjang portabilitas project.</li>
                <li>Beberapa utilities lain penunjang pembelajaran di Lab DKV diantaranya terdapat : Pen Tab untuk digital sketching, Smart TV OLED 8K 65”inch untuk presentasi materi, serta utilities lainnya</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="bg-primaryku-shades-1 p-3 rounded-3">
              <p>Berfungsi sebagai sarana penunjang materi olah foto & video. Beberapa aset & fasilitas pada studio ini :</p>
              <ul class="mb-0">
                <li>Mirrorless APSC Camera</li>
                <li>Drone</li>
                <li>Lighting</li>
                <li>Backdrop</li>
                <li>Streaming Tools</li>
                <li>Wireless video transmitter</li>
                <li>Beberapa peralatan penunjang fotografi & videografi dasar.</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-4 px-0 px-sm-2">
            <div class="bg-primaryku-shades-1 p-3 rounded-3">
              <p>Laboratorium Produksi DKV SMK Avicenna berfungsi untuk meningkatkan keterampilan dan keahlian peserta didik dalam menghasilkan produk cetak DKV. Terdapat fasilitas produksi :</p>
              <ul class="mb-0">
                <li>Sablon manual, DTG & DTF untuk cetak kaos, kain dan semacamnya</li>
                <li>Beberapa tipe unit A3+ Laser Digital printing untuk kebutuhan cetak pada media kertas, seperti buku, foto, gantungan kunci dll.</li>
                <li>Mesin cetak ID Card</li>
                <li>Mesin Cutting Sticker dengan sensor Contour</li>
                <li>Beberapa alat penunjang produksi lainnya seperti mesin press, mesin jilid dan lainnya.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <tabmenu-component :menus="profilSekolah.keahlian" class="mt-5"></tabmenu-component>
    </section>
  </main>
</template>

<script setup>
import { useDatabase } from '../databases/db'
import TabmenuComponent from '../components/TabmenuComponent.vue'

const { profilSekolah } = useDatabase()
</script>

<style lang="scss" scoped>

</style>