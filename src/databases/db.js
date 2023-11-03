import { ref } from "vue";

export function useDatabase() {
  const profilSekolah = ref({
    nama: 'SMK 10 NOVEMBER SUKODONO SRAGEN',
    alamat: 'Jl. Raya Sukodono-Jatitengah KM 1, Kweni, RT 14, Pantirejo, Kec. Sukodono, Kabupaten Sragen, Jawa Tengah',
    contact: {
      whatsapp: '08170610604',
      phone: '-',
      email: 'smks10novembersukodono@gmail.com',
      instagram: '@Smk10novembersukodono',
      youtube: 'SMK 10 NOVEMBER SUKODONO'
    },
    kepalaSekolah: 'S. Jadi, S.Pd., M.Pd.',
    nss: 'Proses',
    nds: 'Proses',
    nis: 'Proses',
    skPendirian: {
      nomor: 'Proses',
      tanggal: 'Proses',
      dari: 'Proses'
    },
    extrakulikuler: [
      {
        nama: 'Pramuka',
        pengertian: 'Pramuka adalah singkatan dari Praja Muda Karana, yaitu organisasi pendidikan nonformal yang bertujuan untuk membentuk karakter, kepribadian, dan keterampilan generasi muda Indonesia melalui kegiatan-kegiatan yang dilakukan di alam terbuka.',
        kegiatan: ['Penguasaan teknik-teknik dalam pramuka', 'Diberikan pemahaman tentang hidup mandiri dan bergotong royong juga saling tolong menolong'],
        ruangan: ''
      },
      {
        nama: 'PMR',
        pengertian: 'Palang Merah Remaja (disingkat PMR) adalah wadah pembinaan dan pengembangan anggota remaja PMI, yang selanjutnya disebut PMR.',
        kegiatan: ['Memberi pertolongan pertama', 'Mengadakan kegiatan sosial', 'Menggalang dana kemanusiaan', 'Mengajak siswa lain untuk menerapkan pola hidup sehat', 'Mengurus dan menjaga UKS', 'Selalu siaga terhadap bencana', 'Menjaga kesehatan lingkungan', 'Melakukan aksi sosial'],
        ruangan: ''
      },
      {
        nama: 'PKS',
        pengertian: 'Patroli Keamanan Sekolah atau dapat disingkat PKS adalah salah satu jenis kegiatan ekstrakurikuler yang umum ditemui di sekolah-sekolah di Indonesia yang dibentuk 5 Mei 1965.',
        kegiatan: ['Membantu mengatur arus lalu lintas di lingkungan sekolah maupun jalan menuju ke sekolah'],
        ruangan: ''
      },
      {
        nama: 'Olahraga',
        pengertian: 'Olahraga merupakan aktivitas fisik yang disengaja dan direncanakan mulai dari arah, tujuan, waktu, dan lokasinya.',
        kegiatan: ['Bola Volly', 'Futsal', 'Badminton', 'Dll'],
        ruangan: ''
      }
    ],
    keahlian: [
      {
        nama: 'TKRO', 
        pengertian: 'Teknik Kendaraan Ringan merupakan kompetensi keahlian dibidang Teknik Otomotif yang menekankan keahlian pada bidang penguasaan jasa perbaikan kendaraan ringan.',
        kegiatanArr: ['Perawatan kendaraan ringan', 'Perbaikan kendaraan ringan'],
        kegiatan: 'Kompetensi keahlian Teknik Kendaraan Ringan menyiapkan peserta didik untuk bekerja pada pekerjaan jasa perawatan dan perbaikan didunia usaha / industri.',
        prospekKerja: ['Menjadi Mekanik', 'Menjadi Operator Alat Berat', 'Menjadi Modifikasi Kendaraan.'],
        bengkel: true
      },
      {
        nama: 'TKJ',
        pengertian: 'Mengenal Jurusan TKJ (Teknik Komputer Jaringan) TKJ Adalah singkatan dari Teknik Komputer Jaringan. TKJ merupakan sebuah kejuruan yang mempelajari tentang cara merakit komputer, mengenal dan mempelajari komponen hardware dan software. Apa saja yang ada di dalam komputer, merakit komputer serta fokus mempelajari jaringan dasar.',
        kegiatanArr: ['Perakitan Komputer dan Peripheral', 'Perbaikan dan Perawatan Komputer dan Peripheral', 'Instalasi Sistem Operasi Harware dan Software', 'Instalasi Jaringan LAN', 'Instalasi Jaringan WAN', 'Instalasi Jaringan MAN', 'Dasar Desain Grafis', 'Pemrograman Dasar', 'Pemrograman Web'],
        kegiatan: 'Perakitan Komputer dan Peripheral, Perbaikan dan Perawatan Komputer dan Peripheral, Instalasi Sistem Operasi Harware dan Software, Instalasi Jaringan LAN (Local Area Network), Instalasi Jaringan WAN (Wide Area Network), Instalasi Jaringan MAN (Metropolitan Area Network), Dasar Desain Grafis, Pemrograman Dasar, Pemrograman Web',
        prospekKerja: ['Programmer', 'Teknisi Komputer', 'Desainer'],
        bengkel: true
      },
      {
        nama: 'TB', 
        pengertian: 'Tata Busana adalah Jurusan yang diperuntukkan bagi mereka yang ingin mengembangkan bakat dan minatnya dalam hal jahit menjahit, sampai dengan membuat produk yang berkualitas.',
        kegiatanArr: ['Membuat desain busana', 'Membuat pola pada kain', 'Merancang busana'],
        kegiatan: 'Kompetensi keahlian program studi keahlian Tata Busana yang menekankan pada bidang pembuatan busana dalam pengelolaan dan penyelenggaraan usaha busana serta mampu berkompetisi dalam mengembangkan sikap profesional dalam bidang busana.',
        prospekKerja: ['Desainer tekstil', 'pattern maker', 'fashion stylist', 'fashion illustrator', 'konsultan fashion', 'jurnalis fashion.'],
        bengkel: true
      },
      {
        nama: 'OTKP',
        pengertian: 'OTKP salah satu ilmu Manajemen yang mempunyai spesifikasi khusus dalam bidang perkantoran, artinya dalam ilmu Perkantoran dipelajari secara detail segala kebutuhan yang berkaitan dengan kegiatan perkantoran.',
        kegiatanArr: ['Merencanakan kegiatan kantor', 'Menyediakan peralatan kantor', 'Mengatur perubahan antar departemen', 'Membantu menggaji dan memecat karyawan'],
        kegiatan: 'OTKP bertanggung jawab atas merencanakan kegiatan kantor, menyediakan peralatan kantor, mengatur perubahan antar departemen, seta membantu tugas manajemen senior untuk menggaji dan memecat karyawan.',
        prospekKerja: ['Sekertaris', 'Kearsipan', 'Kantoran', 'Customer Service'],
        bengkel: true
      }
    ]
  })

  const profilYayasan = ref({
    nama: 'Lima November',
    alamat: 'Jl. Raya Tambun Tambelang, Perum. Bumi Yapenas Indah Desa Sumber Jaya, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat.',
    ketua: 'Hj. Epong Sri Mayasari, S.Pd.'
  })

  const dbGuruStaf = ref([
    {
      nama: 'S. Jadi, S.Pd., M.Pd.',
      url: 'S-Jadi',
      jabatan: 'Kepala Sekolah',
      isFoto: true
    },
    {
      nama: 'Afif Kurniawan, S.Pd., M.Pd.',
      url: 'Afif-Kurniawan',
      jabatan: 'Wakil Kepala Sekolah',
      isFoto: false
    },
    {
      nama: 'Nuryati, S.Pd., M.Pd.',
      url: 'Nuryati',
      jabatan: 'Waka. Kurikulum',
      isFoto: true
    },
    {
      nama: 'Basuki Andri Susanto, S.Pd., I.',
      url: 'Basuki-Andri-Susanto',
      jabatan: 'Waka. Kesiswaan',
      isFoto: true
    },
    {
      nama: 'Achmad Sajidan',
      url: 'Achmad-Sajidan',
      jabatan: 'Komite Sekolah',
      isFoto: false
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