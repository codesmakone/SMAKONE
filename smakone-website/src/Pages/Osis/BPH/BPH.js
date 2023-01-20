import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

//Import Image
import Aline from '../../../Image/Osis/BPH/aline.webp'
import Kimberly from '../../../Image/Osis/BPH/Kimberly.webp'
import Florentina from '../../../Image/Osis/BPH/Florentina.webp'
import Amanda from '../../../Image/Osis/BPH/Amanda.webp'
import Jejo from '../../../Image/Osis/BPH/Jejo.webp'

const BPH = () => {
  return (
    <div>
      <OsisTeam
        bidang="Badan Pengurus Harian"
        person1={<BidangSection img={Aline} alt="Aline" name="Nathaline Marielle" desc="hellooo semuanya! salam kenal yaa, nama aku Nathaline tapii biasanya dipanggil alinee! Di OSIS taun ini aku adalah ketua osiss. so thankful to have this opportunity to be a big part in OSIS yay! this is my second year in OSIS and so far it has been a really wonderful experience being part of this family <3 selain OSIS aku juga participate di ONEJOURNAL, panitia SOC, STN, TEDX and many more! i would definitely persuade you guys to join too karna seseru itu. And by the way aku tuh orangnya dari kecil kdrama addict bangett! Jadi most of the time aku selalu nonton nonton nonton dan nonton :) from korean dramas to moviesnya semua aku sukaa banget HEHEH selain itu aku juga sering dengerin musik, suka olahraga, and pastinya cobain makanan baru - a big foodie right here! kalo mau give me recommendations or simply ngobrol – ngobrol langsung ke ig aku ajaa yaa @nathalinemarielle <3 last but not the least, one fun fact about me itu i shower super duper late at night and kramasnya kayak flash less than 5 mins HEHHEHE anywayss lets be friends!!"/>}
        person2={<BidangSection img={Kimberly} alt="Kimberly" name="Kimberly Audreylian Louise" desc="Hello everyone! Salam kenal, namaku Kimberly. Tahun ini, aku dikasih kesempatan menjadi wakil ketua OSIS 👋 
        This is my first year in smukie, and am so glad i decided to join OSIS. Di waktu luang, aku suka banget maraton k-dramas. Lately, aku juga lagi suka dengerin RnB music. Jadi kalo kalian ada recommend k-dramas/lagu yang bagus or simply mau ngobrol dan kenalan, boleh banget dm aku @kimberly.al_ yaa. Good luck and enjoy life in smukie all!"/>}
        person3={<BidangSection img={Florentina} alt="Florentina" name="Florentina Gwendolyn Tulia" desc='helloo everyonee 🥰✨ nama aku Flo kelas 11 MIPA 7. di OSIS taun ini aku menjabat sebagai sekretaris. selain OSIS, aku juga join beberapa organisasi di SMUKI kayak Serenity, TOS, SOC, BazOne, BBPB. hobby aku banyakk tbh😗 aku suka nonton (mainly drakor sii cm semenjak sekolah offline uda jarang☹️ tapii aku juga sering nonton series netflix yg western dll), aku juga sukabgtt makan!! nomnomnom and tidur HE HE HE😴 funfact tentang aku, aku itu sekolah kecepetan jadi aku 1 taun lebi muda dari temen seangkatan aku😋 anw kalo punya recommendation film/fud, nanya” ab smukie ato mau ngobrol” biasa bolee bgtt HMU di ig @floren.gwendolyn yaa🫶 let’s be friends🤩 salkenn semuanyaa🤍'/>}
        person4={<BidangSection img={Amanda} alt="Amanda" name="Amanda Michelle" desc="Hi everyonee! Nama aku Amanda, bisa juga dipanggil Man atau Manda, selaku Sekretaris OSIS. Di free time aku, aku suka dengerin musik di Spotify, ngedit dan ngepost ig reels, & debat bahasa Inggris! Selain OSIS, aku juga terlibat di beberapa organisasi lain di SMUKIE seperti EDS (English Debate Society), SOC, STN, Api KR1ZA, & BazOne! Kalau kalian mau ngobrol sama aku tentang organisasi-organisasi yang aku terlibat ataupun hal-hal lainnya bisa banget follow & langsung DM aja @amandamchlleee di insta ya! Fun fact, aku suka banget sama yang namanya kopi hitam HAHA Enjoy your time at smukie & use it well!"/>}
        person5={<BidangSection img={Jejo} alt="Jessica Jolene Djayasaputra" name="Jessica Jolene Djayasaputra" desc="Hii everyone! Namaku Jessica Jolene Djayasaputra, biasa dipanggil Jejo dan sekarang aku adalah murid 11 MIPA. In my spare time, aku suka bangett nonton (kdrama terutama 🥰) or play the piano. Soo, if we share the same hobbies (or not), don’t hesitate to hit me up through DM @jessicajolenedj! Anyways, fun fact about me adalah aku SUKA BANGET sama pizza <33. I always celebrate my birthday in a pizza restaurant 😋. TAPI sayangnya, aku alergi tomat (salah satu bahan dasar pizza ☹️) tapi aku selalu makan anyways sih HEHE. Last but not least, if you have any questions about me/smukie/etc., feel free to reach me out on Instagram cuz I’d love to help or chat with you guys ☺️! Salam kenal semuanyaa 👋‼️"/>}
        dirBPH= "/OSIS/bidang1"
      />
    </div>
  )
}

export default BPH