import{o as l,c as i,a,t as e,F as r,r as m,b as p,_ as k,d as h,u as f,e as d,f as u}from"./index-ff2f55de.js";import _ from"./SejarahComponent-e2c0cfb8.js";const g="/sekolahan/assets/struktur-afe02026.jpg",v="/sekolahan/assets/Gedung-Sekolah-be5d48e7.jpg",x={class:""},S=a("div",{class:"fs-3 fw-light text-capitalize px-3 px-sm-0"},[a("span",{class:"fw-bold text-uppercase"},"profil"),p(" sekolah")],-1),b={class:"row m-0 mt-2 justify-content-center row-gap-2"},y={class:"col-12 col-sm ps-sm-0"},w={class:"bg-primaryku-shades-1 p-3",style:{"min-height":"10rem"}},j={class:"list-unstyled m-0 text-secondary"},$={class:"fw-bold text-uppercase text-body"},N={class:""},V={class:"mt-3"},B={class:"row mx-0 mt-2"},q={class:"col ps-0 list-unstyled m-0"},I=a("div",null,"SK Pendirian",-1),M={class:"ps-4 mb-0"},P={class:""},Y=a("div",{class:"fs-xs"},"Nomor",-1),z={class:""},C=a("div",{class:"fs-xs"},"Tanggal",-1),D={class:""},K=a("div",{class:"fs-xs"},"Dari",-1),F={class:"col ps-4 text-capitalize m-0"},O=a("div",{class:"fs-xs"},"kompetensi keahlian",-1),T=a("div",{class:"fs-xs"},"extrakulikuler",-1),A=a("div",{class:"fs-xs"},"Nama yayasan",-1),E=a("div",{class:"fs-xs"},"Alamat",-1),G=a("div",{class:"fs-xs"},"Ketua",-1),J=a("div",{class:"col-12 col-sm pe-sm-0 d-flex justify-content-center"},[a("div",{class:"project-thumb",style:{height:"100%"}},[a("img",{src:v})])],-1),L={__name:"ProfilComponent",props:{profilSekolah:Object,profilYayasan:Object},setup(s){return(o,c)=>(l(),i("section",x,[S,a("div",b,[a("div",y,[a("div",w,[a("ul",j,[a("li",$,e(s.profilSekolah.nama),1),a("li",N,e(s.profilSekolah.alamat),1),a("li",V,"Kepala Sekolah : "+e(s.profilSekolah.kepalaSekolah),1),a("li",B,[a("ul",q,[a("li",null,"NSS : "+e(s.profilSekolah.nss),1),a("li",null,"NDS : "+e(s.profilSekolah.nds),1),a("li",null,"NIS : "+e(s.profilSekolah.nis),1),a("li",null,[I,a("ul",M,[a("li",P,[Y,a("div",null,e(s.profilSekolah.skPendirian.nomor),1)]),a("li",z,[C,a("div",null,e(s.profilSekolah.skPendirian.tanggal),1)]),a("li",D,[K,a("div",null,e(s.profilSekolah.skPendirian.dari),1)])])])]),a("ul",F,[a("li",null,[O,a("ol",null,[(l(!0),i(r,null,m(s.profilSekolah.keahlian,(t,n)=>(l(),i("li",{key:n},e(t.nama),1))),128))])]),a("li",null,[T,a("ol",null,[(l(!0),i(r,null,m(s.profilSekolah.extrakulikuler,(t,n)=>(l(),i("li",{key:n},e(t.nama),1))),128))])]),a("li",null,[A,a("div",null,e(s.profilYayasan.nama),1)]),a("li",null,[E,a("div",null,e(s.profilYayasan.alamat),1)]),a("li",null,[G,a("div",null,e(s.profilYayasan.ketua),1)])])])])])]),J])]))}},H={},Q={class:"mt-5 px-3 px-sm-0"},R=h('<div class="fs-3 fw-light text-capitalize"><span class="fw-bold text-uppercase">visi</span> &amp; <span class="fw-bold text-uppercase">misi</span></div><div class="row m-0 fs-xs2 row-gap-3 mt-2"><div class="col-12 col-sm ps-sm-0"><div>VISI Sekolah</div><blockquote class="blockquote"><q>Cerdas dalam Berfikir, Jujur dalam Bertindak dan Santun dalam Bersikap</q></blockquote></div><div class="col-12 col-sm pe-sm-0"><div>MISI Sekolah</div><ol class="mb-0 ps-3"><li>Mengembangkan sistem pendidikan yang berorientasi kepada peserta didik, agar peserta didik dapat lebih kreatif, inovatif dan mampu bereksplorasi dengan di dasarkan nilai-nilai agama.</li><li>Memotivasi peserta didik agar membekali diri dengan iman, ilmu dan amal serta ketrampilan.</li><li>Membentuk peserta didik agar memiliki keunggulan kompetitif pada aspek keberanian dan budaya santun serta jujur dalam bertindak, kemandirian bersikap dan pencapaian prestasi akademik yang unggul.</li><li>Menerapkan tradisi keunggulan agar dapat menguasai ketrampilan (skill) dan pengetahuan (knowledge) untuk mewujudkan masa depan cemerlang.</li></ol></div></div>',2),U=[R];function W(s,o,c,t,n,sa){return l(),i("section",Q,U)}const X=k(H,[["render",W]]),Z={class:"container mt-2"},aa=a("section",{class:"mt-5"},[a("div",{class:"fs-3 fw-light text-capitalize px-3 px-sm-0"},[p("struktur "),a("span",{class:"fw-bold text-uppercase"},"organisasi")]),a("div",null,[a("img",{src:g,alt:"",class:"w-100"})])],-1),ia={__name:"SekolahView",setup(s){const{profilSekolah:o,profilYayasan:c}=f();return(t,n)=>(l(),i("main",null,[a("section",Z,[d(L,{"profil-sekolah":u(o),"profil-yayasan":u(c),class:"mt-3"},null,8,["profil-sekolah","profil-yayasan"]),d(_,{id:"sejarahSekolah"}),d(X),aa])]))}};export{ia as default};