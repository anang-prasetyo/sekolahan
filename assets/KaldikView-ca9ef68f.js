import{g as w,i as C,o as l,c as n,a as o,n as i,F as v,r as d,f as F,t as m,h as x,b as B,j as A,k as G,e as N}from"./index-2155eb52.js";const V={class:"px-2 px-sm-0"},z=o("div",{class:"fs-3 fw-light text-capitalize"},[o("span",{class:"fw-bold text-uppercase"},"kalender"),B(" akademik 2023/2024")],-1),J={class:"p-1 py-2 d-flex gap-3"},K={key:0,class:"row m-0 row-gap-3"},U={class:"col-12 col-sm-9 px-0"},W={class:"row m-0 h-100 fs-xs2 row-gap-2"},L={class:"d-flex flex-column gap-2 py-3 border border-black h-100"},P={class:"fs-5 text-center mb-3 mb-sm-0"},R={class:"d-flex justify-content-around row m-0"},q={class:"d-flex justify-content-end row m-0"},I={class:"d-flex justify-content-around row m-0"},Q={class:"d-flex justify-content-around row m-0"},X={class:"d-flex justify-content-around row m-0"},Z={class:"d-flex row m-0"},tt={class:"d-flex row m-0"},et={class:"d-flex flex-column gap-2 py-3 border border-black h-100"},at={class:"row m-0 mb-3 text-center"},lt={class:"col-2"},nt=o("i",{class:"bi bi-caret-left-fill"},null,-1),ot=[nt],st=o("i",{class:"bi bi-caret-left-fill"},null,-1),rt=[st],ut={class:"col-8 fs-5"},it={class:"col-2"},ct=o("i",{class:"bi bi-caret-right-fill"},null,-1),ht=[ct],vt=o("i",{class:"bi bi-caret-right-fill"},null,-1),dt=[vt],yt={class:"d-flex justify-content-around row m-0"},mt={class:"d-flex justify-content-end row m-0"},pt={class:"d-flex justify-content-around row m-0"},gt={class:"d-flex justify-content-around row m-0"},wt={class:"d-flex justify-content-around row m-0"},ft={class:"d-flex row m-0"},Dt={class:"d-flex row m-0"},bt={class:"col ps-sm-3"},St={key:0,class:"fs-xs2"},_t={key:0,class:"d-flex gap-2 align-items-center border-bottom py-2"},jt={class:"d-flex flex-column"},kt={key:0,class:"text-secondary"},Gt={key:1,class:"text-secondary"},Mt={key:1,class:"py-2"},Et=o("div",null,null,-1),Ht={__name:"KaldikComponent",setup(T){const k=w(["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]),b=w(["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]),S=w(),y=w(6),_=w("ganjil"),u=w({ganjil:[],genap:[],ganjilGenap:[],mulaiHariGanjil:[],mulaiHariGenap:[],mulaiHariGanjilGenap:[]}),Y=()=>{let h=new Date().getUTCFullYear();var c=new Date().getMonth();for(let t=0;t<12;t++)t==1&&h%4==0?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),2,1).getDay()),u.value.genap.push(29)):t==1?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),2,1).getDay()),u.value.genap.push(28)):t==6?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.ganjil.push(31)):t>5&&t%2==0?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.ganjil.push(30)):t>5&&t%2!=0?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()+(t-c),1).getDay()),u.value.ganjil.push(31)):t%2==0?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.genap.push(31)):(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),new Date().getMonth()+(t-c),1).getDay()),u.value.genap.push(30));u.value.ganjilGenap=u.value.genap.concat(u.value.ganjil),u.value.mulaiHariGanjilGenap=u.value.mulaiHariGenap.concat(u.value.mulaiHariGanjil),S.value=u.value.ganjil},M=w(!1),s=w({today:null,tomorrow:null,yesterday:null,month:null,firstDayOfThisMonth:null,lastDayOfThisMonth:null,events:null}),p=w({allDates:[],allMonths:[],allColor:[],allColor2:[]}),f=w(null),g=w([{dateStart:"2023-10-08",dateEnd:"2023-10-21",dayStart:8,dayEnd:21,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Ujian Akhir Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"primary"},{dateStart:"2023-10-07",dateEnd:"2023-10-07",dayStart:7,dayEnd:7,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Hari tenang sebelum Ujian Akhir Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"danger"},{dateStart:"2023-10-28",dateEnd:"2023-10-28",dayStart:28,dayEnd:28,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Pengambilan rapor Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"warning"},{dateStart:"2023-10-24",dateEnd:"2023-10-26",dayStart:24,dayEnd:26,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Class Meeting",timeStart:"06.30",timeEnd:"09.30",color:"info"},{dateStart:"2023-11-24",dateEnd:"2023-11-26",dayStart:24,dayEnd:26,monthStart:10,monthEnd:10,yearStart:2023,yearEnd:2023,name:"Piknik",timeStart:"06.30",timeEnd:"09.30",color:"info"}]),j=h=>{var c=new Date().getMonth();h>c?s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+(h-c),1):s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()-(c-h),1),h==1?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),2,0):h>=7&&h%2==0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+0,0):h>=7&&h%2!=0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0):h%2==0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0):s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+0,0),E(h),s.value.month=h},E=h=>{p.value.allDates=[],p.value.allMonths=[],p.value.allColor=[],p.value.allColor2=[];for(let t=0;t<f.value.length;t++)if(f.value[t].monthStart==h){var c=f.value[t].dayEnd-f.value[t].dayStart;if(p.value.allDates.push(f.value[t].dayStart),p.value.allMonths.push(f.value[t].monthStart,f.value[t].monthEnd),p.value.allColor2.push(f.value[t].color),c!==0)for(let e=1;e<c+1;e++)p.value.allDates.push(f.value[t].dayStart+e),p.value.allColor2.push(f.value[t].color)}for(let t=0;t<s.value.lastDayOfThisMonth.getDate();t++){p.value.allColor.push("");for(let e=0;e<p.value.allDates.length;e++)t==p.value.allDates[e]&&p.value.allColor.splice(t-1,1,p.value.allColor2[e])}},O=(h,c)=>h.dateStart<c.dateStart?-1:h.dateStart>c.dateStart?1:0;function $(){let h=w(window.innerWidth);const c=()=>h.value=window.innerWidth;C(()=>window.addEventListener("resize",c)),A(()=>window.removeEventListener("resize",c));const t=G(()=>h.value<550?"xs":h.value>=550&&h.value<1200?"md":h.value>=1200?"lg":null),e=G(()=>h.value<550?1:h.value>=550&&h.value<1200||h.value>=1200?6:null);return{width:G(()=>h.value),type:t,jmlTampilBulan:e}}const{width:Ft,type:xt,jmlTampilBulan:H}=$();return C(()=>{f.value=g.value.sort(O),s.value.today=new Date().getDate(),s.value.tomorrow=new Date().getDate()+10,s.value.yesterday=new Date().getDate()-10,s.value.month=new Date().getMonth(),s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1),s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0),Y(),E(s.value.month),M.value=!0}),(h,c)=>(l(),n("section",V,[z,o("div",J,[o("button",{class:i(["btn rounded-0 px-2",_.value==="ganjil"?"border border-black":""]),onClick:c[0]||(c[0]=t=>(S.value=u.value.ganjil,_.value="ganjil",y.value=6))},"Semester Ganjil",2),o("button",{class:i(["btn rounded-0 text-secondary px-2",_.value==="genap"?"border border-black":""]),onClick:c[1]||(c[1]=t=>(S.value=u.value.genap,_.value="genap",y.value=0))},"Semester Genap",2)]),M.value?(l(),n("div",K,[o("div",U,[o("div",W,[(l(!0),n(v,null,d(S.value,(t,e)=>(l(),n("div",{key:e,class:i([F(H)==6?"col-4":"d-none","px-1"])},[o("div",L,[o("div",P,m(b.value[e+y.value]),1),o("div",R,[(l(),n(v,null,d(7,a=>o("div",{key:a,class:"col-1 d-flex justify-content-center text-secondary"},m(k.value[a-1].slice(0,1)),1)),64))]),o("div",q,[(l(!0),n(v,null,d(7-u.value.mulaiHariGanjil[e],a=>(l(),n("div",{key:a,class:i([a<=7?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a||r.monthStart==e+y.value&&r.dayStart<a&&a<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",I,[(l(!0),n(v,null,d(7+(7-u.value.mulaiHariGanjil[e]),a=>(l(),n("div",{key:a,class:i([a>7-u.value.mulaiHariGanjil[e]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a||r.monthStart==e+y.value&&r.dayStart<a&&a<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",Q,[(l(!0),n(v,null,d(14+(7-u.value.mulaiHariGanjil[e]),a=>(l(),n("div",{key:a,class:i([a>7+(7-u.value.mulaiHariGanjil[e])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a||r.monthStart==e+y.value&&r.dayStart<a&&a<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",X,[(l(!0),n(v,null,d(21+(7-u.value.mulaiHariGanjil[e]),a=>(l(),n("div",{key:a,class:i([a>14+(7-u.value.mulaiHariGanjil[e])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a||r.monthStart==e+y.value&&r.dayStart<a&&a<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",Z,[(l(!0),n(v,null,d(28+(7-u.value.mulaiHariGanjil[e]),a=>(l(),n("div",{key:a,class:i([a>21+(7-u.value.mulaiHariGanjil[e])&&a<=t?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a||r.monthStart==e+y.value&&r.dayStart<a&&a<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",tt,[(l(),n(v,null,d(7,a=>o("div",{key:a,class:i([a+28>28+(7-u.value.mulaiHariGanjil[e])&&a+28<=t?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([e+y.value==new Date().getMonth()&&a+28==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(a+28),3),(l(!0),n(v,null,d(g.value,(r,D)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==e+y.value&&r.dayStart==a+28||r.monthStart==e+y.value&&r.dayStart<a+28&&a+28<=r.dayEnd?"bg-"+r.color:""]),key:D,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2)),64))])])],2))),128)),o("div",{class:i([F(H)==1?"col-12":"d-none","px-1"])},[o("div",et,[o("div",at,[o("div",lt,[s.value.month==0?(l(),n("button",{key:0,class:"btn",onClick:c[2]||(c[2]=t=>j(11))},ot)):(l(),n("button",{key:1,class:"btn",onClick:c[3]||(c[3]=t=>j(s.value.month-1))},rt))]),o("div",ut,m(b.value[s.value.month]),1),o("div",it,[s.value.month==11?(l(),n("button",{key:0,class:"btn",onClick:c[4]||(c[4]=t=>j(0))},ht)):(l(),n("button",{key:1,class:"btn",onClick:c[5]||(c[5]=t=>j(s.value.month+1))},dt))])]),o("div",yt,[(l(),n(v,null,d(7,t=>o("div",{key:t,class:"col-1 d-flex justify-content-center text-secondary"},m(k.value[t-1].slice(0,1)),1)),64))]),o("div",mt,[(l(!0),n(v,null,d(7-u.value.mulaiHariGanjilGenap[s.value.month],t=>(l(),n("div",{key:t,class:i([t<=7?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t||e.monthStart==s.value.month&&e.dayStart<t&&t<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",pt,[(l(!0),n(v,null,d(7+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>7-u.value.mulaiHariGanjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t||e.monthStart==s.value.month&&e.dayStart<t&&t<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",gt,[(l(!0),n(v,null,d(14+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>7+(7-u.value.mulaiHariGanjilGenap[s.value.month])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t||e.monthStart==s.value.month&&e.dayStart<t&&t<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",wt,[(l(!0),n(v,null,d(21+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>14+(7-u.value.mulaiHariGanjilGenap[s.value.month])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t||e.monthStart==s.value.month&&e.dayStart<t&&t<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",ft,[(l(!0),n(v,null,d(28+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>21+(7-u.value.mulaiHariGanjilGenap[s.value.month])&&t<=u.value.ganjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t||e.monthStart==s.value.month&&e.dayStart<t&&t<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",Dt,[(l(),n(v,null,d(7,t=>o("div",{key:t,class:i([t+28>28+(7-u.value.mulaiHariGanjilGenap[s.value.month])&&t+28<=u.value.ganjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t+28==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},m(t+28),3),(l(!0),n(v,null,d(g.value,(e,a)=>(l(),n("div",{class:i(["rounded-circle",e.monthStart==s.value.month&&e.dayStart==t+28||e.monthStart==s.value.month&&e.dayStart<t+28&&t+28<=e.dayEnd?"bg-"+e.color:""]),key:a,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2)),64))])])],2)])]),o("div",bt,[o("div",null,"Agenda bulan "+m(b.value[s.value.month])+" 2023",1),p.value.allMonths.includes(s.value.month)?(l(),n("div",St,[(l(!0),n(v,null,d(g.value,(t,e)=>(l(),n("div",{key:e},[t.monthStart==s.value.month?(l(),n("div",_t,[o("div",{class:i("bg-"+t.color),style:{width:"1.25rem",height:"1.25rem"}},null,2),o("div",jt,[t.dayEnd-t.dayStart!==0?(l(),n("div",kt,m(t.dayStart+" - "+t.dayEnd+" "+b.value[t.monthStart]+" "+t.yearStart),1)):(l(),n("div",Gt,m(t.dayStart+" "+b.value[t.monthStart]+" "+t.yearStart),1)),o("div",null,m(t.name),1)])])):x("",!0)]))),128))])):(l(),n("div",Mt,"Tidak ada event"))])])):x("",!0),Et]))}},Ct={class:"container mt-2"},Yt={__name:"KaldikView",setup(T){return(k,b)=>(l(),n("main",null,[o("section",Ct,[N(Ht)])]))}};export{Yt as default};
