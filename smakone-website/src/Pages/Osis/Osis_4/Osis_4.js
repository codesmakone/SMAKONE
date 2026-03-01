import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Faith from "../../../Image/Osis/Bidang_4/Faith.jpg";
import Graciella from "../../../Image/Osis/Bidang_4/Graciella.png";
import Jacqueline from "../../../Image/Osis/Bidang_4/Jacqueline.png";
import Quirinus from "../../../Image/Osis/Bidang_4/Quirinus.jpg";
import Nadine from "../../../Image/Osis/Bidang_4/Nadine.jpg";

const OSIS_4 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 4"
        desc="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
        person4={
          <BidangSection
            img={Faith}
            alt="Faith"
            name="Faith Emanuella Rusli"
            desc="haii semuaa!! kenalinn aku Faith, biasa sering dipanggil faith/feit/feth. Biasanya aku klo bosen suka yapping bareng tmn2 akuu, TENTUNYA MAKANNN 🍲🍣(certified bigback), or dengerin podcastt 🎧‼️ Funfact, aku suka bgt ikan, aku mau jadi pemancing handal gais 🐠🎣 (biar bisa ayce seafood 🙏). anww, feel freee to yap w me on instaa @f4ithxz._"
          />
        }
        person3={
          <BidangSection
            img={Jacqueline}
            alt="Jacqueline"
            name="Jacqueline Audrey Wijaya"
            desc="hi semuanya! perkenalkan nama aku Jacqueline dan tahun ini aku diberi kepercayaan untuk menjadi anggota dari bidang 4️⃣ OSIS SMAK 1 😆🌟 sedikit ttg aku, aku suka dengerin musik & nonton film 🎞️ diluar osis, aku jg bergabung di clubs/kepanitiaan lainnya.. jadi buat yang baru masuk disini, jangan takut buat coba2 banyak hal yaa. 🫂 klo ada mau nanya apa2, feel free to hmu @jacqaudreyw ‼️ have fun in smukie ol"
          />
        }
        person2={
          <BidangSection
            img={Nadine}
            alt="Nadine"
            name="Nadine Ng"
            desc="Haii semuaa😆kenalin namaku Nadine Ng , biasa dipanggil Nad/Din/NG/ bebas🥲. Aku bersyukur banget di tahun ini bisa dikasi kesempatan untuk menjabat sebagai anggota bid 4 :). Selain di OSIS, aku juga ikut F1RST☝️❤︎⁠ my home di smukie, KR1ZA voli & SOG! Aku seneng banget bisa ikut kegiatan” itu semua. Klo mau tau, aku hobinya nari, olahraga, denger musik, makan, especially tidur 😴🤌. itu yang aku tunggu” setiap hari hehe. oiya movie kesukaan aku HSM & harry potter🫠bisa rewatch 100x. Jujurr aku enjoy di SMUKIE & would not change a thing, semoga kalian juga happy di smukiee & aku mau kenalan sama kalian semuaa🥹so nih @nadineng_ hihi. Enjoyy smukie life bcs we will never be in highschool again:(💗"
          />
        }
        person1={
          <BidangSection
            img={Quirinus}
            alt="Quirinus"
            name="Quirinus Lionnel Hanson Kangga"
            desc="Haloo semua!!👋👋 Kenalin nama aku Lionnel, biasanya dipanggil Li atau Lio. Tahun ini aku diberi kesempatan untuk menjabat sebagai koordinator bidang 4. Hobi aku biasanya main games atau olahraga. Kalo kalian mau ngobrol atau nanya-nanya, feel free buat ke ig aku @lionnelhans_  yaa, salam kenal and enjoy smukiee all!!"
          />
        }
        person5={
          <BidangSection
            img={Graciella}
            alt="Graciella"
            name="Graciella Anastasya Sutanto "
            desc=" hai all!! kenalin aku Graciella, biasa sering dipanggil lalaa. hobby aku dancee 💃, makann 🍣😋 and dengerin musikk 🎧🎶 Funfact aku gasuka samsek sama donat gatau deh kenapaa 🍩🙅‍♀️ anywayss feel free to chit chat w me on instaa @graciella_anastasya 🥸😛"
          />
        }
        Description={true}
        DescBid="Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [ program Uni-assist sama ask away]"
        Program={true}
        ProgramList={[
          //UPDATED 2026
          "TEDxYouth@SmakOne - TEDxYouth@SmakOne merupakan event kolaborasi SMAK 1 dengan TED, media organisasi Internasional",
          "OneFair - Pameran edukasi yang menampilkan karya siswa-siswi SMAK 1 terkait sains dan bahasa yang akan dipresentasikan langsung oleh siswa/i kepada masyarakat luas",
          "School Visit - Program kunjungan sekolah untuk anak anak SMP agar dapat melihat kegiatan  yang dilakukan ketika bersekolah di SMAK 1",
          "Uni Ass1st Vlog - Vlog yang menceritakan mengenai kehidupan mahasiswa alumni SMAK 1 di Universitas, vlog tersebut akan ditampilkan pada saat tertentu di sekolah dan akan di unggah ke YouTube",
          "Encycloped1a - Program yang menyajikan edukasi pengetahuan umum melalui media sosial dengan cara membuat poster Instagram grid post berisi fakta-fakta menarik berdasarkan topik yang berurutan secara abjad",
          "FSL (Facts, Science, Life) - Program yang mempertunjukkan hubungan antara teori-teori yang dipelajari di sekolah dengan kegiatan sehari-hari Program ini menunjukkan demonstrasi kegiatan sains, fakta dari suatu teori, dan aplikasinya di kehidupan yang direkam dan di upload di Instagram reels",
          "FSL x Wecare - Program kampanye informatif yang disajikan dalam bentuk video serta unggahan Instagram Story melalui akun @smukiee. Program ini mengangkat berbagai isu aktual yang dekat dengan kehidupan sehari-hari, mulai dari kondisi lingkungan di sekitar kita dan fenomena sosial",
        ]}
        dir="/OSIS/bidang5"
      />
    </div>
  );
};

export default OSIS_4;
