import { ref } from "vue";

export function useDatabase() {
  const profilSekolah = ref({
    nama: 'SMK 10 NOVEMBER SUKODONO SRAGEN',
    alamat: 'Kweni, RT 14, Pantirejo, Kec. Sukodono, Kabupaten Sragen, Jawa Tengah',
    kepalaSekolah: 'Drs. Malika, S.Pd',
    nss: 1234,
    nds: 1234,
    nis: 1234,
    skPendirian: {
      nomor: 1234,
      tanggal: '23 Oktober 2023',
      dari: 'Sana'
    },
    extrakulikuler: [
      {
        nama: 'Pramuka',
        pembina: 'Achmad',
        kegiatan: ['Kemah Adat', 'Jelajah malam', 'Estafet Tunas Kelapa'],
        ruangan: ''
      },
      {
        nama: 'PMR',
        pembina: 'Achmad',
        kegiatan: ['Mengurus UKS', 'Dana kemanusiaan dan sosial', 'Siaga saat upacara'],
        ruangan: ''
      },
      {
        nama: 'PKS',
        pembina: 'Achmad',
        kegiatan: ['Mengatur lalu lintas sekolah', 'Melakukan patroli', 'Latihan fisik dan mental'],
        ruangan: ''
      },
      {
        nama: 'Olahraga',
        pembina: 'Achmad',
        kegiatan: ['Teknik dasar', 'Latihan fisik', 'Ikut turnamen'],
        ruangan: ''
      }
    ],
    keahlian: [
      {
        nama: 'TKRO', 
      },
      {
        nama: 'TKJ',
      },
      {
        nama: 'TB', 
      },
      {
        nama: 'OTKP'
      }
    ]
  })

  const profilYayasan = ref({
    nama: 'Lima November',
    alamat: 'Jln. Berbatu',
    ketua: 'Bung Tomo'
  })

  const dbGuruStaf = ref([
    {
      nama: 'Drs. Malika, S.Pd',
      jabatan: 'Kepala Sekolah'
    },
    {
      nama: 'Rizki Hidayat',
      jabatan: 'Wakasek Kurikulum'
    },
    {
      nama: 'Wawan Situmorang',
      jabatan: 'Wakasek Kesiswaan'
    },
    {
      nama: 'Dhani Rohayati',
      jabatan: 'Kepala Tata Usaha'
    },
    {
      nama: 'Riska Rohmah',
      jabatan: 'Ketua Koperasi'
    },
    {
      nama: 'Meli Puspitasari',
      jabatan: 'Bendahara'
    },
    {
      nama: 'Suradi Utomo',
      jabatan: 'Guru Olahraga'
    },
    {
      nama: 'Gunawan Simanjuntak',
      jabatan: 'Guru Bahasa Inggris'
    },
    {
      nama: 'Suwito Mulyadi',
      jabatan: 'Staf Kurikulum'
    }
  ])

  
  return {
    profilSekolah, profilYayasan, dbGuruStaf
  }
}