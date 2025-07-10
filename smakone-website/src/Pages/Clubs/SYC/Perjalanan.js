import React from 'react';

import Tahun2020_2022 from "../../../Image/Clubs/SYC/2020-2022.png";
import Tahun2022_2023 from "../../../Image/Clubs/SYC/2022-2023.png";
import Tahun2023_2024 from "../../../Image/Clubs/SYC/2023-2024.png";
import Tahun2024_2025 from "../../../Image/Clubs/SYC/2024-2025.jpg";

const Perjalanan = () => {
  const perjalananData = [
    {
      image: Tahun2020_2022,
      alt: "2020-2022",
      title: "2020/2021, 2021/2022",
      content: `Pada masa COVID-19, SYC mengalami sedikit kesulitan dalam mencari anggota dan mempersiapkan acara. Dengan hanya beranggotakan sekitar 12 anggota, SYC berusaha untuk lebih terbuka dan menjangkau genre lagu yang lebih luas untuk diaransemen. Akhirnya, SYC dapat tampil sekitar 4-5 kali dalam setahun. SYC masih berjalan secara online. Saat itu, anggota SYC pada zaman COVID tersebut berkurang banyak karena adanya kesulitan untuk melaksanakan ekskul & club secara online. Selama online, setiap penampilan SYC dan klub lainnya ditampilkan dalam bentuk video yang akan ditayangkan dalam zoom saat ada acara sekolah. Setiap tampil, anggota SYC harus berlatih di rumah masing-masing, lalu merekam penampilan mereka menggunakan metronome agar bisa di-edit menjadi satu video. Prosesnya memakan lebih banyak waktu bila dibandingkan dengan tampil secara onsite.`,
    },
    {
      image: Tahun2022_2023,
      alt: "2022-2023",
      title: "2022/2023",
      content: `Pada awal tahun ajaran 2022/2023, SYC menampilkan lagu Merry Go Round untuk acara MPLS secara onsite. Sejak saat itu, jumlah SYC kembali bertambah hingga menjadi 24 anggota. Variasi instrumen pun juga mulai bertambah, seperti perkusi, cello, dan flute. Dari masa online yang hanya ada pemain biola dan piano, sekarang SYC sudah mempunyai pemain dari setiap section dalam Orchestra (Strings, Woodwind, Brass, Percussion). SYC juga meningkatkan kolaborasi dengan club-club lain di SMAK 1 seperti Crescendo dan Smukiez Choir. SYC juga mulai tampil dalam acara Smukiez Theater Night yang terbuka untuk publik. Pada tahun 2023, dua violinist SYC pun juga ada yang diterima untuk tampil dalam Orkestra Kantata Paskah Penabur. Semua ini diupayakan agar murid-murid SMAK 1 lebih mengenal dan menikmati penampilan dari SYC untuk tahun-tahun selanjutnya.`,
    },
    {
      image: Tahun2023_2024,
      alt: "2023-2024",
      title: "2023/2024",
      content: `Pada tahun ajaran selanjutnya, SYC terus berkembang dari segi jumlah, yang mencapai 45 anggota. SYC diberikan lebih banyak kesempatan untuk tampil di berbagai acara SMAK 1, seperti STN, di mana SYC tampil bersama dengan club lainnya dalam kedua sesi penampilan STN. SYC juga bermain dalam acara BazOne untuk menampilkan lagu Disney berjudul “Part of Your World” yang diawali dengan Disney Opening Theme. SYC juga tampil dalam perayaan Natal. Bahkan, SYC juga berkolaborasi dengan Cresendo untuk bermain dalam kegiatan ibadah Natal. Pada tahun 2024, anggota SYC kembali mengikuti acara Orkestra Kantata Paskah Penabur. Dalam acara ini, jumlah anggota SYC yang ikut dalam orkestra tersebut bertambah menjadi empat orang violinist.`,
    },
    {
      image: Tahun2024_2025,
      alt: "2024-2025",
      title: "2024/2025",
      content: `Pada tahun ajaran ini, jumlah SYC sudah mencapai 56 anggota. SYC pun diberikan kesempatan untuk tampil dalam kegiatan Open House. SYC pun juga ikut serta dalam acara Orkestra Penabur yang bernama “Melody in Harmony”. Orkestra tersebut diikuti oleh 1.050 musisi, penari, dan pemain drama dari berbagai sekolah Penabur dan berhasil memperoleh Rekor MURI. Variasi dan genre lagu yang dimainkan pun juga berkembang. SYC tidak lagi hanya memainkan lagu klasik dan pop, tetapi juga memainkan OST sebuah permainan yang berjudul “If I Can Stop One Heart From Breaking” dalam acara SAP 2024. Setelah beberapa waktu, SYC akhirnya memiliki section brass band yang mengalami perkembangan sangat pesat. Section brass ini pun dapat tampil dengan “Cressendo” di closing SOC 2024. SYC memiliki lingkungan nyaman untuk berkreasi dan rasa kekeluargaan serta solidaritas yang kuat. Hal itu yang bisa membuat SYC terus maju.`,
    },
  ];

  return (
    <div className="container mx-auto mt-4 px-8 md:px-16 lg:px-28 xl:px-32 pt-10 justify-center">
      <h1 className="font-bold text-3xl text-center md:text-5xl">Perjalanan SYC</h1>
      {perjalananData.map((data, index) => (
        <div className="mb-14" key={index}>
          <img
            src={data.image}
            className="object-cover h-auto sm:h-[18rem] md:h-[20rem] lg:h-[32rem] xl:h-[30rem]  mx-auto rounded-3xl my-6"
            alt={data.alt}
          />
          <h2 className="text-xl md:text-xl font-bold mb-2 xl:px-10">{data.title}</h2>
          {data.subtitle && <h3 className="text-lg md:text-xl font-semibold mb-2 xl:px-10">{data.subtitle}</h3>}
          <p className="text-lg mt-3 text-justify xl:px-10">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Perjalanan;
