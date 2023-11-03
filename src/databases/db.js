import { ref } from "vue";

export function useDatabase() {
  const profilSekolah = ref({
    nama: 'SMK 10 NOVEMBER SUKODONO SRAGEN',
    alamat: 'Jl. Raya Sukodono-Jatitengah KM 1, Kweni, RT 14, Pantirejo, Kec. Sukodono, Kabupaten Sragen, Jawa Tengah',
    contact: {
      phone: '08170610604',
      email: 'smks10novembersukodono@gmail.com'
    },
    kepalaSekolah: 'S. Jadi, S.Pd., M.Pd.',
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
      nama: 'S. Jadi, S.Pd., M.Pd.',
      url: 'S-Jadi',
      jabatan: 'Kepala Sekolah',
      isFoto: true
    },
    {
      nama: 'Achmad Sajidan',
      url: '',
      jabatan: 'Komite Sekolah',
      isFoto: false
    },
    {
      nama: 'Basuki Andri Susanto, S.Pd., I.',
      url: 'Basuki-Andri-Susanto',
      jabatan: 'Waka. Kesiswaan',
      isFoto: true
    },
    {
      nama: 'Nuryati, S.Pd., M.Pd.',
      url: 'Nuryati',
      jabatan: 'Waka. Kurikulum',
      isFoto: true
    },
    {
      nama: 'Saniatul Munawaroh, S.H.',
      url: 'Saniatul-Munawaroh',
      jabatan: 'Guru Bimbingan Konseling',
      isFoto: true
    }
  ])

  const namaHari = ref(['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'])
  const namaBulan = ref(['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'])

  const dbPpdb = ref({
    timeline: [
      {
        nama: 'pembukaan pendaftaran',
        tanggalMulai: '2023-11-01T00:00:00',
        tanggalSelesai: '2023-11-01T00:01:00',
        isComplete: false
      },
      {
        nama: 'masa pendaftaran',
        tanggalMulai: '2023-11-01T00:00:00',
        tanggalSelesai: '2024-01-31T23:59:00',
        isComplete: false
      },
      {
        nama: 'seleksi',
        tanggalMulai: '2024-02-01T00:00:00',
        tanggalSelesai: '2024-02-01T23:59:00',
        isComplete: false
      },
      {
        nama: 'pengumuman',
        tanggalMulai: '2024-02-02T00:00:00',
        tanggalSelesai: '2024-02-02T23:59:00',
        isComplete: false
      },
      {
        nama: 'daftar ulang',
        tanggalMulai: '2024-02-03T00:00:00',
        tanggalSelesai: '2024-02-07T23:59:00',
        isComplete: false
      }
    ]
  })

  
  return {
    profilSekolah, profilYayasan, dbGuruStaf, dbPpdb, namaHari, namaBulan
  }
}