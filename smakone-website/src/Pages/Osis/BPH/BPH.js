import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

//Import Image
import Angelica from "../../../Image/Osis/Bidang_BPH/angelica.jpeg";
import Catherine from "../../../Image/Osis/Bidang_BPH/catherine.jpg";
import Jordana from "../../../Image/Osis/Bidang_BPH/jordana.jpg";
import Joyce from "../../../Image/Osis/Bidang_BPH/joyce.PNG";
import Benedict from "../../../Image/Osis/Bidang_BPH/benedict.png";

const BPH = () => {
  return (
    <div>
      <OsisTeam
        bidang="Badan Pengurus Harian"
        person1={
          <BidangSection
            img={Benedict}
            alt="Benedict"
            name="Benedict Erick Anthony"
            desc="Hai semuaa! Kenalin, aku Erick, dan tahun ini aku menjabat sebagai ketua OSIS. Singkat cerita tentang aku, aku suka banget dengerin lagu dan main game, salah satunya mobile legends. Selain itu, aku juga open banget buat explore hal-hal yang baru dan buat temen-temen baru. Jadi, buat kalian yang mau ngajak mabar atau sekedar ngobrol-ngobrol aja, feel free to hit me up through my ig, @bndct.erick! Other than that, jangan lupa have fun di SMUKIE!!"
          />
        }
        person2={
          <BidangSection
            img={Jordana}
            alt="Jordana"
            name="Jordana Utama"
            desc="Halooo!! Perkenalkan nama aku Jordana Utama, biasa dipanggil Jordana / jojo / jor / apapun yang kamu mau bolehh kokk :) 
                  Tahun ini, aku diterima masuk OSIS dan menjabat menjadi wakil ketua OSIS 🙌 ! Nahh, selain menjadi anggota OSIS di smukie, aku juga ikut F1RST 💃 dan KR1ZA voli 🏐 !! Aku juga ada beberapa hobby lain seperti basket, dengerin musik, gambar, having fun deh pokonyaa! Walaupun banyak orang yang bilang aku awalnya serem, sebenernya aku tipe orang yangg suka nambah temen baruu lhoo! Jadi kaloo mau mabar/recommendations/bantuan/get to know lebih lagii, bisa dm aku di ig aku @jqrdana_ (gausa takut yaa aku gak gigit 😉🤞)
                  Itu ajaa perkenalan dari aku, let’s do our best in smukie! ᕦ(ò_óˇ)ᕤ"
          />
        }
        person3={
          <BidangSection
            img={Catherine}
            alt="Catherine"
            name="Catherine Nicole Yuen"
            desc="Hi semuaa 👋 salam kenal aku Catherine tapi biasa dipanggil Cath! Tahun ini aku diberi kesempatan menjabat sebagai bendahara OSIS. In my free time aku suka masak, nulis, main game, debat, lukis dan baca novel & manga. Genre apa aja juga aku baca, but I'm a big fan of action, dystopia and philosophy! I'm always open to recommendations, so feel free untuk add aku di line: 1324is4231. Good luck and all the best in smukie, everyone! <3  "
          />
        }
        person4={
          <BidangSection
            img={Joyce}
            alt="Joyce"
            name="Joyce Avrill Miracle"
            desc="Haii semuaa!! Perkenalkan namaku Joyce atau bisa juga dipanggil Joy dan tahun ini aku diberi kepercayaan untuk menjadi sekretaris OSIS. Sedikit tentang aku, aku punya beberapa hobi yang mungkin kalian juga suka. Aku suka main badminton🏸, baking🧁, dan pastinya nonton konser. Selain itu, aku juga suka banget tidur dan makan karena, siapa sih yang nggak suka? 😆😆 Anywayy kalo kalian butuh temen konser, feel free to hit me up di ig akuu @joyavrlm HEHEHEHE. Have fun in smukie oll!!😋"
          />
        }
        person5={
          <BidangSection
            img={Angelica}
            alt="Angelica"
            name="Angelica Shelyn Nathania"
            desc="hey yall! 👋🏻 Kenalin, nama aku Angelica Shelyn, biasanya dipanggil Shelyn. Tahun ini (puji Tuhan) aku diberikan kesempatan dan kepercayaan menjabat sebagai Sekretaris woohooo 🌟 Aku bersyukur dan seneng banget bisa ketemu dan kerja sama orang-orang baru yang kece! That shows how grateful i am to be a part of the OSIS fam 🫂 Other than OSIS, i’m a part of pelayanan di gereja and kepanitiaan di smukiee. Aku ambil bagian dalam event-event menarik di smukiee seperti SOC, Bazone, and so many more. Oh yaa aku juga a part of organizations/clubs such as F1RST, SOG, TOS, OneFM, Api Kriza, pokoknya in smukiee there are tons of opportunities for us all to explore jadi jangan ragu to give it a try yaa! 😉 A bit more about me, i find myself at the best version when i’m dancing, singing, doing art stuffs like journaling, literature, watching movies, and listening to music. i’m a huge fan of the color blue, harry potter, mcu, kpop, novels, TAYLOR SWIFT!! fun fact aku orangnya expressive and bawel so if u wanna get to know me better or talk abt anything, feel free to hit me up on ig @sshelynn (my digital diary!). semangat terus yaa di smukiee, we’re in this together! <3 "
          />
        }
        dirBPH="/OSIS/bidang1"
      />
    </div>
  );
};

export default BPH;
