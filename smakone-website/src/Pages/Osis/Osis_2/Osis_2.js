import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Regina from '../../../Image/Osis/Bidang_2/Regina.webp'
import Joshua from '../../../Image/Osis/Bidang_2/Joshua.webp'
import Putu from '../../../Image/Osis/Bidang_2/Putu.webp'
import Clairence from '../../../Image/Osis/Bidang_2/Clairence.webp'
import Jessica from '../../../Image/Osis/Bidang_2/Jessica.webp'


const OSIS_2 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 2"
        desc="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"

        person1={<BidangSection img={Regina} alt='Regina' name='Regina Lucky Surjadi' desc='Haiii all!! Salam kenal, aku Regina Lucky Surjadi sebagai koordinator OSIS bidang 2 ✌🏻. Kalian bisa panggil aku Gina or Regi 😆. I have a lot of hobbies like dancing, traveling, watercolor painting, and esp making contents and ig stories/reels untuk panitia publikasi!! 🤳🏻😍 Aku juga merupakan anggota F1rst, jadi kalau F1rst lagi tampil wajib bgtt nyorakin kitaa!! 💙 Kalau mau ngobrol” and be mutuals bolehh banget ke ig akuu @reginaluckysurjadi! Have a blast and enjoy your unforgettable experience in smukiee!! 🤩🔥'/>}
        person2={<BidangSection img={Joshua} alt='Joshua' name='Joshua Nathanael Yang' desc="Salken, nama aku Joshua, biasa dipanggil Joshua atau Josh. Hobi aku olahraga sih kecuali berenang. Kalo mau ngobrol/tau lebih banyak tentang aku, boleh cek ig aku aja ya @joshua.n.y Nice to meet u all!"/>}
        person3={<BidangSection img={Putu} alt='Putu' name='Putu Acyntia Kanaya Ardani' desc='Haihaii 👋🏼! Kenalin, aku Putu Acyntia Kanaya Ardani, atau biasa dipanggil cyntia! Aku dari kelas X1 and anggota osis bidang 2! Something about me is that aku paling gabisa hidup tanpa musik hehee. Aku suka bangett main piano/gitar sambil nyanyi, dengerin musik kapanpun n dimanapun, tapi juga suka baca fantasy novels 🫣! Fun fact about me is that I still love those old barbie movies and songs (because they were peak childhood) 🙂‍↕️ If you guys wanna talk, atau punya book recs, don’t hesitate to hmu on my ig @cyntia_ardani! I promise I’m not as nonchalant as i look in my pic 😭🫶🏼'/>}
        person4={<BidangSection img={Clairence} alt='Clairence' name='Clairence Ilona Tanu' desc='Hi semuaa, nama aku Clairence Ilona, biasanya dipanggil Claire. Hobi aku bisa dibilang basic sih kayak nonton film, baca buku, sama dengerin musik. Kalo ngomongin musik aku suka artist kayak NIKI sama dewa 19. Aku juga kadang main gitar, tapi sampe sekarang ga jago-jago. Feel free to hit me up di @clairee.ilo !!'/>}
        person5={<BidangSection img={Jessica} alt='Jessica' name='Jessica Faustine Karnali' desc='Haii guyss!! 👋🏻👋🏻 Nama aku Jessica Faustine and aku berasal dari kelas 10-3. Sekarang aku berkesempatan menjadi anggota osis bidang 2 ✌🏻🤞🏻. Oiyaa kalian bisa panggil aku Jess F. Hobi aku nonton, main game, sama kadang aku juga suka baking. Fun Fact tentang aku, aku suka banget banget sama matchaa 🍵. Kalauu kalian mau ngobrol/lebih kenal sama aku, bisa dm or follow ig akuu yaah @jessicaftine. Salam kenall guys, enjoy and goodluckk yaa in smukiee 💯🫡😍'/>}

        Description={true}
        DescBid="OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            "Tutorial For Others (TOS) - Memberi kesempatan bagi siswa-siswi yang bersedia untuk melakukan pengajaran dan berbagi dengan anak-anak dari Yayasan Sahabat Anak Grogol",
            "Buka Bersama - Kegiatan buka puasa bersama yang dilakukan di kantin SMAK 1 PENABUR Jakarta dan diikuti oleh seluruh karyawan (satpam, cleaning service, gardener, sopir, dan teknisi)",
            "Live In - Kegiatan yang dilaksanakan di desa, untuk memberi para pendaftar (peserta didik) sebuah kesempatan untuk membantu warga-warga di desa dan juga sebagai wadah bagi mereka untuk dapat mengedalikan diri mereka di tempat yang baru",
            "5S - Program Senyum, Salam, Sapa, Sopan, Santun yang dilaksanakan setiap hari oleh OSIS & MPK di depan pintu lobby",
          ]
        }
        dir="/OSIS/bidang3"
      />
    </div>
  )
}

export default OSIS_2