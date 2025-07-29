import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_steven from "../../../Image/Osis/ttd_Steven.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
      bidang: "Badminton",
      members: [
        { name: "Stevia Sufriady", kelas: "X6" },
        { name: "Jennifer Elizabeth", kelas: "XI7" },
        { name: "Darren Carlisle Nathaniel", kelas: "XI5" },
        { name: "Nicole Tokyo Liongdra", kelas: "X4" },
        { name: "Kyana Alicia Yolianto", kelas: "X7" },
        { name: "Vallerie Yuvelina Putri", kelas: "X8" },
        { name: "Jennifer Abigail Buntara", kelas: "XI6" },
        { name: "Arabelle Soetarso", kelas: "X6" },
        { name: "Joshua Theodore Suryanto", kelas: "X4" },
        { name: "Jennifer Olivia Chang ", kelas: "X10" },
        { name: "Nathanael Polendry", kelas: "X6" },
        { name: "Ashley Samantha Zeng", kelas: "X2" },
        { name: "Giselle Christina Hartono", kelas: "X2" },
        { name: "Tiffany Allison Oedyanto", kelas: "X2" },
        { name: "Darius Sudarmo", kelas: "XI1" },
      ]
    },
    {
      bidang: "Band",
      members: [
        { name: "Putu Acyntia Kanaya Ardani", kelas: "XI1" },
        { name: "Cleon Wyn Setiawan", kelas: "X10" },
        { name: "Aretha Olive Budiman", kelas: "X3" },
        { name: "Kenneth Nathaniel Tjan", kelas: "X1" },
        { name: "Felicia yemima tambunan", kelas: "X10" },
        { name: "Nadya Cherry Hendro", kelas: "X10" },
        { name: "William Isaac Tjhie", kelas: "X6" },
        { name: "Jazzelyn Abigail Hanley", kelas: "X2" },
        { name: "Christophe Andrew Tjioe", kelas: "X7" },
        { name: "Davendra Winston Kasmah", kelas: "X3" },
        { name: "Aaron Kesler Lim", kelas: "X1" },
        { name: "Nathanael Armantyo Hutabalian", kelas: "X8" },
        { name: "Matthew Tjandra", kelas: "X7" },
        { name: "Mike Louis Susanto Bhudiawan", kelas: "X3" },
      ]
    },
    {
      bidang: "Basket",
      members: [
        { name: "Silver Sean Kuntoaji", kelas: "XI6" },
        { name: "Lie Sharonia Belle", kelas: "X7" },
        { name: "Clayton Invanio", kelas: "X2" },
        { name: "Jonathan Felix Candra", kelas: "X3" },
        { name: "Julian Elim Dharmanto", kelas: "XI8" },
        { name: "Karen Augustina Tantoso", kelas: "X3" },
        { name: "Charlene Angelina Tan", kelas: "X8" },
        { name: "Lance wellington lie", kelas: "XI6" },
        { name: "Mathis farrel", kelas: "XI4" },
        { name: "Evander Josua Adhyastha Sadi ", kelas: "X9" },
        { name: "Evans Gideon Senduk", kelas: "XI4" },
        { name: "Natanoella Davina Lau", kelas: "X10" },
        { name: "Carlton Invanio", kelas: "X1" },
        { name: "Kevanno Indrawan Widaya", kelas: "X5" },
        { name: "Brianne Allegra Pratomo", kelas: "X3" },
        { name: "Jovita Mayleen", kelas: "XI8" },
        { name: "Isakhar Kaleb Mulyadi", kelas: "XI7" },
        { name: "Seraphine Cipto Liwan", kelas: "X7" },
      ]
    },
    {
      bidang: "Business Plan",
      members: [
        { name: "Callysta Elia Eleora", kelas: "X7" },
        { name: "Jasper Bernard Sanjaya", kelas: "X3" },
        { name: "Fellow Tedjomuljono ", kelas: "XI2" },
        { name: "Hizkia Alvino Sitinjak", kelas: "X6" },
        { name: "Michelle Christina Nursiman", kelas: "X6" },
        { name: "Vania Graciela Santoso", kelas: "XI2" },
      ]
    },
    {
      bidang: "EDS",
      members: [
        { name: "Hervian Wiryananda Pehry", kelas: "XI2" },
        { name: "Evan Conary Wangsa", kelas: "XI2" },
        { name: "Nicole Eleanor Setiady", kelas: "X2" },
        { name: "Madeline Setiawan", kelas: "X1" },
        { name: "Nathan Aurelion", kelas: "X10" },
        { name: "Matthew Emmanuel Kusnanto", kelas: "X9" },
      ]
    },
    {
      bidang: "Futsal",
      members: [
        { name: "Kenneth Christensen Juliansyah", kelas: "X10" },
        { name: "Timotius Alvino G", kelas: "XI5" },
        { name: "Boga F Renzo", kelas: "XI6" },
        { name: "Patrick Willson Tee", kelas: "X7" },
        { name: "Clarence Feonard Sugiarto Lee", kelas: "X1" },
        { name: "Samuel Prabaswara", kelas: "X3" },
        { name: "Elbert justin lie", kelas: "X1" },
      ]
    },
    {
      bidang: "JHS IPA",
      members: [
        { name: "Michael Thio", kelas: "X2" },
        { name: "Annabeth wong", kelas: "X1" },
        { name: "Letizia Nathania Wong", kelas: "XI6" },
        { name: "Oliver Roderick Adrian Talik", kelas: "X4" },
        { name: "Joshua Edrick Lim", kelas: "X8" },
      ]
    },
    {
      bidang: "JHS Mat",
      members: [
        { name: "Judson Carlton Lim", kelas: "X8" },
        { name: "Luffy Lionheart Liduwan", kelas: "XI2" },
        { name: "Jerry Valentino Young", kelas: "XII9" },
      ]
    },
    {
      bidang: "JHS IPS",
      members: [
        { name: "Michelle Hie", kelas: "X4" },
        { name: "Carmane Wilbert Soetopo", kelas: "X6" },
        { name: "Benedict Owen Ilyas", kelas: "XII6" },
        { name: "Mahendra Kalyana Sunarko", kelas: "XII1" },
      ]
    },
    {
      bidang: "JHS English",
      members: [
        { name: "Gweneth Aileen Kwanata", kelas: "XII4" },
        { name: "Dennis Mulyanata Mintarja", kelas: "XI8" },
        { name: "Stella Tristiana Widjaja", kelas: "XI3" },
        { name: "Freja Almeira Maskyuri", kelas: "XI5" },
        { name: "Nicoleen Leonny", kelas: "XI1" },
        { name: "Frances Ivana Natawidha", kelas: "X9" },
      ]
    },
    {
      bidang: "Modern Dance",
      members: [
        { name: "Clarissa Abigail Josephine", kelas: "XI7" },
        { name: "Cleocta egerei oscar simatupang", kelas: "X4" },
        { name: "Barbara Queen Adrienne", kelas: "X5" },
      ]
    },
    {
      bidang: "MUN",
      members: [
        { name: "Edbert Derris Leman", kelas: "X6" },
        { name: "Rafaelle Alvaro Darmawan", kelas: "X9" },
        { name: "Gabrio Aaron Wijaya", kelas: "XI1" },
        { name: "Natasha Jocelyn Anton", kelas: "XI1" },
        { name: "Naomi Angelica", kelas: "XI9" },
        { name: "Sarah Grace Huang", kelas: "XII3" },
      ]
    },
    {
      bidang: "Mural",
      members: [
        { name: "Kaelyn Sutanto", kelas: "XI7" },
        { name: "Kheyrin Evangelina Chandra", kelas: "X7" },
        { name: "Faye Valerie Lesley", kelas: "X7" },
        { name: "Fayola Arista", kelas: "XI1" },
        { name: "Darrell Jayden Adiwijaya", kelas: "XII5" },
        { name: "Tatyana Lemuel", kelas: "X8" },
        { name: "Marietta Luvi Tjandra", kelas: "X1" },
        { name: "Emily Adelia", kelas: "XI8" },
      ]
    },
    {
      bidang: "Fotografi",
      members: [
        { name: "Audrey Laurenza Viscendy", kelas: "XII9" },
        { name: "Angelina Devina Teddy", kelas: "X3" },
        { name: "Rafael Ephron Djimanton", kelas: "X9" },
        { name: "Rainer Arthur Setiawan", kelas: "X6" },
        { name: "Vanessa Leonard", kelas: "XII7" },
        { name: "Haylee Josephine Kurniawan", kelas: "X1" },
        { name: "Wilquintha Quiteria", kelas: "XI9" },
      ]
    },
    {
      bidang: "Esports",
      members: [
        { name: "Joshua Yang", kelas: "XI2" },
        { name: "Michael Christian Halim ", kelas: "XI2" },
        { name: "Lionell Austin Hermando", kelas: "X6" },
        { name: "Sebastian Harlie", kelas: "XI7" },
        { name: "Wilson Patrick Setiawan ", kelas: "X8" },
        { name: "Theo Renzo Mulyadi", kelas: "XII6" },
        { name: "Benedictus Kioe", kelas: "X4" },
        { name: "James Arya Sugiharto", kelas: "X10" },
        { name: "Marleen Gloryanne Tjandra ", kelas: "X6" },
        { name: "Jeremy Richmond Widjaja", kelas: "XII9" },
        { name: "Edward Kenneth Salim", kelas: "X10" },
        { name: "Evan Alexander Louis", kelas: "XI4" },
        { name: "Andreas Felix", kelas: "X4" },
        { name: "Jason samuel rihi manoe", kelas: "XI6" },
        { name: "Stanley Elisiano Angelo", kelas: "X9" },
        { name: "Preciana Meitte Effendi", kelas: "XII1" },
      ]
    },
    {
      bidang: "Acara",
      members: [
        { name: "Diego Leander Wilbert", kelas: "X4" },
        { name: "Gabrielle Angeline Stephanson Li", kelas: "X4" },
        { name: "Kimberlly Nicholine Phan", kelas: "X9" },
        { name: "Naomi Azalia Gunawan", kelas: "X4" },
        { name: "Stevianne Hanna Sadrang", kelas: "X4" },
        { name: "Angeline Lynelle Lowena", kelas: "X4" },
        { name: "Josephine Grace Tanujaya", kelas: "X5" },
        { name: "Gad Cebrian Fabiano Teguh", kelas: "X10" },
        { name: "Abednego Putra Pratama", kelas: "X9" },
        { name: "Rachel Arciany Sofian", kelas: "X10" },
        { name: "Clarissa Aquila Benaiah", kelas: "X9" },
        { name: "Graciella Fiorenza Thiesman", kelas: "X4" },
        { name: "Quirinus Lionnel Hanson Kangga", kelas: "XI5" },
        { name: "Jessie", kelas: "X9" },
        { name: "Cheryl Marsha Heryanto", kelas: "X4" },
      ]
    },
    {
      bidang: "Dana",
      members: [
        { name: "Valencia Marvelle", kelas: "X6" },
        { name: "Selina Prajitno", kelas: "X8" },
        { name: "vanessa madeleine mulyo", kelas: "XII1" },
        { name: "Myra Theresia Penanian Hutahaean", kelas: "X10" },
        { name: "Abigail Lorraine Hanel", kelas: "XI1" },
        { name: "Adeline Valerie Handoko", kelas: "X7" },
        { name: "Darius Theodore Bong", kelas: "X2" },
        { name: "Selly Florencia Mok", kelas: "X10" },
        { name: "Kenneth William Sugianto ", kelas: "X9" },
        { name: "Christopher Matthew Lasmana ", kelas: "XI1" },
        { name: "Nicholas Hugo Iswandy", kelas: "X1" },
      ]
    },
    {
      bidang: "Dekor Lapangan",
      members: [
        { name: "Keiko Giovanni Kurniawan", kelas: "XI7" },
        { name: "CAITLYN ABIGAIL", kelas: "X5" },
        { name: "Audrey Valencia Sutjipto ", kelas: "X7" },
        { name: "ceravine Schneider so ", kelas: "X6" },
        { name: "Caroline Aprilia Then", kelas: "X1" },
        { name: "Candice Andrea", kelas: "X2" },
        { name: "Joanne Patricia Wirawan", kelas: "X8" },
        { name: "Jessica Aurellia Parman", kelas: "XI8" },
        { name: "Joline Kiarra Tjahjadi", kelas: "X2" },
        { name: "Alessandro Michael Yustiano Messi Bija ", kelas: "XI7" },
        { name: "Chelline Velovita Karlowee", kelas: "X4" },
        { name: "Vanessa Rain", kelas: "X6" },
        { name: "Cathleen Trisha Willona ", kelas: "X6" },
        { name: "Fiona Calista Setiawan", kelas: "X6" },
      ]
    },
    {
      bidang: "Design Division",
      members: [
        { name: "Jocelyn Felicia Lisyanto", kelas: "X1" },
        { name: "Raelyn Angelique Herlambang ", kelas: "XII6" },
        { name: "Dasha Riani Pasaribu", kelas: "X5" },
        { name: "Liony Thesalonika Santoso", kelas: "X1" },
        { name: "Nomi Widjaja", kelas: "X5" },
        { name: "Ellanor Jovanka Huang", kelas: "X5" },
        { name: "Zoey Chen", kelas: "X3" },
      ]
    },
    {
      bidang: "Doa",
      members: [
        { name: "Lim Trinity Angelina", kelas: "X1" },
        { name: "Kenji Manuel Liawinson", kelas: "XII1" },
        { name: "Jesslyn Nicole Valerie", kelas: "XI6" },
        { name: "Joey Yu", kelas: "XI3" },
      ] 
    },
    {
      bidang: "Film & Documentation",
      members: [
        { name: "John Haren Tangputra", kelas: "X5" },
        { name: "Cheryl Shane", kelas: "X3" },
        { name: "Joel Lim", kelas: "X7" },
        { name: "Mahesa Wisesa", kelas: "XI8" },
        { name: "Darren Nathanael Bachtiar", kelas: "XI9" },
        { name: "Theodore Kimi Tjen", kelas: "XII8" },
        { name: "Kaitlyn Kallita Kusnandar", kelas: "X3" },
        { name: "Victorianto Vincent", kelas: "X5" },
        { name: "Valerie Rachel Gunadi", kelas: "X9" },
        { name: "Kaylene Fredrica Surya Atmadja", kelas: "XI1" },
        { name: "America Juliet Sujanto", kelas: "X9" },
        { name: "Aura Crystal Santos", kelas: "X3" },
      ]
    },
    {
      bidang: "Humas",
      members: [
        { name: "ADRIENNE OLIVIA SOERIOHADI", kelas: "X7" },
        { name: "Jefferson Matthew Adidjaja ", kelas: "X3" },
        { name: "Florence Stephanie Janto", kelas: "X9" },
        { name: "Fabiola Jane Susanto", kelas: "X1" },
        { name: "Joceline Fidelia Kho", kelas: "X4" },
        { name: "Eugenio Mikael Pramono ", kelas: "X3" },
        { name: "Evangeline Alexandra Nauli Parapat", kelas: "X4" },
        { name: "Felice Valerie Aurelia", kelas: "X6" },
        { name: "Mathieu Acquafresca Sudja", kelas: "XI7" },
        { name: "Kenneth Kairos", kelas: "XII2" },
        { name: "Mudita Nimmala", kelas: "X5" },
        { name: "Jonathan Calen Kho", kelas: "XII7" },
        { name: "Kezia Jocelyn Tasmaan", kelas: "X2" },
        { name: "Frederick Suhardi", kelas: "XII1" },
        { name: "Keneisha Nathania Iskandar", kelas: "X8" },
      ]
    },
    {
      bidang: "Keamanan",
      members: [
        { name: "vincencia graciella cong", kelas: "XI8" },
        { name: "Marcelino Verdanus Handoyo", kelas: "XI9" },
        { name: "Ashvagosha Kho", kelas: "XI6" },
        { name: "Elena Leticia Hendrawan", kelas: "X1" },
        { name: "Pheodore Chiara Lavernia", kelas: "X4" },
        { name: "Regina Gabriella Hioe", kelas: "XI6" },
        { name: "Jason constantine", kelas: "XI3" },
        { name: "Jamie Constantine", kelas: "XI8" },
        { name: "Hansel Loo", kelas: "XII4" },
        { name: "livia reanata lim", kelas: "XI3" },
        { name: "Alexander Theodore Viawan", kelas: "X5" },
        { name: "Putri Tufany Emanuella Sitanggang", kelas: "XI4" },
        { name: "Caithlyn Dayanne Darmawan", kelas: "XII4" },
        { name: "Joshua Michael Hioe", kelas: "X3" },
        { name: "Nathan Aurelius Halim", kelas: "X7" },
        { name: "Marvel Khioe", kelas: "XI9" },
        { name: "Princeton Orlando Chandrawangsa", kelas: "X10" },
        { name: "Anthony Tianata", kelas: "XII2" },
        { name: "Ray Hayden Rahardja", kelas: "X1" },
        { name: "Jordan Rudiyanto", kelas: "XI9" },
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Constantina Cendekiawan ", kelas: "XI8" },
        { name: "Celine Huang ", kelas: "X2" },
        { name: "Tristan Hilario Sufi ", kelas: "X3" },
        { name: "Feronica Wijatmo ", kelas: "XI6" },
        { name: "Viansy Vexia", kelas: "X1" },
        { name: "Sean Gabriel Huang", kelas: "X3" },
        { name: "Aurel Intan Annelies Lamria Purba", kelas: "XI3" },
        { name: "Yesica Andriani Sianturi", kelas: "XI9" },
        { name: "Clinton Harrison Lay", kelas: "XI7" },
        { name: "Nathan Patar Abigail Sihite", kelas: "XI4" },
        { name: "Naya Patreginia Mesah", kelas: "XI4" },
      ]
    },
    {
      bidang: "Merchandise + Transport",
      members: [
        { name: "Caroline Tanto", kelas: "XII3" },
        { name: "Claire Santoso ", kelas: "XI2" },
        { name: "Beverly Tanzil", kelas: "X8" },
        { name: "Eugenia Celine Chandra", kelas: "X8" },
        { name: "Flowerly Elora D’yose", kelas: "X8" },
        { name: "Madeleine chen ", kelas: "X8" },
        { name: "Keelyn Ivy Lukito", kelas: "X10" },
        { name: "JOSHUA JOSE KUNTARA", kelas: "X6" },
        { name: "Janice michaella aoki", kelas: "X7" },
      ]
    },
    {
      bidang: "Perlengkapan",
      members: [
        { name: "Michelle Nerova Robert", kelas: "X5" },
        { name: "Valerie Gaudeo Lie", kelas: "X4" },
        { name: "Timothy Gabriel PEK", kelas: "X8" },
        { name: "Tatiana Aurelia Fleming", kelas: "X10" },
        { name: "Pande Made Kenjioka", kelas: "XI8" },
        { name: "Edward Russel Ruslim", kelas: "XI8" },
        { name: "Cleovander Felix Bhadrik", kelas: "X7" },
        { name: "Purisa Asthine Dira", kelas: "XI4" },
        { name: "Sebastian Kean Vifel", kelas: "XI3" },
        { name: "Justin Sinclair", kelas: "X9" },
        { name: "Oswald Soetarso", kelas: "XI3" },
        { name: "Axel adison lee", kelas: "XI2" },
        { name: "Davin Sugiarto", kelas: "X4" },
        { name: "Tristan Axel Kosen", kelas: "XI5" },
      ]
    },
    {
      bidang: "Publikasi",
      members: [
        { name: "Carmeline Japutra", kelas: "X5" },
        { name: "Madison Suratman", kelas: "X7" },
        { name: "Doreen Brigitta Saputra", kelas: "X2" },
        { name: "Fernysia Edbert Samsie", kelas: "X2" },
        { name: "Naomi", kelas: "X6" },
        { name: "Virenka Rheynna Tan", kelas: "X9" },
        { name: "Shannon Demetria Suwanto", kelas: "X6" },
        { name: "Jacqueline Audrey Wijaya", kelas: "X7" },
        { name: "Viera Kay Praiseley", kelas: "X1" },
        { name: "Jovanka Gabriella", kelas: "X10" },
        { name: "Baby Aurellia Bagotz Purda", kelas: "X6" },
        { name: "Kristy Aurelia", kelas: "X5" },
        { name: "Gracia Tiffany Wirawan", kelas: "X3" },
        { name: "Callysta Ubrinna Sunjaya", kelas: "X10" },
        { name: "Nadine Averina Wijaya", kelas: "X3" },
      ]
    },
    {
      bidang: "Ticketing",
      members: [
        { name: "Richelle Liu", kelas: "X1" },
        { name: "Selina Kandarto", kelas: "X3" },
        { name: "Naomi Abigail Edward ", kelas: "X6" },
        { name: "Beatricia Allegra Pratomo", kelas: "X7" },
        { name: "Charice Sianes", kelas: "X8" },
        { name: "Matthew Monang Sitorus", kelas: "X9" },
        { name: "Christabelle Andrea Putri Onsoe", kelas: "X10" },
        { name: "rachel emily harnoto", kelas: "XI1" },
        { name: "Karenza Sheli Pasisir", kelas: "XI2" },
        { name: "Filbert Kuswara", kelas: "XI3" },
        { name: "ADELINE ALEXANDRA EMMANUELLA GOH ", kelas: "XI4" },
        { name: "Jessica Setiawan", kelas: "XI6" },
        { name: "Garrett Earl Hidayat ", kelas: "XI6" },
        { name: "Andhorea Chrestotesia Patriabara ", kelas: "XII4" },
      ]
    },
    {
      bidang: "Trophies",
      members: [
        { name: "Danesya Odelia Dharto", kelas: "X7" },
        { name: "Christa Jade Widjaja", kelas: "X3" },
        { name: "Verlin Vexia", kelas: "X2" },
        { name: "Gabriela Ailenka Cayadi", kelas: "X3" },
        { name: "Christopher Nathan ", kelas: "X4" },
        { name: "Karen Aurelia", kelas: "X4" },
        { name: "Joanna Ryska Erickson", kelas: "X1" },
        { name: "Gwynneth Christa Lie", kelas: "X7" },
        { name: "Patricia Apriliani Supriyanto", kelas: "X9" },
        { name: "Jesslyn Kireina Ailen", kelas: "X4" },
        { name: "Velin Gabriel Johansen", kelas: "X7" },
      ]
    },
    {
      bidang: "P3K",
      members: [
        { name: "MELLISA MAYA NATHANIA MULYONO", kelas: "XI9" },
        { name: "Alicia Calista", kelas: "X8" },
        { name: "Shannon Angelina Chandra", kelas: "X10" },
        { name: "Felicia Jocelyn", kelas: "XI8" },
        { name: "Audrey Gemma", kelas: "XI4" },
        { name: "Acelynn Richel Kusuma", kelas: "XI8" },
        { name: "made sasikirana satriakusuma ", kelas: "XI8" },
      ]
    },
    {
      bidang: "Web Division",
      members: [
        { name: "Michelle Chandra", kelas: "XI3" },
        { name: "Owen Peter Chow", kelas: "XII3" },
        { name: "Nicolle Lin", kelas: "X9" },
      ]
    }
  ];

const SOC1_2025_gel2 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto mb-10">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
          Hasil Seleksi Tahap Pertama Open Recruitment SOC Gelombang 2
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 mb-7">
            Setelah kami melakukan seleksi selama 5 hari pada <b>Senin, 22 Juli 2025 - Jumat, 25 Juli 2025</b>, telah ditentukan calon anggota-anggota baru sebagai berikut:
        </p>
        </div>
      <SOCGrid data={data}/>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mt-5">Jakarta, 27 Juli 2025</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
        <div className="mt-20 flex flex-col items-center">
          <img
            src={ttdyy}
            alt="Signature of YENDRA YOHANNES, M. Li."
            className="h-24 mb-4"
          />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">
            YENDRA YOHANNES, S.S., M.Li.
          </p>
          <p className="text-center mt-1">
            Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default SOC1_2025_gel2;
