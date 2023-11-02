import { computed, onMounted, onUnmounted, ref } from "vue";

export function useBreakpoints() {
  let windowWidth = ref(window.innerWidth)
  
  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 550) return 'xs'
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
    if (windowWidth.value >= 1200) return 'lg'
    return null; // This is an unreachable line, simply to keep eslint happy.
  })
  
  const jmlTampilBulan = computed(() => {
    if (windowWidth.value < 550) return 1
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return 6
    if (windowWidth.value >= 1200) return 6
    return null; // This is an unreachable line, simply to keep eslint happy.
  })

  const width = computed(() => windowWidth.value)

  return { width, type, jmlTampilBulan }
}

export function konversiDate(){
  function tahun(a){
    return new Date(a).getFullYear()
  }
  function bulan(a){
    return new Date(a).getMonth()
  }
  function hari(a){
    return new Date(a).getDate()
  }
  function jam(a){
    return new Date(a).getHours()
  }
  function menit(a){
    return new Date(a).getMinutes()
  }
  function detik(a){
    return new Date(a).getSeconds()
  }

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var oneDay = 1000 * 60 * 60 * 24;
  // var diff = now - start;
  // var day = Math.floor(diff / oneDay);
  function _day(a){
    return Math.floor((a - start) / oneDay)
  }
  function _jam(a){
    return (jam(a) * 3600) + (menit(a) * 60) + (detik(a))
  }

  function compare(a,b){
    if ( a.tanggalMulai < b.tanggalMulai ){
      return -1;
    }
    if ( a.tanggalMulai > b.tanggalMulai ){
      return 1;
    }
    return 0;
  }

  return { tahun, bulan, hari, jam, menit, detik, _day, _jam, compare }
}