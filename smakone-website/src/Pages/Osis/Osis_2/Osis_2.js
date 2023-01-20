import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Eileen from '../../../Image/Osis/Bidang_2/Eileen.webp'
import Nicole from '../../../Image/Osis/Bidang_2/Nicole.webp'
import Louisa from '../../../Image/Osis/Bidang_2/Louisa.webp'

const OSIS_2 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 2"
        desc="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"
        person1={<BidangSection img={Eileen} alt="Eileen" name="Eileen Elton" desc="Hiii guys,,,, nama aku Eileen Elton, panggil aja eileen/leen boleh. Nah ini tuh facts about me gituu yaaa. Ok jadi yang pertama itu musik…. Spotify aku pasti nyala terus beneran :| tapiii playlist-playlistnya pasti aku hide :)) karena i wanna gatekeep my musics hehe. Trus ehm other than music paling ya main sih… main apa aja deh atau ga paling nonton… i am open with any genre possible soo kalo bagus ya bagus gitu. Finally, kalau kalian mau tanya-tanya tentang apaa aja atau ngobrol, chat aja ya line aku or my instagram @eileeneltonn. I’ll try my best to answer it. Udah gitu,,,, salam kenal :))(("/>}
        person2={<BidangSection img={Nicole} alt="Nicole" name="Nicole Edline Simon" desc="Haii semuanya !! Namaku Nicole Edline Simon, biasa dipanggil nic. Aku saat ini ada di kelas 10 MIPA. Kalau lagi ga sibuk aku suka banget binge watch series netflix atau main piano. Series favorite aku pasti yang ada romance-dramanya, tapi tenang aku ga banyak drama kok. Fun fact tentang aku adalah aku suka banget travelling sayangnya karena pandemi jadi di rumah aja T-T. Lastly kalo kalian ada pertanyaan tentang smukie atau kayak pengen ngobrol aja feel free buat contact aku lewat instagram @coleedline_ atau add line aku ya. Salam kenal semuaa!!"/>}
        person3={<BidangSection img={Louisa} alt="Louisa" name="Louisa Richelle	" desc="Haii everyone!! Nama aku Louisa, biasa dipanggil Sasa, dan sekarang aku ada di kelas 10 MIPA. Di waktu luang aku suka banget nonton kdrama atau dengerin lagu. Aku paling sering dengerin lagu galau, tapi tenang aku anti galau club. Kalo kalian punya recommend kdrama/lagu yang kalian suka atau mau kenalan dan ngobrol boleh banget dm aku @louisarichelle. Salam kenal semuanyaaa!!"/>}
        Description={true}
        DescBid="OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS"
        Program={true}
        ProgramList={
          [
            'Voice of Smakone, adalah sebuah program yang menyalurkan berbagai pandangan dari warga sekolah SMAK 1 BPK PENABUR.',
            'Spread the Word adalah program dimana anggota osis menyebarkan motivasi melalui media sosial instagram dan biasanya akan disebarkan lagi oleh siswa-siswi yang di-tag di media sosial instagram oleh anggota osis dan seterusnya',
            'Tutorial for Others yang adalah program pengajaran anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak, di mana kami beserta para relawan siswa/i akan mengajarkan mereka pelajaran seperti matematika dasar, bahasa inggris dan lain-lain.w'
          ]
        }
        dir="/OSIS/bidang3"
        />
    </div>
  )
}

export default OSIS_2