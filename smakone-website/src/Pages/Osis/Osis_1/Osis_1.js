import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Beatrice from '../../../Image/Osis/Bidang_1/Beatrice1.webp'
import Gabriella from '../../../Image/Osis/Bidang_1/Gabriella.webp'
import William from '../../../Image/Osis/Bidang_1/wm.webp'

const OSIS_1 = () => {
  return (
    <div>
      <OsisTeam
      bidang="Bidang 1"
      desc="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
      person1={<BidangSection img={Beatrice} alt="Beatrice Valerina Djayasaputra" name="Beatrice Valerina Djayasaputra" desc="Hii everyone! Namaku Beatrice, koordinator OSIS bidang 1 😊 Life in smukie has been a journey, and joining OSIS is one of the ones I don’t regret! Tapi selain OSIS, ada banyak hal” seru lainnya yang aku ikuti, salah satunya jadi speaker sekaligus event manager di TEDxYouth@SmakOne (you can check it out on TEDx’s youtube channel or @tedxyouthsmakone on IG). Di luar sekolah, ada banyak hal lainnya juga yang aku suka, seperti binge watch series / films HEHE. Lately, aku juga lagi suka bgt sama badmin! So, if you guys have the same interests (or not) feel free to reach me out @beatrice.valerinaa on Instagram karena aku jg suka ngobrol HAHAH. *mau tanya-tanya juga boleh, would be happy to help! Salam kenal semuaa!"/>}
      person2={<BidangSection img={Gabriella} alt="Gabriella Clara Subakti" name="Gabriella Clara Subakti" desc="Hai everyone! Perkenalkan namaku Gabriella tapi biasanya dipanggil Gab. Aku berjabat sebagai anggota OSIS bidang 1. A little info about myself, aku sukaaa banget sama yang namanya knitting sama crochet. My latest project is a turtleneck vest HEHEHE. Selain itu, aku juga suka nonton TV series and lately, aku lagi suka bgt sama show Peaky Blinders nii!! So if you guys have any show recommendations, mau belajar knitting with me or simply want to talk to me, sinii yukk ngobrol😋 @gabxclara on Instagram. Oiya fun fact about me, aku tuh kebalikan Ko WM HAHAHA, aku orangnya 90% extroverted. Okay anyways, let’s be friends and welcome everyone!!"/>}
      person3={<BidangSection img={William} alt="William Matthew" name="William Matthew" desc="Halli Hallo! Aku William Matthew, biasa dipanggil WM, anggota OSIS bidang 1. Sedikit tentang aku, aku sangat suka belajar bahasa asing, dari bahasa Korea, Mandarin, Jerman, Spanyol, Jepang… semuanya aku pelajari (walaupun sebenarnya belum bisa bisa amat). Aku juga suka nari, walaupun lagi, kagak jago-jago amat. One fun fact about me is that aku introvert, dan kalau di tes MBTI aku dapetnya gak pernah kurang dari 90% Introverted. Tapi tetep harus berjuang untuk bisa bersosialisasi di SMUKI! :’) Kalau kamu juga suka belajar bahasa ataupun mau ngobrol gak jelas juga boleh banget contact aku, @williamtthw on IG. Jia you und Hwaiting in SMAK eins!"/>}
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