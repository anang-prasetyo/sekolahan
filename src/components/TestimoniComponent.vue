<template>
  <section class="mt-5">
    <div class="d-flex gap-2 d-flex gap-2 align-items-center px-3 p-sm-0">
      <div class="fs-3 fw-light text-capitalize text-nowrap">kata <span class="fw-bold text-uppercase">alumni</span></div>
      <div class="bg-light w-100" style="height: 5px;"></div>
    </div>
    <div class="row mx-0 row-gap-4">
      <div v-for="i in 3" :key="i" class="col-12 px-0 px-sm-2 col-sm-4">
        <div class="p-3 p-sm-5 pt-4 pb-0 d-flex flex-column gap-2 align-items-center">
          <div class="bg-white rounded-circle" style="height: 5rem; width: 5rem;">
            <img src="../assets/img/2-1-300x300.png" alt="" class="h-100">
          </div>
          <div class="text-uppercase fs-5">Alumni {{i}}</div>
          <div class="text-center text-secondary">Mahasiswa Teknik Informatika UMK & Freelancer Grafis</div>
          <div class="fs-xs2 mt-3 lh-lg" style="text-align: justify;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum sed doloribus. Hic dolorem aut cum deleniti quisquam tenetur voluptatibus molestias quis? Eius ex quo maiores veniam omnis ullam qui.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>