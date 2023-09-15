import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Davina from '../../../Image/Osis/Bidang_3/davina.webp'
import Jacqueline from '../../../Image/Osis/Bidang_3/Jacqueline.webp'
import Anthony from '../../../Image/Osis/Bidang_3/Anthony.webp'
import Tiffany from '../../../Image/Osis/Bidang_3/Tiffany.webp'


const OSIS_3 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 3"
        desc="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
        person1={<BidangSection img={Davina} alt="Davina" name="Davina Natasha 	" desc="hii semuaa!! salkenn namaku Davina sebagai koordinator OSIS bidang 3 👋🏻 tahun ini aku berada di kelas XI MIPA, di waktu luangku aku menghabiskan waktu membaca novel atau mendengarkan spotify. Fun fact aku senang banget food hunting 🌯🌮🥪, kalau mau have a chat sama aku atau simply tanya-tanya about OSIS dan smukie, feel free to chat me via dm @davina.natashaa 🪄 Have fun in smukie everyone!!"/>}
        person2={<BidangSection img={Jacqueline} alt="Jacqueline" name="Jacqueline Yang 	" desc="Hii, aku Jacqueline (read: je•klin), anggota OSIS bidang 3🧘🏻‍♀️ Selain OSIS, aku juga bergabung dalam kepengurusan Dewan Ambalan (DA) Pramuka & BBPB SMAK 1🧚🏻‍♀️ ✨ Ulang tahunku sama dengan release date-nya Google Sheets! tahunnya juga sama hehe keren kannn?!🤟🏻🏄🏻‍♀️ Music runs through my veins🎧🫧 terutama yang bergenre Jazz/RnB!! Kalau aku hanya bisa makan 1 makanan saja dalam hidup, aku akan jawab sushi tanpa pikir panjang!!!!🍣🫶🏻 Aku suka skalyy warna pink🌷💗 Let’s be moots on IG: @jacquelyang"/>}
        person3={<BidangSection img={Anthony} alt="Anthony" name="Anthony Christian " desc='Halo semuanya 👋🏼 kenalin aku Anthony dari bidang 3!!! Cerita dikit tentang aku, lahir di Jakarta tanggal 30 November 2007. Hobi aku cover" lagu pake gitar, main badmin, dan ngegym ( walaupun gak sering tapi lumayanlah). Pelajaran favorit aku fisika sama pelajarin kamuu, wkwkww canda". Kalau ada mau nanya" hal lainn, boleh banget dm aku di IG @anthonychrist_. Salam kenal semuaa!😃'/>}
        person4={<BidangSection img={Tiffany} alt="Tiffany" name="Tiffany Julian Hutagaol	" desc="Hi semuaa 👋‼️ Salam kenal nama aku Tiffany Julian Hutagaol tapi biasa dipanggil Tiff. Sekarang, aku berada di kelas X MIPA. Tahun ini, aku adalah salah satu anggota OSIS bidang 3. Hobi aku banyakk tapi paling suka kamu, EHH maksut aku, hobi yang paling aku suka yaitu melakukan musical theater! Di waktu senggang, aku juga suka baca novel- novel fiksi. Akhir-akhir ini aku juga lagi suka main badmin sama tenis meja (walaupun ga jago- jago amat sii). Oiya aku juga suka main game mobile seperti mobile legend, aku udah glory loh guys 😎 (epical glory alias stuck di epic maksutnya hehehee). okay lanjut! 
        Berada di OSIS merupakan suatu kesempatan yang sangat berharga, jadii jangan ragu ragu buat jadi a part of us yaa! Kalau mau tanya- tanya seputar SMUKIE atau mau curhat atau main bareng jangan ragu buat reach out ke instagram aku @tiffany.hutagaol 
        Goodluck and jangan lupa buat have fun di SMUKIE semuanyaa!"/>}
        Description={true}
        DescBid="Bidang 3 adalah bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagai program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1."
        Program={true}
        ProgramList={
          [
            'Upacara Rutin Hari Selasa, OSIS Bidang 3 memupuk rasa nasionalisme dan membangun karakter cinta terhadap bangsanya sendiri melalui upacara rutin',
            'Upacara Hari Nasional, menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati hari-hari penting seperti Hari Kartini, Hari Lahir Pancasila, Hari Kemerdekaan Indonesia, dan hari-hari penting lainnya',
            'Perayaan Hari Kemerdekaan Republik Indonesia, OSIS Bidang 3 mengadakan perayaan 17 Agustus menjadi ajang bagi peserta didik untuk memupuk rasa cinta tanah air dan juga mempererat rasa persatuan dan kesatuan yang ada melalui kegiatan-kegiatan yang diadakan',
            'Paskibra, Pasukan Pengibar Bendera bertugas pada setiap kegiatan Upacara',
            'Perayaan Hari Kartini : OSIS Bidang 3 membuat perayaan untuk Hari Kartini sebagai ajang bagi peserta didik untuk mengapresiasi jasa Ibu R.A Kartini',
            'Perayaan Hari Guru : OSIS Bidang 3 mengadakan acara Perayaan Hari Guru sebagai ajang bagi peserta didik untuk memberi penghormatan dan menunjukkan rasa terima kasih kepada para guru yang sudah berjasa bagi mereka',
            'Memo1rs : OSIS Bidang 3 membuat video pendek mengenai pahlawan-pahlawan Indonesia yang dapat dibilang "anti-mainstream" atau yang belum terlalu dikenal',
            'Hari Batik Nasional : OSIS Bidang 3 membuat perayaan Hari Batik Nasional dalam bentuk lomba sebagai ajang bagi peserta didik untuk melestarikan salah satu kebudayaan Indonesia yaitu Batik',
            'SAHANAYA (Satukan Hati, Nyalakan Budaya) : OSIS Bidang 3 menyediakan wadah bagi klub-klub seni SMAK 1 Penabur Jakarta untuk menyalurkan bakatnya dalam bentuk video setiap 3 bulan sekali',
            'K1SAH : OSIS Bidang 3 bekerja sama dengan eskul manga untuk membuat komik singkat setiap perayaan hari-hari besar Indonesia'
          ]
        }
        dir="/OSIS/bidang4"
        />
    </div>
  )
}

export default OSIS_3