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
        { name: "Arthur Albert Alison", kelas: "XI9" },
        { name: "Caroline Tanadi", kelas: "X5" },
        { name: "Joyce Avrill Miracle", kelas: "X5" },
        { name: "Celine Josetta Boentara", kelas: "X5" },
        { name: "William Andrew Huang", kelas: "X2" },
        { name: "Valerie Sumitro", kelas: "X4" },
        { name: "Janet Christie", kelas: "X7" },
        { name: "Nathanael Angga Kusuma", kelas: "XI3" },
        { name: "Louis Alfian Sutanto", kelas: "XI2" },
        { name: "Clarissa Vinski Khowori", kelas: "XI7" }
      ]
    },
    {
      bidang: "Band",
      members: [
        { name: "Bennett Edderick Lee", kelas: "XI9" },
        { name: "Eldon Harris", kelas: "X1" },
        { name: "Ferdinand Aurelio Suprapto", kelas: "X3" },
        { name: "Gracia Emmanuella Candra", kelas: "XI5" },
        { name: "Marco Atreyu Hanjaya", kelas: "XI9" },
        { name: "Orvillo Albert Ezekiel Sugiyanto", kelas: "XI6" }
      ]
    },
    {
      bidang: "Basket",
      members: [
        { name: "Javern Axel Emmanuel", kelas: "XI5" },
        { name: "Jeriel Christian Hasian Silaban", kelas: "X8" },
        { name: "Joan Felicia Natania", kelas: "X9" },
        { name: "Kenneth Benedict Wijaya", kelas: "X6" },
        { name: "Maxwell Nolan Susatia", kelas: "X6" },
        { name: "Cheryl Viby Tumbelaka", kelas: "XI4" }
      ]
    },
    {
      bidang: "Business Plan",
      members: [
        { name: "Rachel Cathlene Christianty", kelas: "XI9" },
        { name: "Shenny Pannya Lowis", kelas: "X8" },
        { name: "Violeta Ivena Oscar Simatupang", kelas: "XI2" }
      ]
    },
    {
      bidang: "EDS",
      members: [
        { name: "Joshua Widjaja", kelas: "X8" },
        { name: "Mcriciel Matthew Marcelino Mussu", kelas: "X7" },
        { name: "Stephanie Baharuddin", kelas: "XI1" }
      ]
    },
    {
      bidang: "Futsal",
      members: [
        { name: "Raphael Jacob Panangian Sitompul", kelas: "XI1" },
        { name: "Shane Wibowo", kelas: "X5" },
        { name: "Kevin Timothy", kelas: "X6" },
        { name: "Ammarryyo Quinnan Yudhistira Idrian", kelas: "XI6" },
        { name: "Ferrel Gabriel", kelas: "X7" },
        { name: "Nicholas Thaddeus Gozali", kelas: "XI5" }
      ]
    },
    {
      bidang: "JHS Competition",
      members: [
        { name: "Garrie Halim", kelas: "XI5" },
        { name: "Byant Joshua Halim", kelas: "X1" },
        { name: "Cheerish Natalia Rifel", kelas: "XI1" },
        { name: "Daniel Surya Chandra", kelas: "XI1" },
        { name: "Joyceline Janani", kelas: "XI1" },
        { name: "Lovely Halim", kelas: "XI8" },
        { name: "Mairangelic Keshia Manujaya", kelas: "X1" },
        { name: "Elwein Liong", kelas: "XI4" },
        { name: "Octavo Reinhart Arion Talik", kelas: "XI2" },
        { name: "Rachel Yap", kelas: "X2" },
        { name: "Samantha Faye Feriyanto", kelas: "XI2" },
        { name: "Thaddeus Kennard Abidin", kelas: "XI3" },
        { name: "Phoebe Lynelle Budiman", kelas: "X6" }
      ]
    },
    {
      bidang: "Modern Dance",
      members: [
        { name: "Bianca Margareth Soetopo", kelas: "X9" },
        { name: "Nadine Ng", kelas: "X8" },
        { name: "Nadine Sachiko Darmutji", kelas: "X2" },
        { name: "Audrey Elisabeth Pardede", kelas: "XI3" },
        { name: "Angelina", kelas: "XI2" }
      ]
    },
    {
      bidang: "MUN",
      members: [
        {}
      ]
    },
    {
      bidang: "Mural",
      members: [
        { name: "Beverly Tan", kelas: "XI7" },
        { name: "Cleta Teodore Santoso", kelas: "XI7" },
        { name: "Alicia", kelas: "XI4" },
        { name: "Laura Angela Salim", kelas: "X7" }
      ]
    },
    {
      bidang: "Fotografi",
      members: [
        { name: "Felicia Ivana Yuval", kelas: "XI5" },
        { name: "Gwen Charissa Priscilla", kelas: "XI8" }
      ]
    },
    {
      bidang: "Esports",
      members: [
        { name: "Keisha Fayola Tjokro", kelas: "XI8" },
        { name: "Quenella Lachelle Madeline Kaloh", kelas: "X7" },
        { name: "Nathan Hartanto", kelas: "X9" },
        { name: "Diego Marvel Maxwell", kelas: "X8" },
        { name: "Imanuel Yohanes Setiawan", kelas: "X8" },
        { name: "Peter Purnama", kelas: "XI4" }
      ]
    },
    {
      bidang: "Voli",
      members: [
        { name: "Matthew Segara", kelas: "XI3" },
        { name: "Jordana Utama", kelas: "X4" },
        { name: "Devon Fillanov Juliansyah", kelas: "XI1" },
        { name: "Jayden Surlaya", kelas: "XI1" },
        { name: "Abbigayle Jaya Halim", kelas: "X5" },
        { name: "Chelsea Setiawan", kelas: "XI8" },
        { name: "Henry Arelian", kelas: "XI1" },
        { name: "Gabriella Hillary", kelas: "X2" },
      ]
    },
    {
      bidang: "Acara",
      members: [
        { name: "Emily Chairmanly Afla", kelas: "X9" },
        { name: "Jonathan Felix", kelas: "XI8" },
        { name: "Aurel Jolyn Japutra", kelas: "X4" }
      ]
    },
    {
      bidang: "Dana",
      members: [
        { name: "Jessica Aubrey Wong", kelas: "X5" },
        { name: "Abigail Kusnadi", kelas: "XI7" },
        { name: "Yessi Melinda", kelas: "XI9" },
        { name: "Delicia Angela Gunario", kelas: "X2" },
        { name: "Catherine Hannalie", kelas: "X8" }
      ]
    },
    {
      bidang: "Dekor Lapangan",
      members: [
        { name: "Abigail Triswandi", kelas: "XI3" },
        { name: "Cheryl Jacqueline Lywenskie", kelas: "XI3" },
        { name: "Chieryl Imanuella Sandy", kelas: "XI3" },
        { name: "Dafel Miracle Supratman", kelas: "XI1" },
        { name: "Earleen Yapary", kelas: "XI9" },
        { name: "Jake Christopher Effendi", kelas: "XI2" },
        { name: "Michelle Tan", kelas: "X8" },
        { name: "Nadine Gunawan", kelas: "X9" },
        { name: "Rachael Astechriste Verena Wibawa", kelas: "X6" },
        { name: "Richelle Florence Papilya", kelas: "X4" },
        { name: "Laurensia Edeline Santosa", kelas: "X1" },
      ]
    },
    {
      bidang: "Design Division",
      members: [
        { name: "Anna Monica Sahuburua", kelas: "X6" },
        { name: "Kihanna Mandy Rade Sihombing", kelas: "X4" },
        { name: "Joanne Gisella Yusmita", kelas: "X4" },
        { name: "Vivian Vishaka Bunnawan", kelas: "X7" },
        { name: "Renata Meyer Banjarnahor", kelas: "XI1" },
        { name: "Erika Olivia Chang", kelas: "XI9" },
        { name: "Helen Jovanna", kelas: "XI8" },
        { name: "Evita Ruth Hasianty", kelas: "XI8" }
      ]
    },
    {
      bidang: "Doa",
      members: [
        { name: 'Sofie Nicole Saragih', kelas: "XI2"}
      ] 
    },
    {
      bidang: "Film & Documentation",
      members: [
        { name: "Evan Glorious Widirga", kelas: "XI3" },
        { name: "Alexander Maurichio Leodra", kelas: "X3" },
        { name: "Christopher Dale Limence", kelas: "X7" },
        { name: "Jason Anartha", kelas: "XI1" },
        { name: "Kenneth Corrigan", kelas: "XI9" },
        { name: "Marciano Nathanael", kelas: "XI4" },
        { name: "Sean Michelle", kelas: "XI2" }
      ]
    },
    {
      bidang: "Humas",
      members: [
        { name: "Reyna Chryslene Setyono", kelas: "X8" },
        { name: "Christine Alicia Anabel", kelas: "X2" },
        { name: "Kania Paramita Purnomo", kelas: "X2" },
        { name: "Clairence Ilona Tanu", kelas: "X2" },
        { name: "Davalinda Cherie Ongsono", kelas: "XI9" },
        { name: "Hosea Ignatio Lim", kelas: "XI8" },
        { name: "Karen Mikaela Nurtanio", kelas: "X8" },
        { name: "Alana Nicole Mardjuki", kelas: "XI2" }
      ]
    },
    {
      bidang: "Keamanan",
      members: [
        { name: "Darren Valentian Mok", kelas: "X1" },
        { name: "Mikael Alexander Bimo Vandi", kelas: "XI5" },
        { name: "Zefanya Michael Purnomo", kelas: "X8" },
        { name: "Frederick Arellyus Wang", kelas: "XI7" },
        { name: "Vincent Valentino", kelas: "X2" },
        { name: "David Prijatna", kelas: "X2" },
        { name: "Kezia Adelynn Phondiadi", kelas: "X2" },
        { name: "Fernando Rama William Purnomo", kelas: "X8" },
        { name: "Samantha Wijaya", kelas: "XI6" },
        { name: "Brandon Colin", kelas: "X1" },
        { name: "Vianna Gerent Brightly Tiwa", kelas: "X8" }
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Annika Amaris Lambey", kelas: "X5" },
        { name: "Ernest Nathanael Wiguna", kelas: "XI9" },
        { name: "Janice Leticia", kelas: "X7" },
        { name: "Keanna Sutanto", kelas: "X1" },
        { name: "Kezia Asafvita Efraim Harviyanto", kelas: "XI4" },
      ]
    },
    {
      bidang: "Merchandise",
      members: [
        { name: "Eleonora Calyna Kuncara", kelas: "XI5" },
        { name: "Jessica Faustine Karnali", kelas: "X3" },
        { name: "Keysia Aurelia Rawung", kelas: "X3" },
        { name: "Shannon Froehlich Superanto", kelas: "XI5" },
        { name: "Sharlene Grace Oenadi", kelas: "X7" },
        { name: "Thalia Joey Abidin", kelas: "X8" },
        { name: "Viola Putri Setiawan", kelas: "X9" }
      ]
    },
    {
      bidang: "Perlengkapan",
      members: [
        { name: "Dimitry Marvello", kelas: "XI6" },
        { name: "Dylan Kenzie Wantah", kelas: "XI6" },
        { name: "Felics Gunawan", kelas: "X8" },
        { name: "Given Theofilius Wijaya", kelas: "XI4" },
        { name: "Jason Valentino Budiman", kelas: "XI9" },
        { name: "Jessica Naomi", kelas: "X8" },
        { name: "Jonathan Halim", kelas: "X2" },
        { name: "Joshua Christian Kurniawan", kelas: "XI2" },
        { name: "Joshua Nathanael Yang", kelas: "XI6" },
        { name: "Vivian Aurelia Agusta", kelas: "XI3" }
      ]
    },
    {
      bidang: "Publikasi",
      members: [
        { name: "Jocelyn Haosana", kelas: "X2" },
        { name: "Richelyn Chandra", kelas: "X3" },
        { name: "Gracia Audrey Budiono", kelas: "X6" },
        { name: "Katy Zoey Tanuwijaya", kelas: "X6" },
        { name: "Jaclyn Aditya The", kelas: "X9" },
        { name: "Claire Camberleigh Johansson", kelas: "XI3" },
        { name: "Geollen Aubrey Kurniawan", kelas: "XI5" },
        { name: "Jocelyn Olivia Triyanto", kelas: "XI5" },
        { name: "Regina Lucky Surjadi", kelas: "XI8" }
      ]
    },
    {
      bidang: "Ticketing",
      members: [
        { name: "Rainer Tristan Thunggawan", kelas: "X1" },
        { name: "Cherish Manzo Felicia", kelas: "X2" },
        { name: "Metta Nimmala", kelas: "X6" },
        { name: "Joanna Alexandra Liang", kelas: "X3" },
      ]
    },
    {
      bidang: "Trophies",
      members: [
        { name: "Ivana Roxanne Subakti", kelas: "X1" },
        { name: "Jocelyn Emilia Layadi", kelas: "XI9" },
        { name: "Michelle Gisellyn", kelas: "XI9" },
        { name: "Sherine Erica Heryawan", kelas: "X2" }
      ]
    },
    {
      bidang: "P3K",
      members: [
        { name: "Hillary Rhema Pribadi", kelas: "X3" },
        { name: "Caroline Christine Then", kelas: "X2" },
        { name: "Livia Audrey Hartono", kelas: "X4" },
        { name: "Jeanny Suryanto Yap", kelas: "X2" },
        { name: "Olivia Harsono", kelas: "X3" },
        { name: "Catherine Kimberly Ng", kelas: "X7" },
        { name: "Jeanice Sanricz Atmapralieto", kelas: "XI7" },
        { name: "Ethan Timothy Irawan", kelas: "XI6" },
        { name: "Natania Then", kelas: "X3" },
        { name: "Merlyn Eunice Chang", kelas: "X1" },
        { name: "Venartha Valentio", kelas: "X3" },
      ]
    },
    {
      bidang: "Web Division",
      members: [
        { name: "Bernard Thimotius Turnip", kelas: "X2" },
        { name: "Matthew Ethan Jefferson", kelas: "XI6" },
      ]
    }
  ];

const SOC1_2025 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto mb-10">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
          Hasil Seleksi Tahap Wawancara Open Recruitment SOC 2025
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 mb-7">
            Setelah kami melakukan seleksi selama 7 hari pada <b>Selasa, 3 Juni 2025 - Kamis, 12 Juni 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
      <SOCGrid data={data}/>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mt-5">Jakarta, 16 Juni 2025</p>
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

export default SOC1_2025;
