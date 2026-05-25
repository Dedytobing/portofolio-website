const baseUrlImages =
  "https://res.cloudinary.com/dbpidpvyo/image/upload/v1779695123/";
  const baseUrVideos =
  "https://res.cloudinary.com/dbpidpvyo/video/upload/q_auto,f_mp4,vc_h264,ac_aac/";
const baseUrl =
  "https://raw.githubusercontent.com/Dedytobing/portofolio-website/main/public/assets";
const githubUrl = "https://github.com/Dedytobing";

const webProjects = [
  {
    image: `${baseUrlImages}Screenshot_2026-05-25_151422_qefmkx.png`,
    title: "Web Portofolio",
    description:
      "Website portofolio pribadi yang digunakan untuk menampilkan profil, pengalaman kerja, riwayat pendidikan, skill, sertifikat, serta project yang pernah dikerjakan. Dibangun dengan tampilan modern, responsive, dan interaktif menggunakan React JS dan TailwindCSS untuk memberikan pengalaman pengguna yang lebih menarik dan profesional.",
    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
    ],
    repo: `${githubUrl}/portofolio-website`,
    link: "",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_172022_ahvrpr.png`,
    title: "Web Ucapan Valentine",
    description:
      "Website interaktif bertema Valentine yang dibuat untuk memberikan pengalaman romantis dan personal kepada pengguna. Memiliki animasi, tampilan menarik, serta interaksi sederhana menggunakan HTML, CSS, dan JavaScript sehingga website terasa lebih hidup dan responsif di berbagai perangkat. :contentReference[oaicite:0]{index=0}",

    stacks: [
      `${baseUrl}/icons/html.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/javascript.svg`,
    ],
    repo: `${githubUrl}/Valentine-script`,
    link: "https://dedy-valentine-day.vercel.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_144451_rjopp4.png`,
    title: "Todo List",
    description:
      "Aplikasi Todo List sederhana berbasis React JS yang digunakan untuk mencatat aktivitas harian pengguna. Memiliki fitur menambah, menghapus, dan menandai task yang sudah selesai dengan tampilan responsive dan mudah digunakan.",

    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
    ],
    repo: `${githubUrl}/todo-skilvul`,
    link: "https://todo-skilvul.vercel.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_145404_i65qlc.png`,
    title: "BMI Calculator",
    description:
      "Aplikasi kalkulator BMI (Body Mass Index) berbasis web yang digunakan untuk menghitung indeks massa tubuh berdasarkan tinggi dan berat badan pengguna. Website dibuat dengan tampilan sederhana, responsive, dan mudah digunakan menggunakan HTML, CSS, dan JavaScript.",

    stacks: [
      `${baseUrl}/icons/html.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/javascript.svg`,
    ],
    repo: `${githubUrl}/BMI-Calculator`,
    link: "https://dedy-bmicalculator.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_175449_gfbjda.png`,
    title: "Literasikita",
    description:
      "Platform literasi digital berbasis web yang menyediakan fitur membaca buku, artikel, dan pengelolaan data pengguna secara online. Website dikembangkan menggunakan teknologi fullstack dengan integrasi database MongoDB, REST API, sistem pembayaran Midtrans, dan deployment berbasis cloud sehingga mampu memberikan pengalaman pengguna yang modern dan scalable.",

    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/mongodb.svg`,
      `${baseUrl}/icons/midtrans.svg`,
      `${baseUrl}/icons/aws.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `https://github.com/Skilvul-KM5-FS22/Final-Project-Fullstack-Web-development`,
    link: "https://literasikita.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_145648_hhvaos.png`,
    title: "Todo List V2",
    description:
      "Pengembangan lanjutan dari aplikasi Todo List dengan implementasi Redux sebagai state management untuk mengelola data task secara lebih terstruktur. Memiliki fitur filtering task, update status, dan manajemen state yang lebih optimal pada aplikasi React JS.",

    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/redux.svg`,
    ],
    repo: `${githubUrl}/website-ulangtahun`,
    link: "https://todolist-dedy.vercel.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_173949_iwckfp.png`,
    title: "Belajar Dihatiku",
    description:
      "Platform pembelajaran online berbasis web yang menyediakan sistem edukasi digital dengan tampilan modern dan interaktif. Dibangun menggunakan Next JS dan TailwindCSS serta memanfaatkan Prisma ORM dan integrasi API untuk pengelolaan data dan komunikasi backend secara efisien.",

    stacks: [
      `${baseUrl}/icons/nextjs.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/prisma.svg`,
      `${baseUrl}/icons/axios.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `https://github.com/Fullstack-collaboration/Belajar-Dihatiku`,
    link: "https://belajardihatiku.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_174631_dzk9os.png`,
    title: "PMB STIKOM Tunas Bangsa",
    description:
      "Website sistem Penerimaan Mahasiswa Baru (PMB) berbasis web yang digunakan untuk mempermudah proses pendaftaran calon mahasiswa secara online. Memiliki tampilan responsive, integrasi API, dan sistem pengelolaan data yang mendukung proses registrasi menjadi lebih efektif dan efisien.",

    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/tailwind.svg`,
      `${baseUrl}/icons/axios.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `https://github.com/Fullstack-collaboration/PMB_TunasBangsa`,
    link: "https://pmb-tunasbangsa.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_150515_cuaubn.png`,
    title: "Website Ulang Tahun",
    description:
      "Website ucapan ulang tahun interaktif dengan desain visual yang menarik dan animasi sederhana untuk memberikan pengalaman personal kepada pengguna. Dibangun menggunakan HTML, CSS, dan JavaScript dengan tampilan responsive dan user friendly.",

    stacks: [
      `${baseUrl}/icons/html.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/javascript.svg`,
    ],
    repo: `${githubUrl}/website-ulangtahun`,
    link: "https://foryola.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_180936_ezaqgy.png`,
    title: "SIMAS - Sistem Informasi Stunting",
    description:
      "Sistem informasi berbasis web yang digunakan untuk membantu pengelolaan data stunting secara digital. Website menyediakan fitur pengelolaan data, monitoring, dan visualisasi informasi untuk mendukung proses pendataan serta pemantauan kondisi stunting secara lebih efektif.",

    stacks: [
      `${baseUrl}/icons/react.svg`,
      `${baseUrl}/icons/bootstrap.svg`,
      `${baseUrl}/icons/axios.svg`,
    ],
    repo: `${githubUrl}/website-ulangtahun`,
    link: "https://foryola.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_151257_ltjcaq.png`,
    title: "Website Bucin",
    description:
      "Website hiburan bertema relationship dan romantis yang dibuat dengan tampilan sederhana namun interaktif. Menggunakan animasi dan elemen visual berbasis JavaScript untuk meningkatkan pengalaman pengguna.",

    stacks: [
      `${baseUrl}/icons/html.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/javascript.svg`,
    ],
    repo: `${githubUrl}/Bucin-part-1`,
    link: "https://dedy-yuriza.netlify.app/",
  },

  {
    image: `${baseUrlImages}Screenshot_2026-05-25_172221_tromte.png`,
    title: "Lanyard Discord",
    description:
      "Website integrasi Discord Presence menggunakan API Lanyard untuk menampilkan aktivitas Discord pengguna secara realtime. Menampilkan status online, aktivitas musik, game, dan custom presence dengan tampilan modern berbasis HTML, CSS, dan JavaScript.",

    stacks: [
      `${baseUrl}/icons/html.svg`,
      `${baseUrl}/icons/css.svg`,
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/api.svg`,
    ],
    repo: `${githubUrl}/lanyardDiscord`,
    link: "https://lanyard-discord.vercel.app/",
  },
];

const apiProjects = [
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "Literasi Kita Backend",
    description:
      "Backend service untuk platform literasi digital Literasi Kita yang berfungsi mengelola autentikasi pengguna, pengelolaan data buku, transaksi pembayaran, serta komunikasi data antara frontend dan database. Dibangun menggunakan arsitektur REST API berbasis Express JS dan MongoDB sehingga mampu menangani pengolahan data secara dinamis dan scalable. Backend ini juga mendukung integrasi payment gateway serta proses CRUD data pengguna dan konten literasi secara realtime.",
    stacks: [
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/mongodb.svg`,
      `${baseUrl}/icons/nodejs.svg`,
      `${baseUrl}/icons/api.svg`,
      `${baseUrl}/icons/swagger.svg`,
      `${baseUrl}/icons/git.svg`,
    ],
    repo: `http://github.com/Skilvul-KM5-FS22/Final-Project-Fullstack-Web-development-BackEnd`,
  },  
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "PMB Tunas Bangsa Backend",
    description:
      "Backend API untuk sistem Penerimaan Mahasiswa Baru (PMB) STIKOM Tunas Bangsa yang digunakan untuk mengelola data registrasi calon mahasiswa, autentikasi, manajemen data formulir, dan integrasi data antara frontend dan database. Dibangun menggunakan Express JS dengan Prisma ORM untuk mempermudah pengelolaan database dan query data secara efisien serta mendukung pengembangan sistem yang modular dan scalable.",
    stacks: [
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/nodejs.svg`,
      `${baseUrl}/icons/postgresql.svg`,
      `${baseUrl}/icons/api.svg`,
      `${baseUrl}/icons/git.svg`,
    ],
    repo: `https://github.com/Fullstack-collaboration/PMB_Backend`,
  },  
  {
    image: `${baseUrlImages}/images/projects/project-4.png`,
    title: "Todolist Backend",
    description:
      "Backend service untuk aplikasi Todo List yang menyediakan REST API untuk mengelola data task pengguna seperti menambah, menampilkan, mengubah, dan menghapus data todo. Project ini dibangun menggunakan Node.js dan Express.js sebagai backend framework, serta MySQL sebagai database utama untuk menyimpan data todo. API dirancang agar dapat diintegrasikan dengan frontend secara mudah dan mendukung proses pengelolaan data secara terstruktur.",
    stacks: [
      `${baseUrl}/icons/javascript.svg`,
      `${baseUrl}/icons/express.svg`,
      `${baseUrl}/icons/nodejs.svg`,
      `${baseUrl}/icons/mysql.svg`,
      `${baseUrl}/icons/api.svg`,
      `${baseUrl}/icons/git.svg`,
    ],
    repo: `https://github.com/Dedytobing/TPA5_ToDoList-with-Express`,
  },
];

const photoVideoProjects = [
  {
    type: "image",
    media: `${baseUrlImages}hqdefault_fgp7x8.avif`,
    title: "Thumbnail Youtube",
    description:
      "Project editing dan manipulasi foto menggunakan Photoshop dan Canva.",
    stacks: [
      `${baseUrl}/icons/canva.svg`,
    ],
  },
  {
    type: "image",
    media: `${baseUrlImages}gambar1_q55msp.png`,
    title: "Thumbnail Youtube",
    description:
      "Project editing dan manipulasi foto menggunakan Photoshop dan Canva.",
    stacks: [
      `${baseUrl}/icons/photoshop.svg`,
      // `${baseUrl}/icons/canva.svg`,
    ],
  },
  {
    type: "image",
    media: `${baseUrlImages}gambar2_q94ano.png`,
    title: "Thumbnail Youtube",
    description:
      "Project editing dan manipulasi foto menggunakan Photoshop dan Canva.",
    stacks: [
      `${baseUrl}/icons/photoshop.svg`,
    ],
  },

  {
    type: "video",
    media: `${baseUrVideos}S.W.A.T_oaumw5.mp4`,
    title: "Cinematic Police Fivem",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
  {
    type: "video",
    media: `${baseUrVideos}STARTING_znzt6s.mp4`,
    title: "Starting Livestream",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
  {
    type: "video",
    media: `${baseUrVideos}cinematic1_oxxz0n.mp4`,
    title: "Cinematic Love Fivem",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
  {
    type: "video",
    media: `${baseUrVideos}cinematic2_kfpyoz.mp4`,
    title: "Cinematic Love Fivem",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
  {
    type: "video",
    media: `${baseUrVideos}cinematic3_o5yqyu.mp4`,
    title: "Cinematic Love Fivem",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
  {
    type: "video",
    media: `${baseUrVideos}cinematic4_d2bwj6.mp4`,
    title: "Cinematic Love Fivem",
    description:
      "Project editing video cinematic menggunakan Alight Motion.",
    stacks: [
      `${baseUrl}/icons/alightmotion.svg`,
    ],
  },
];

export { webProjects, apiProjects, photoVideoProjects };
