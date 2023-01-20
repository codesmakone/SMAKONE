import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Gabriella from '../../../Image/Osis/Bidang_1/Gabriella.webp'
import Kelly from '../../../Image/Osis/Bidang_1/Kelly.webp'
import Samuel from '../../../Image/Osis/Bidang_1/Samuel.webp'
import Gavi from '../../../Image/Osis/Bidang_1/Gavi.webp'

const OSIS_1 = () => {
  return (
    <div>
      <OsisTeam
      bidang="Bidang 1"
      desc="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
      person1={<BidangSection img={Gabriella} alt="Gabriella" name="Gabriella Clara Subakti" desc="Hi everyone! Perkenalkan namaku Gaby selaku koordinator OSIS bidang 1. Selain OSIS, aku juga ikut kepanitian TEDxYouth@Smakone, TOS, dan SOC. Hobi aku antara lain nonton film, dengerin music & knitting. Feel free to hit me up @gabxclara on Instagram to ask questions & get to know me better!"/>}
      person2={<BidangSection img={Kelly} alt="Kelly" name="Kelly Elizabeth Lukman" desc="Hello! Salam kenal semuanyaa, perkenalkan namaku Kelly Elizabeth Lukman, anggota OSIS bidang 1. Sedikit tentang aku, aku suka banget nyanyi! Nyanyi itu kayak salah satu cara ku untuk refreshing, tentunya selain nonton drakor dan dengerin lagu kpop. Jadi kalau kalian mau share something about singing / rekomen drakor & lagu-lagu kpop, silahkan banget hit me up through DM @kellyylukmann !! Semoga kita bisa makin kenal dan sama-sama have fun di smuki yaa, God bless!"/>}
      person3={<BidangSection img={Samuel} alt="Samuel" name="Samuel Nicholas Widjaja" desc="Haloo semuanya, salam kenal aku Samuel sebagai anggota OSIS di bidang 1. Hobi aku tuh main basket, pergi sama temen, and nonton film. Kalau kalian ada pertanyaan tentang bidang 1 ataupun kehidupan di smuki, boleh chat di ig aku @SamuelNW_2006. Thank you for reading and stay happy guys!"/>}
      person4={<BidangSection img={Gavi} alt="Gavi" name="Gavi Samohaga Marunduri" desc="Haiii guyss!! Salam kenal aku Gavi dari kelas XA6. Tahun ini aku menjabat sebagai anggota bidang 1. Walaupun proses seleksinya sengit, tapi aku bersyukur bisa masuk ke dalam bagian dari OSIS SMUKIE. Di waktu luang, aku suka main musik sambil nyanyi. Kadang aku iseng coba buat lagu sendiri, tapi hasilnya masih jauh dari kata bagus. Yang penting berkarya ya guys!! Selain itu, aku suka sama sepak bola. I love Barcelona ❤. Bagi kalian yang sama-sama decul merapat ke aku yahh. Ohhyaa aku ada satu gombalan nih.
      Tau ngak fungsinya belajar peluang di pelajaran Matematika? 
      Jadi fungsinya buat hitung kalau peluang aku dapetin kamu itu 100%
      Oke cukup desc aku sampai di sini. Have fun di SMUKIE ya guyss!!"/>}
      Description={true}
      DescBid="Bidang 1 adalah bidang yang berperan dan bertanggung jawab dalam pembinaan kegiatan keagamaan Kristen di sekolah, salah satunya melalui kegiatan kebaktian yang rutin diadakan 1x dalam sebulan yang diikuti oleh seluruh guru, karyawan, dan siswa SMAK 1. Selain itu, melalui program kerja lainnya seperti R4G, SOG, dan Bible Trivia pengurus terus berusaha untuk mendorong pertumbuhan rohani seluruh warga SMAK 1."
      Program={true}
      ProgramList={
        [
        'R4G (Radio for God) - R4G merupakan proker bidang 1 berupa pemutaran lagu rohani sesuai jadwal tertentu melalui radio sekolah dan spotify (online) [ Find out more about this program on our spotify @smukiee !]',
        'SOG (Servant of God) - Melalui SOG, dibuka kesempatan bagi siswa-siswi yang memiliki panggilan melayani dalam setiap kebaktian sebagai penatalayan (singer, WL, pemusik)',
        'Bible Trivia - Program ini bertujuan untuk memperdalam pengetahuan siswa-siswi SMAK 1 mengenai Alkitab dalam bentuk pertanyaan quiz [ Find out more about this program on our instagram stories @smukiee ! ]',
        'Sermon Recap - Menyediakan ringkasan khotbah dalam setiap kebaktian rutin',
        'Kebaktian Rutin - Siswa-siswi mendapat kesempatan untuk bersekutu bersama dan belajar Firman Tuhan melalui kebaktian rutin sehingga dapat menerapkannya dalam kehidupan sehari-hari',
        'Kebaktian Natal - Menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati Natal sekaligus menutup tahun',
        'Doa Syafaat US, UAS, UN - Memotivasi serta menguatkan siswa-siswi untuk menghadapi UAS, US, dan UN dengan berserah kepada Tuhan',
        'Kebaktian Paskah - Merayakan dan memperingati Paskah sebagai sebuah bentuk ucapan syukur atas kasih Allah'
        ]
      }
      dir="/OSIS/bidang2"
      />
    </div>
  )
}

export default OSIS_1