import{u as Y,g as b,l as O,i as $,o as l,c as n,a as o,n as i,f as D,F as h,r as v,t as y,h as C,b as B,e as V}from"./index-9c4d8a18.js";const N={class:"px-2 px-sm-0"},A=o("div",{class:"fs-3 fw-light text-capitalize pb-2"},[o("span",{class:"fw-bold text-uppercase"},"kalender"),B(" akademik 2023/2024")],-1),K={key:0,class:"row m-0 row-gap-3"},U={class:"col-12 col-sm-9 px-0"},z={class:"row m-0 h-100 fs-xs2 row-gap-2"},P={class:"d-flex flex-column gap-2 py-3 border border-black h-100"},L={class:"fs-5 text-center mb-3 mb-sm-0"},q={class:"d-flex justify-content-around row m-0"},I={class:"d-flex justify-content-end row m-0"},J={class:"d-flex justify-content-around row m-0"},Q={class:"d-flex justify-content-around row m-0"},R={class:"d-flex justify-content-around row m-0"},W={class:"d-flex row m-0"},X={class:"d-flex row m-0"},Z={class:"d-flex flex-column gap-2 py-3 border border-black h-100"},tt={class:"row m-0 mb-3 text-center"},at={class:"col-2"},et=o("i",{class:"bi bi-caret-left-fill"},null,-1),lt=[et],nt=o("i",{class:"bi bi-caret-left-fill"},null,-1),ot=[nt],st={class:"col-8 fs-5"},rt={class:"col-2"},ut=o("i",{class:"bi bi-caret-right-fill"},null,-1),it=[ut],ct=o("i",{class:"bi bi-caret-right-fill"},null,-1),ht=[ct],vt={class:"d-flex justify-content-around row m-0"},dt={class:"d-flex justify-content-end row m-0"},yt={class:"d-flex justify-content-around row m-0"},pt={class:"d-flex justify-content-around row m-0"},mt={class:"d-flex justify-content-around row m-0"},gt={class:"d-flex row m-0"},wt={class:"d-flex row m-0"},ft={class:"col ps-sm-3"},Dt={key:0,class:"fs-xs2"},bt={key:0,class:"d-flex gap-2 align-items-center border-bottom py-2"},St={class:"d-flex flex-column"},_t={key:0,class:"text-secondary"},jt={key:1,class:"text-secondary"},kt={key:1,class:"py-2"},Gt=o("div",null,null,-1),Mt={__name:"KaldikComponent",setup(F){const{namaHari:G,namaBulan:S}=Y(),_=b(),d=b(6),j=b("ganjil"),u=b({ganjil:[],genap:[],ganjilGenap:[],mulaiHariGanjil:[],mulaiHariGenap:[],mulaiHariGanjilGenap:[]}),x=()=>{let p=new Date().getUTCFullYear();var c=new Date().getMonth();for(let t=0;t<12;t++)t==1&&p%4==0?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),2,1).getDay()),u.value.genap.push(29)):t==1?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),2,1).getDay()),u.value.genap.push(28)):t==6?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.ganjil.push(31)):t>5&&t%2==0?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.ganjil.push(30)):t>5&&t%2!=0?(u.value.mulaiHariGanjil.push(new Date(new Date().getFullYear(),new Date().getMonth()+(t-c),1).getDay()),u.value.ganjil.push(31)):t%2==0?(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),new Date().getMonth()-(c-t),1).getDay()),u.value.genap.push(31)):(u.value.mulaiHariGenap.push(new Date(new Date().getFullYear(),new Date().getMonth()+(t-c),1).getDay()),u.value.genap.push(30));u.value.ganjilGenap=u.value.genap.concat(u.value.ganjil),u.value.mulaiHariGanjilGenap=u.value.mulaiHariGenap.concat(u.value.mulaiHariGanjil),_.value=u.value.ganjil},E=b(!1),s=b({today:null,tomorrow:null,yesterday:null,month:null,firstDayOfThisMonth:null,lastDayOfThisMonth:null,events:null}),m=b({allDates:[],allMonths:[],allColor:[],allColor2:[]}),w=b(null),g=b([{dateStart:"2023-10-08",dateEnd:"2023-10-21",dayStart:8,dayEnd:21,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Ujian Akhir Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"primary"},{dateStart:"2023-10-07",dateEnd:"2023-10-07",dayStart:7,dayEnd:7,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Hari tenang sebelum Ujian Akhir Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"danger"},{dateStart:"2023-10-28",dateEnd:"2023-10-28",dayStart:28,dayEnd:28,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Pengambilan rapor Semester Ganjil 2023/2024",timeStart:"06.30",timeEnd:"09.30",color:"warning"},{dateStart:"2023-10-24",dateEnd:"2023-10-26",dayStart:24,dayEnd:26,monthStart:9,monthEnd:9,yearStart:2023,yearEnd:2023,name:"Class Meeting",timeStart:"06.30",timeEnd:"09.30",color:"info"},{dateStart:"2023-11-24",dateEnd:"2023-11-26",dayStart:24,dayEnd:26,monthStart:10,monthEnd:10,yearStart:2023,yearEnd:2023,name:"Piknik",timeStart:"06.30",timeEnd:"09.30",color:"info"}]),k=p=>{var c=new Date().getMonth();p>c?s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+(p-c),1):s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()-(c-p),1),p==1?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),2,0):p>=7&&p%2==0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+0,0):p>=7&&p%2!=0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0):p%2==0?s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0):s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+0,0),H(p),s.value.month=p},H=p=>{m.value.allDates=[],m.value.allMonths=[],m.value.allColor=[],m.value.allColor2=[];for(let t=0;t<w.value.length;t++)if(w.value[t].monthStart==p){var c=w.value[t].dayEnd-w.value[t].dayStart;if(m.value.allDates.push(w.value[t].dayStart),m.value.allMonths.push(w.value[t].monthStart,w.value[t].monthEnd),m.value.allColor2.push(w.value[t].color),c!==0)for(let a=1;a<c+1;a++)m.value.allDates.push(w.value[t].dayStart+a),m.value.allColor2.push(w.value[t].color)}for(let t=0;t<s.value.lastDayOfThisMonth.getDate();t++){m.value.allColor.push("");for(let a=0;a<m.value.allDates.length;a++)t==m.value.allDates[a]&&m.value.allColor.splice(t-1,1,m.value.allColor2[a])}},T=(p,c)=>p.dateStart<c.dateStart?-1:p.dateStart>c.dateStart?1:0,{width:Ht,type:Ct,jmlTampilBulan:M}=O();return $(()=>{w.value=g.value.sort(T),s.value.today=new Date().getDate(),s.value.tomorrow=new Date().getDate()+10,s.value.yesterday=new Date().getDate()-10,s.value.month=new Date().getMonth(),s.value.firstDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1),s.value.lastDayOfThisMonth=new Date(new Date().getFullYear(),new Date().getMonth()+1,0),x(),H(s.value.month),E.value=!0}),(p,c)=>(l(),n("section",N,[A,o("div",{class:i([D(M)==6?"":"d-none","p-1 pb-2 d-flex gap-3"])},[o("button",{class:i(["btn rounded-0 px-2",j.value==="ganjil"?"border border-black":""]),onClick:c[0]||(c[0]=t=>(_.value=u.value.ganjil,j.value="ganjil",d.value=6))},"Semester Ganjil",2),o("button",{class:i(["btn rounded-0 text-secondary px-2",j.value==="genap"?"border border-black":""]),onClick:c[1]||(c[1]=t=>(_.value=u.value.genap,j.value="genap",d.value=0))},"Semester Genap",2)],2),E.value?(l(),n("div",K,[o("div",U,[o("div",z,[(l(!0),n(h,null,v(_.value,(t,a)=>(l(),n("div",{key:a,class:i([D(M)==6?"col-4":"d-none","px-1"])},[o("div",P,[o("div",L,y(D(S)[a+d.value]),1),o("div",q,[(l(),n(h,null,v(7,e=>o("div",{key:e,class:"col-1 d-flex justify-content-center text-secondary"},y(D(G)[e-1].slice(0,1)),1)),64))]),o("div",I,[(l(!0),n(h,null,v(7-u.value.mulaiHariGanjil[a],e=>(l(),n("div",{key:e,class:i([e<=7?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e||r.monthStart==a+d.value&&r.dayStart<e&&e<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",J,[(l(!0),n(h,null,v(7+(7-u.value.mulaiHariGanjil[a]),e=>(l(),n("div",{key:e,class:i([e>7-u.value.mulaiHariGanjil[a]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e||r.monthStart==a+d.value&&r.dayStart<e&&e<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",Q,[(l(!0),n(h,null,v(14+(7-u.value.mulaiHariGanjil[a]),e=>(l(),n("div",{key:e,class:i([e>7+(7-u.value.mulaiHariGanjil[a])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e||r.monthStart==a+d.value&&r.dayStart<e&&e<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",R,[(l(!0),n(h,null,v(21+(7-u.value.mulaiHariGanjil[a]),e=>(l(),n("div",{key:e,class:i([e>14+(7-u.value.mulaiHariGanjil[a])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e||r.monthStart==a+d.value&&r.dayStart<e&&e<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",W,[(l(!0),n(h,null,v(28+(7-u.value.mulaiHariGanjil[a]),e=>(l(),n("div",{key:e,class:i([e>21+(7-u.value.mulaiHariGanjil[a])&&e<=t?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e||r.monthStart==a+d.value&&r.dayStart<e&&e<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",X,[(l(),n(h,null,v(7,e=>o("div",{key:e,class:i([e+28>28+(7-u.value.mulaiHariGanjil[a])&&e+28<=t?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([a+d.value==new Date().getMonth()&&e+28==new Date().getDate()?"bg-primaryku-shades-2":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(e+28),3),(l(!0),n(h,null,v(g.value,(r,f)=>(l(),n("div",{class:i(["rounded-circle",r.monthStart==a+d.value&&r.dayStart==e+28||r.monthStart==a+d.value&&r.dayStart<e+28&&e+28<=r.dayEnd?"bg-"+r.color:""]),key:f,style:{height:"5px",width:"5px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2)),64))])])],2))),128)),o("div",{class:i([D(M)==1?"col-12":"d-none","px-1"])},[o("div",Z,[o("div",tt,[o("div",at,[s.value.month==0?(l(),n("button",{key:0,class:"btn",onClick:c[2]||(c[2]=t=>k(11))},lt)):(l(),n("button",{key:1,class:"btn",onClick:c[3]||(c[3]=t=>k(s.value.month-1))},ot))]),o("div",st,y(D(S)[s.value.month]),1),o("div",rt,[s.value.month==11?(l(),n("button",{key:0,class:"btn",onClick:c[4]||(c[4]=t=>k(0))},it)):(l(),n("button",{key:1,class:"btn",onClick:c[5]||(c[5]=t=>k(s.value.month+1))},ht))])]),o("div",vt,[(l(),n(h,null,v(7,t=>o("div",{key:t,class:"col-1 d-flex justify-content-center text-secondary"},y(D(G)[t-1].slice(0,1)),1)),64))]),o("div",dt,[(l(!0),n(h,null,v(7-u.value.mulaiHariGanjilGenap[s.value.month],t=>(l(),n("div",{key:t,class:i([t<=7?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t||a.monthStart==s.value.month&&a.dayStart<t&&t<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",yt,[(l(!0),n(h,null,v(7+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>7-u.value.mulaiHariGanjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t||a.monthStart==s.value.month&&a.dayStart<t&&t<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",pt,[(l(!0),n(h,null,v(14+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>7+(7-u.value.mulaiHariGanjilGenap[s.value.month])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t||a.monthStart==s.value.month&&a.dayStart<t&&t<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",mt,[(l(!0),n(h,null,v(21+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>14+(7-u.value.mulaiHariGanjilGenap[s.value.month])?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t||a.monthStart==s.value.month&&a.dayStart<t&&t<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",gt,[(l(!0),n(h,null,v(28+(7-u.value.mulaiHariGanjilGenap[s.value.month]),t=>(l(),n("div",{key:t,class:i([t>21+(7-u.value.mulaiHariGanjilGenap[s.value.month])&&t<=u.value.ganjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t||a.monthStart==s.value.month&&a.dayStart<t&&t<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2))),128))]),o("div",wt,[(l(),n(h,null,v(7,t=>o("div",{key:t,class:i([t+28>28+(7-u.value.mulaiHariGanjilGenap[s.value.month])&&t+28<=u.value.ganjilGenap[s.value.month]?"":"d-none","col-1 d-flex justify-content-center p-0"]),style:{width:"calc(100% / 7)",position:"relative"}},[o("span",{class:i([s.value.month==new Date().getMonth()&&t+28==new Date().getDate()?"bg-primaryku-shades-1 border":"","d-flex w-100 justify-content-center py-3 py-sm-0"])},y(t+28),3),(l(!0),n(h,null,v(g.value,(a,e)=>(l(),n("div",{class:i(["rounded-circle",a.monthStart==s.value.month&&a.dayStart==t+28||a.monthStart==s.value.month&&a.dayStart<t+28&&t+28<=a.dayEnd?"bg-"+a.color:""]),key:e,style:{height:"10px",width:"10px",position:"absolute",top:"15%",right:"15%"}},null,2))),128))],2)),64))])])],2)])]),o("div",ft,[o("div",null,"Agenda bulan "+y(D(S)[s.value.month])+" 2023",1),m.value.allMonths.includes(s.value.month)?(l(),n("div",Dt,[(l(!0),n(h,null,v(g.value,(t,a)=>(l(),n("div",{key:a},[t.monthStart==s.value.month?(l(),n("div",bt,[o("div",{class:i("bg-"+t.color),style:{width:"1.25rem",height:"1.25rem"}},null,2),o("div",St,[t.dayEnd-t.dayStart!==0?(l(),n("div",_t,y(t.dayStart+" - "+t.dayEnd+" "+D(S)[t.monthStart]+" "+t.yearStart),1)):(l(),n("div",jt,y(t.dayStart+" "+D(S)[t.monthStart]+" "+t.yearStart),1)),o("div",null,y(t.name),1)])])):C("",!0)]))),128))])):(l(),n("div",kt,"Tidak ada event"))])])):C("",!0),Gt]))}},Et={class:"container mt-2"},xt={__name:"KaldikView",setup(F){return(G,S)=>(l(),n("main",null,[o("section",Et,[V(Mt)])]))}};export{xt as default};