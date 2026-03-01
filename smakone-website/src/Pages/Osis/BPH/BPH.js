import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

//Import Image
import Jojo from "../../../Image/Osis/Bidang_BPH/jojo.webp";
import Mimi from "../../../Image/Osis/Bidang_BPH/mimi.webp";
import Mudit from "../../../Image/Osis/Bidang_BPH/mudit.webp";
import Catherine from "../../../Image/Osis/Bidang_BPH/sinsin.webp";
import Hana from "../../../Image/Osis/Bidang_BPH/hanna.webp";

const BPH = () => {
  return (
    <div>
      <OsisTeam
        bidang="Badan Pengurus Harian"
        person1={
          <BidangSection
            img={Jojo}
            alt="Jojo"
            name="Jordana Utama"
            desc="Roses are red,
Violets are blue.
Page looks better now,
Wonder why… oh, you 😉🫵
Helooooo! Perkenalkan nama aku Jordana Utama biasa dipanggil Jordana / jojo / jor / apapun yang kamu mau bolehh kokk ;) Di tahun kedua sebagai anggota OSIS, aku menjabat menjadi ketua OSIS 🙌 ! Nahh, selain menjadi anggota OSIS di Smukie, aku juga ikut F1RST 💃 dan KR1ZA 🏐🏀 !! Aku juga ada beberapa hobby lain seperti dengerin lagu, gambar, anything yang bisa have fun deh pokonyaa! Walaupun banyak yang bilang aku awalnya serem, sebenernya aku tipe yangg suka nambah temen baruu lhoo! Jadi kaloo mau mabar / recommendations / bantuan / get to know lebih lagii, bisa dm aku di ig aku @jqrdana_ (gausa malu-malu yaa.. aku gak gigit 🙂‍↕️🤞) Itu ajaa perkenalan dari aku, let’s do our best in Smukie! ᕦ(ò_óˇ)ᕤ
"
          />
        }
        person2={
          <BidangSection
            img={Hana}
            alt="Hana"
            name="Stevianne Hanna Saerang"
            desc="stroberi mangga apel, haihaii salkenn ini Hanna, tapi maunya dipanggil sayang aja dehhh angangang 🤣. tahun ini aku dipercaya menjadi wakil ketua OSIS, dan bakal banyak terlibat dalam koordinasi & jalannya kegiatan YEAYEAAAA! dari dulu aku suka bangetbangetbanget ikut komunitas/kepanitiaan because I grow best in places buzzing with people and loud energy! di smukie punnn i aktif saat dalam team seperti SOC, TOS, KR1ZA Volley (ga jago), AP1 KR1ZA, dan lain-lainnyaa yang akan terus + di tahun ini! smukie tuh penuh banget sama kesempatan and i gapernah ragu buat ikut apa aja yang bikin i berkembanggg! ❤️

i hobi banget nonton rom-comssss terutama yang 90s-2000s (happy gilmore iloveu...). anywayyy aku suka kenalan & bangun relasi, kalau kamu tipe yang gampang senyum atau ketawaa, we’ll get along just fineeee! feel free to say hiiiii or hit me up on ig @steviannehs!!! 😆😆
"
          />
        }
        person3={
          <BidangSection
            img={Catherine}
            alt="Catherine"
            name="Catherine Hannalie"
            desc="Hey heyy!!👋🏻 Kenalin aku Catherine Hannalie, biasa dipanggil sin”/ sin kuadrat/ sincostan. Tahun ini aku diberi kesempatan buat jadi bendahara OSIS. In my free times, aku suka baking, listening to music (CAS especially), dan tentunya SHOPPING 😉😉. Fun fact about me : I like discovering and trying new things so kalau kalian ada news atau something yang bisa naikin adrenaline and dopamine levels, BOLEH BANGETT buat hit me up @catherinehannalie on ig!! Good luck in smukie y’all‼️"
          />
        }
        person5={
          <BidangSection
            img={Mudit}
            alt="Mudit"
            name="Mudita Nimmala"
            desc="stroberi mangga apel helloo salam kenall, nama aku Mudita, biasanya dipanggil Mudit atau Ditaa🤗 tahun ini, aku menjabat sebagai sekretaris and I’m beyoond grateful for this opportunity🙆‍♀️ selain OSIS, aku aktif juga di beberapa kegiatan seperti tos & syc👯‍♀️ if im not doing anything aku suka dengerin music (esp rnb)🎶, nonton film thriller, sama main game meskipun ga jago jago bgt angangang🤣🤣 

kalo mauu ngobrol ngobroll or if you have any film recs, feel free to hmu @muditanimmala🙌 see you and goodluck in smukiee!!💥💥
"
          />
        }
        person4={
          <BidangSection
            img={Mimi}
            alt="Mimi"
            name="Emily Chairmanly Afla"
            desc="Hey y'all! Kenalin, nama aku Emily — bisa dipanggil Emi or Mimi. Biasanya, aku suka banget dengerin lagu, apalagi kalauu lagii bosen/nungguin sesuatuu. Selain itu, aku juga tergabung dalam beberapa kepanitiaan dan club MASK, which explains how much I love theatre! 🎭 Feel free yaa kalau mau ngobrol'/mutualan, langsung ajaa ke ig aku @emilychaa_. Good luck and don’t forget to have some fun in Smukie <33"
          />
        }
        dirBPH="/OSIS/bidang1"
      />
    </div>
  );
};

export default BPH;
