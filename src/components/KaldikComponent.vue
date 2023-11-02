<template>
  <section class="px-2 px-sm-0">
    <div class="fs-3 fw-light text-capitalize pb-2"><span class="fw-bold text-uppercase">kalender</span> akademik 2023/2024</div>
    <div :class="jmlTampilBulan == 6 ? '' : 'd-none'" class="p-1 pb-2 d-flex gap-3">
      <button class="btn rounded-0 px-2" :class="pilihGanjilOrGenap === 'ganjil' ? 'border border-black' : ''" @click="isGanjilOrGenap = kalender.ganjil, pilihGanjilOrGenap = 'ganjil', toGanjilOrGenap = 6">Semester Ganjil</button>
      <button class="btn rounded-0 text-secondary px-2" :class="pilihGanjilOrGenap === 'genap' ? 'border border-black' : ''" @click="isGanjilOrGenap = kalender.genap, pilihGanjilOrGenap = 'genap', toGanjilOrGenap = 0">Semester Genap</button>
    </div>
    <!-- <h1>{{ type + ": " + width }}</h1> -->
    <div v-if="doneThisDay" class="row m-0 row-gap-3">
      <div class="col-12 col-sm-9 px-0">
        <div class="row m-0 h-100 fs-xs2 row-gap-2">
          <!-- desktop -->
          <div v-for="k, i in isGanjilOrGenap" :key="i" :class="jmlTampilBulan == 6 ? 'col-4' : 'd-none'" class="px-1">
            <div class="d-flex flex-column gap-2 py-3 border border-black h-100">
              <div class="fs-5 text-center mb-3 mb-sm-0">{{namaBulan[i+toGanjilOrGenap]}}</div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="j in 7" :key="j" class="col-1 d-flex justify-content-center text-secondary">{{namaHari[j-1].slice(0,1)}}</div>
              </div>
              <div class="d-flex justify-content-end row m-0">
                <div v-for="index in (7-kalender.mulaiHariGanjil[i])" :key="index" :class="index <= 7 ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 7+(7-kalender.mulaiHariGanjil[i])" :key="index" :class="index > (7-kalender.mulaiHariGanjil[i]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 14+(7-kalender.mulaiHariGanjil[i])" :key="index" :class="index > 7+(7-kalender.mulaiHariGanjil[i]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 21+(7-kalender.mulaiHariGanjil[i])" :key="index" :class="index > 14+(7-kalender.mulaiHariGanjil[i]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex row m-0">
                <div v-for="index in 28+(7-kalender.mulaiHariGanjil[i])" :key="index" :class="index > 21+(7-kalender.mulaiHariGanjil[i]) && index <= k ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex row m-0">
                <div v-for="index in 7" :key="index" :class="index+28 > 28+(7-kalender.mulaiHariGanjil[i]) && index+28 <= k ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="i+toGanjilOrGenap == (new Date().getMonth()) && (index+28) == new Date().getDate() ? 'bg-primaryku-shades-2' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index+28}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == i+toGanjilOrGenap && de.dayStart == index+28 ? 'bg-'+de.color : de.monthStart == i+toGanjilOrGenap && de.dayStart < index+28 && index+28 <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 5px; width: 5px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- mobile -->
          <div :class="jmlTampilBulan == 1 ? 'col-12' : 'd-none'" class="px-1">
            <div class="d-flex flex-column gap-2 py-3 border border-black h-100">
              <div class="row m-0 mb-3 text-center">
                <div class="col-2">
                  <button v-if="thisDay.month == 0" class="btn" @click="changeMonth(11)"><i class="bi bi-caret-left-fill"></i></button>
                  <button v-else class="btn" @click="changeMonth(thisDay.month-1)"><i class="bi bi-caret-left-fill"></i></button>
                </div>
                <div class="col-8 fs-5">{{namaBulan[thisDay.month]}}</div>
                <div class="col-2">
                  <button v-if="thisDay.month == 11" class="btn" @click="changeMonth(0)"><i class="bi bi-caret-right-fill"></i></button>
                  <button v-else class="btn" @click="changeMonth(thisDay.month+1)"><i class="bi bi-caret-right-fill"></i></button>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="j in 7" :key="j" class="col-1 d-flex justify-content-center text-secondary">{{namaHari[j-1].slice(0,1)}}</div>
              </div>
              <div class="d-flex justify-content-end row m-0">
                <div v-for="index in (7-kalender.mulaiHariGanjilGenap[thisDay.month])" :key="index" :class="index <= 7 ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 7+(7-kalender.mulaiHariGanjilGenap[thisDay.month])" :key="index" :class="index > (7-kalender.mulaiHariGanjilGenap[thisDay.month]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 14+(7-kalender.mulaiHariGanjilGenap[thisDay.month])" :key="index" :class="index > 7+(7-kalender.mulaiHariGanjilGenap[thisDay.month]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex justify-content-around row m-0">
                <div v-for="index in 21+(7-kalender.mulaiHariGanjilGenap[thisDay.month])" :key="index" :class="index > 14+(7-kalender.mulaiHariGanjilGenap[thisDay.month]) ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex row m-0">
                <div v-for="index in 28+(7-kalender.mulaiHariGanjilGenap[thisDay.month])" :key="index" :class="index > 21+(7-kalender.mulaiHariGanjilGenap[thisDay.month]) && index <= kalender.ganjilGenap[thisDay.month] ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index && index <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
              <div class="d-flex row m-0">
                <div v-for="index in 7" :key="index" :class="index+28 > 28+(7-kalender.mulaiHariGanjilGenap[thisDay.month]) && index+28 <= kalender.ganjilGenap[thisDay.month] ? '' : 'd-none'" class="col-1 d-flex justify-content-center p-0" style="width: calc(100% / 7); position: relative;">
                  <span :class="thisDay.month == new Date().getMonth() && (index+28) == new Date().getDate() ? 'bg-primaryku-shades-1 border' : ''" class="d-flex w-100 justify-content-center py-3 py-sm-0">{{index+28}}</span>
                  <div class="rounded-circle" v-for="de, dei in dbEvents" :key="dei" :class="de.monthStart == thisDay.month && de.dayStart == index+28 ? 'bg-'+de.color : de.monthStart == thisDay.month && de.dayStart < index+28 && index+28 <= de.dayEnd ? 'bg-'+de.color : ''" style="height: 10px; width: 10px; position: absolute; top: 15%; right: 15%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col ps-sm-3">
        <div>Agenda bulan {{namaBulan[thisDay.month]}} 2023</div>
        <div v-if="allEvents.allMonths.includes(thisDay.month)" class="fs-xs2">
          <div v-for="de, i in dbEvents" :key="i">
            <div v-if="de.monthStart == thisDay.month" class="d-flex gap-2 align-items-center border-bottom py-2">
              <div :class="'bg-'+de.color" style="width: 1.25rem; height: 1.25rem;"></div>
              <div class="d-flex flex-column">
                <div v-if="de.dayEnd - de.dayStart !== 0" class="text-secondary">{{de.dayStart + ' - ' + de.dayEnd + ' ' + namaBulan[de.monthStart] + ' ' + de.yearStart}}</div>
                <div v-else class="text-secondary">{{de.dayStart + ' ' + namaBulan[de.monthStart] + ' ' + de.yearStart}}</div>
                <div>{{de.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="py-2">Tidak ada event</div>
      </div>
    </div>

    <div>
      <!-- <div>kalender : {{kalender}}</div> -->
      <!-- <div>thisDay : {{thisDay}}</div> -->
      <!-- <div>allEvents : {{allEvents}}</div> -->
    </div>

  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useDatabase } from "../databases/db"
import { useBreakpoints } from '../databases/fungsi'

const {namaHari,namaBulan} = useDatabase()

const isGanjilOrGenap = ref()
const toGanjilOrGenap = ref(6)
const pilihGanjilOrGenap = ref('ganjil')
const kalender = ref({
  ganjil: [],
  genap: [],
  ganjilGenap: [],
  mulaiHariGanjil: [],
  mulaiHariGenap: [],
  mulaiHariGanjilGenap: []
})
const isiKalender = () => {
  let tahun = new Date().getUTCFullYear()
  var prevMonth = new Date().getMonth()
  for (let a=0; a<12; a++){
    //// 0 -> bulan ini
    // kalender.value.mulaiHariGenap.push((new Date(new Date().getFullYear(), new Date().getMonth() - 0, 1)).getDay())
    a==1 && tahun % 4 == 0 ?
    [kalender.value.mulaiHariGenap.push((new Date(new Date().getFullYear(), 2, 1)).getDay()), kalender.value.genap.push(29)] :
    a==1 ? 
    [kalender.value.mulaiHariGenap.push((new Date(new Date().getFullYear(), 2, 1)).getDay()), kalender.value.genap.push(28)] :
    a==6 ?
    [kalender.value.mulaiHariGanjil.push((new Date(new Date().getFullYear(), new Date().getMonth() - (prevMonth - a), 1)).getDay()), kalender.value.ganjil.push(31)] :
    a>5 && a%2 == 0 ?
    [kalender.value.mulaiHariGanjil.push((new Date(new Date().getFullYear(), new Date().getMonth() - (prevMonth - a), 1)).getDay()), kalender.value.ganjil.push(30)] :
    a>5 && a%2 != 0 ?
    [kalender.value.mulaiHariGanjil.push((new Date(new Date().getFullYear(), new Date().getMonth() + (a-prevMonth), 1)).getDay()), kalender.value.ganjil.push(31)] :
    a%2 == 0 ?
    [kalender.value.mulaiHariGenap.push((new Date(new Date().getFullYear(), new Date().getMonth() - (prevMonth - a), 1)).getDay()), kalender.value.genap.push(31)] :
    [kalender.value.mulaiHariGenap.push((new Date(new Date().getFullYear(), new Date().getMonth() + (a-prevMonth), 1)).getDay()), kalender.value.genap.push(30)]
  }
  kalender.value.ganjilGenap = kalender.value.genap.concat(kalender.value.ganjil);
  kalender.value.mulaiHariGanjilGenap = kalender.value.mulaiHariGenap.concat(kalender.value.mulaiHariGanjil);
  isGanjilOrGenap.value = kalender.value.ganjil
}
const doneThisDay = ref(false)
const thisDay = ref({
  today: null,
  tomorrow: null,
  yesterday: null,
  month: null,
  firstDayOfThisMonth: null,
  lastDayOfThisMonth: null,
  events: null
})

const allEvents = ref({
  allDates: [],
  allMonths: [],
  allColor: [],
  allColor2: []
})
const dbEventsSorted = ref(null)
const dbEvents = ref([
  {
    dateStart: '2023-10-08',
    dateEnd: '2023-10-21',
    dayStart: 8,
    dayEnd: 21,
    monthStart: 9,
    monthEnd: 9,
    yearStart: 2023,
    yearEnd: 2023,
    name: 'Ujian Akhir Semester Ganjil 2023/2024',
    timeStart: '06.30',
    timeEnd: '09.30',
    color: 'primary'
  },
  {
    dateStart: '2023-10-07',
    dateEnd: '2023-10-07',
    dayStart: 7,
    dayEnd: 7,
    monthStart: 9,
    monthEnd: 9,
    yearStart: 2023,
    yearEnd: 2023,
    name: 'Hari tenang sebelum Ujian Akhir Semester Ganjil 2023/2024',
    timeStart: '06.30',
    timeEnd: '09.30',
    color: 'danger'
  },
  {
    dateStart: '2023-10-28',
    dateEnd: '2023-10-28',
    dayStart: 28,
    dayEnd: 28,
    monthStart: 9,
    monthEnd: 9,
    yearStart: 2023,
    yearEnd: 2023,
    name: 'Pengambilan rapor Semester Ganjil 2023/2024',
    timeStart: '06.30',
    timeEnd: '09.30',
    color: 'warning'
  },
  {
    dateStart: '2023-10-24',
    dateEnd: '2023-10-26',
    dayStart: 24,
    dayEnd: 26,
    monthStart: 9,
    monthEnd: 9,
    yearStart: 2023,
    yearEnd: 2023,
    name: 'Class Meeting',
    timeStart: '06.30',
    timeEnd: '09.30',
    color: 'info'
  },
  {
    dateStart: '2023-11-24',
    dateEnd: '2023-11-26',
    dayStart: 24,
    dayEnd: 26,
    monthStart: 10,
    monthEnd: 10,
    yearStart: 2023,
    yearEnd: 2023,
    name: 'Piknik',
    timeStart: '06.30',
    timeEnd: '09.30',
    color: 'info'
  }
])
const changeMonth = (a) => {
  var prevMonth = new Date().getMonth()
  a > prevMonth ?
  thisDay.value.firstDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + (a-prevMonth), 1) :
  thisDay.value.firstDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() - (prevMonth - a), 1)

  a==1 ?
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), 2, 0) :
  a>=7 && a%2 == 0 ?
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 0, 0) :
  a>=7 && a%2 != 0 ?
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) :
  a%2 == 0 ?
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) :
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 0, 0)
  
  filterEvent(a)
  thisDay.value.month = a
}
const filterEvent = (n) => {
  allEvents.value.allDates = []
  allEvents.value.allMonths = []
  allEvents.value.allColor = []
  allEvents.value.allColor2 = []
  for (let a=0; a<dbEventsSorted.value.length; a++){
    if (dbEventsSorted.value[a].monthStart == n){
      var _duration = dbEventsSorted.value[a].dayEnd - dbEventsSorted.value[a].dayStart
      allEvents.value.allDates.push(dbEventsSorted.value[a].dayStart)
      allEvents.value.allMonths.push(dbEventsSorted.value[a].monthStart, dbEventsSorted.value[a].monthEnd)
      allEvents.value.allColor2.push(dbEventsSorted.value[a].color)
      if (_duration !== 0){
        for (let b=1; b<_duration+1; b++){
          allEvents.value.allDates.push(dbEventsSorted.value[a].dayStart+b)
          allEvents.value.allColor2.push(dbEventsSorted.value[a].color)
        }
      }
    }
  }
  for (let c=0; c<thisDay.value.lastDayOfThisMonth.getDate(); c++){
    allEvents.value.allColor.push('')
    for (let d=0; d<allEvents.value.allDates.length; d++){
      if (c == allEvents.value.allDates[d]){
        allEvents.value.allColor.splice(c-1,1,allEvents.value.allColor2[d])
      }
    }
  }
}
const compare = ( a, b ) => {
  if ( a.dateStart < b.dateStart ){
    return -1;
  }
  if ( a.dateStart > b.dateStart ){
    return 1;
  }
  return 0;
}


const { width, type, jmlTampilBulan } = useBreakpoints()

onMounted(() => {
  dbEventsSorted.value = dbEvents.value.sort(compare)
  thisDay.value.today = new Date().getDate()
  thisDay.value.tomorrow = new Date().getDate()+10
  thisDay.value.yesterday = new Date().getDate()-10
  thisDay.value.month = new Date().getMonth()
  thisDay.value.firstDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  thisDay.value.lastDayOfThisMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  isiKalender()
  filterEvent(thisDay.value.month)
  doneThisDay.value = true
})
</script>

<style>

</style>