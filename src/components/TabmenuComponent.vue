<template>
  <section class="mt-3 mt-sm-5">
    <div class="row m-0">
      <div v-for="m, i in menus" :key="i" class="col-3 px-1">
        <div id="tabMenuExtrakulikuler" class="btn-ku p-1 p-sm-3 text-center fw-bold" :class="i == 0 ? 'bg-primaryku-shades-2 btn-ku-active' : 'bg-primaryku-shades-1'">{{m.nama}}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  menus: Object
})
</script>

<style>

</style>