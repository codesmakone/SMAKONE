import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Edward from '../../../Image/Osis/Bidang_9/Edward.webp'
import Michelle from '../../../Image/Osis/Bidang_9/Michelle.webp'
import Grant from '../../../Image/Osis/Bidang_9/Grant.webp'
import Justin from '../../../Image/Osis/Bidang_9/Justin.webp'

const OSIS_9 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 9"
        desc="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
        person1={<BidangSection img={Edward} alt="Edward" name="Edward Putera Rusli" desc="Halo semua!! Kenalin nama aku Edward 👋. Sekarang, aku lagi di kelas 11 dan menjabat sebagai koordinator OSIS bidang 9! Saat ada waktu luang, aku suka fotografi/videografi, main piano, programming, dan sebagainya, pokoknya banyak deh hobbynya 🦆. Kalo mau ngobrol tentang apapun, langsung chat aja di IG aku, @edward_p_rusli!" />}
        person2={<BidangSection img={Michelle} alt='Michelle' name='Michelle Liu' desc='Hello everyone🤩, salam kenal semuanya. Perkenalkan aku Michelle, biasa dipanggil Michelle/chell/Liu. Saat ini aku menjabat sebagai anggota bidang 9, Selain aktif di OSIS aku juga aktif di berbagai kepanitiaan kayak SOC, STN, Bazone dan kawan kawannya. Karena hobi aku gak nentu jadi kita skip bagian itu dehhh, Gantinya fun fact aja kali yaaa, aku lahir di hari nyepi✌️and one of my favorite destination itu Bali🏝️. Also, aku orangnya lumayan pendiem so kalo misalnya at one time aku ngeliatin kalian lama gitu itu artinya aku lagi mikir “sapa ato engga ya?”. Even though aku pendiem, aku tetep suka ngobrol kok so don’t hesitate to reach me out through DM @michele_1iu. Enjoy your moment in SMUKIE!!' />}
        person3={<BidangSection img={Grant} alt='Grant' name='Grant Favor Tanudjaja' desc='Halo semuanya, perkenalkan nama aku Grant Favor Tanudjaja, biasanya aku dipanggil Grant. Sekarang aku duduk di kelas X5 dan sebagai anggota dari OSIS bidang 9. Hobi aku antara lain main game, workout, main musik, dll. Kalau mau nanya apa-apa atau kenalan, dm aj ke @grantfavr' />}
        person4={<BidangSection img={Justin} alt='Justin' name='Justin Revaldo Widjaja' desc='Haihaii, kenalin nama aku justinn..! sekarang aku adalah siswa dari kelas X6 dan disini sbg anggota bid 9 🤩🤩klo ada spare time sih aku suka netflix/GYMM/codingg gitu,, if u need anything bisa dm ke @justinrevaldo‼️ anywayy SALAM KENALL SMUANYA ' />}
        Description={true}
        DescBid="Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9 juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone."
        Program={true}
        ProgramList={
          [
            //PENDING
            'Website: Situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan',
            'E-Magazine - Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh OneJournal dan dapat diakses di website ini',
            'SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1',
            'Shutterone - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara',
            'Monograph - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara',
            'CodeOne - Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1',
            'KRIZA e-Sports - Tim e-Sports SMAK 1 dalam Mobile Legends dan Valorant, yang telah ikut serta dalam berbagai lomba dan memenangkan banyak prestasi',
            'One Journal - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam menulis dan memproduksi majalah digital (Emagazine) untuk diunggah di Website Smakone.org',
          ]
        }
        dir="/OSIS/bidang10"
      />
    </div>
  )
}

export default OSIS_9