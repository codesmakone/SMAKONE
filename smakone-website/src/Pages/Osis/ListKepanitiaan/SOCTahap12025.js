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
        { name: "Gabrio Aaron Wijaya", kelas: "X1" },
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
        { name: "Karenza Sheli Pasisir", kelas: "X7" },
        { name: "Marco Atreyu Hanjaya", kelas: "XI9" },
        { name: "Maurizio Matthew Soeroso", kelas: "X8" },
        { name: "Orvillo Albert Ezekiel Sugiyanto", kelas: "XI6" }
      ]
    },
    {
      bidang: "Basket",
      members: [
        { name: "Darius Sudarmo", kelas: "X3" },
        { name: "David Joseph Mulyana", kelas: "X3" },
        { name: "Javern Axel Emmanuel", kelas: "XI5" },
        { name: "Jeriel Christian Hasian Silaban", kelas: "X8" },
        { name: "Joan Felicia Natania", kelas: "X9" },
        { name: "Jonathan Kendrick", kelas: "XI4" },
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
        { name: "Ethan Lorenzo Subrato", kelas: "X7" },
        { name: "Nicholas Benedictus Hidajat", kelas: "X2" },
        { name: "Shane Wibowo", kelas: "X5" },
        { name: "Kevin Timothy", kelas: "X6" },
        { name: "Ammarryyo Quinnan Yudhistira Idrian", kelas: "XI6" },
        { name: "Ferrel Gabriel", kelas: "X7" },
        { name: "Eugene Izuka Candra", kelas: "X3" },
        { name: "Nicholas Thaddeus Gozali", kelas: "XI5" }
      ]
    },
    {
      bidang: "JHS Competition",
      members: [
        { name: "Benedict Owen Ilyas", kelas: "XI6" },
        { name: "Bryant Joshua Halim", kelas: "X1" },
        { name: "Garrie Halim", kelas: "XI5" },
        { name: "Cheerish Natalia Rifel", kelas: "XI1" },
        { name: "Daniel Surya Chandra", kelas: "XI1" },
        { name: "Joyceline Janani", kelas: "XI1" },
        { name: "Lovely Halim", kelas: "XI8" },
        { name: "Mairangelic Keshia Manujaya", kelas: "X1" },
        { name: "Elwein Liong", kelas: "XI4" },
        { name: "Michelle Chandra", kelas: "X1" },
        { name: "Natasha Jocelyn Anton", kelas: "X2" },
        { name: "Octavo Reinhart Arion Talik", kelas: "XI2" },
        { name: "Rachel Yap", kelas: "X2" },
        { name: "Samantha Faye Feriyanto", kelas: "XI2" },
        { name: "Thaddeus Kennard Abidin", kelas: "XI3" }
      ]
    },
    {
      bidang: "Modern Dance",
      members: [
        { name: "Kimberleigh Ayu Goenawan", kelas: "X9" },
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
        { name: "Eunike Alexandra Tanusaputera", kelas: "X5" }
      ]
    },
    {
      bidang: "Mural",
      members: [
        { name: "Beverly Tan", kelas: "XI7" },
        { name: "Kaelyn Sutanto", kelas: "X7" },
        { name: "Cleta Teodore Santoso", kelas: "XI7" },
        { name: "Alicia", kelas: "XI4" }
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
        { name: "Ethan Christopher Huang", kelas: "XI4" },
        { name: "Quenella Lachelle Madeline Kaloh", kelas: "X7" },
        { name: "Brandonn George Panjaya", kelas: "XI9" },
        { name: "Nathan Hartanto", kelas: "X9" },
        { name: "Diego Marvel Maxwell", kelas: "X8" },
        { name: "Richelle Christabel Sendrik", kelas: "X7" },
        { name: "Imanuel Yohanes Setiawan", kelas: "X8" },
        { name: "Cherise Eleanor Halim", kelas: "X8" },
        { name: "Richilie Budianto", kelas: "XI6" },
        { name: "Peter Purnama", kelas: "XI4" }
      ]
    },
    {
      bidang: "Voli",
      members: [
        { name: "Matthew Segara", kelas: "X5" },
        { name: "Alvin Wijaya Ng", kelas: "XI3" },
        { name: "Jordana Utama", kelas: "X4" },
        { name: "Devon Fillanov Juliansyah", kelas: "XI1" },
        { name: "Jayden Surlaya", kelas: "XI1" },
        { name: "Abbigayle Jaya Halim", kelas: "X5" },
        { name: "Nicholas Nathan Loyandi", kelas: "XI6" },
        { name: "Chelsea Setiawan", kelas: "XI8" },
        { name: "Henry Arelian", kelas: "XI1" },
        { name: "Keanu Naim", kelas: "XI6" },
        { name: "Gabriella Hillary", kelas: "X2" },
        { name: "Davon Abisha Cahyana", kelas: "X1" }
      ]
    },
    {
      bidang: "Acara",
      members: [
        { name: "Emily Chairmanly Afla", kelas: "X9" },
        { name: "Quirinus Lionnel Hanson Kangga", kelas: "X8" },
        { name: "Jonathan Felix", kelas: "XI8" },
        { name: "Yovela Dania Hewis", kelas: "XI6" },
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
        { name: "Christy Josephine Pribadi", kelas: "X7" },
        { name: "Claire Santoso", kelas: "X3" },
        { name: "Dafel Miracle Supratman", kelas: "XI1" },
        { name: "Earleen Yapary", kelas: "XI9" },
        { name: "Emily Adelia", kelas: "X6" },
        { name: "Jake Christopher Effendi", kelas: "XI2" },
        { name: "Jessica Pranapauw", kelas: "X9" },
        { name: "Kaylene Fredrica Suryaatmadja", kelas: "X2" },
        { name: "Laura Angela Salim", kelas: "X7" },
        { name: "Michelle Tan", kelas: "X8" },
        { name: "Nadine Gunawan", kelas: "X9" },
        { name: "Rachael Astechriste Verena Wibawa", kelas: "X6" },
        { name: "Richelle Florence Papilya", kelas: "X4" },
        { name: "Samanta Tavela Sulim", kelas: "X7" }
      ]
    },
    {
      bidang: "Design Division",
      members: [
        { name: "Anna Monica Sahuburua", kelas: "X6" },
        { name: "Kihanna Mandy Rade Sihombing", kelas: "X4" },
        { name: "Joanne Gisella Yusmita", kelas: "X4" },
        { name: "Faye Valerie Lesley", kelas: "X1" },
        { name: "Stella Tristiana Widjaja", kelas: "X1" },
        { name: "Vivian Vishaka Bunnawan", kelas: "X7" },
        { name: "Renata Meyer Banjarnahor", kelas: "XI1" },
        { name: "Erika Olivia Chang", kelas: "XI9" },
        { name: "Helen Jovanna", kelas: "XI8" },
        { name: "Evita Ruth Hasianty", kelas: "XI8" }
      ]
    },
    {
      bidang: "Doa",
      members: [''] 
    },
    {
      bidang: "Film & Documentation",
      members: [
        { name: "Alexander Maurichio Leodra", kelas: "X3" },
        { name: "Christopher Dale Limence", kelas: "X7" },
        { name: "Darren Nathanael Bachtiar", kelas: "X6" },
        { name: "Jason Anartha", kelas: "XI1" },
        { name: "Jennifer Elizabeth", kelas: "X1" },
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
        { name: "Jessica Setiawan", kelas: "X6" },
        { name: "Clairence Ilona Tanu", kelas: "X2" },
        { name: "Mikheila Verlin Cayadi", kelas: "XI9" },
        { name: "Davalinda Cherie Ongsono", kelas: "XI9" },
        { name: "Hosea Ignatio Lim", kelas: "XI8" },
        { name: "Acelynn Richel Kusuma", kelas: "X4" },
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
        { name: "Mutiara Jelita Tangkilisan", kelas: "X3" },
        { name: "Samantha Wijaya", kelas: "X1" },
        { name: "Brandon Colin", kelas: "XI6" },
        { name: "Vianna Gerent Brightly Tiwa", kelas: "X8" }
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Annette Chloe Hidayat", kelas: "XI5" },
        { name: "Annika Amaris Lambey", kelas: "X5" },
        { name: "Casey Edelyne Saputra", kelas: "X3" },
        { name: "Ernest Nathanael Wiguna", kelas: "XI9" },
        { name: "Janice Leticia", kelas: "X7" },
        { name: "Keanna Sutanto", kelas: "X1" },
        { name: "Kezia Asafvita Efraim Harviyanto", kelas: "XI4" },
        { name: "Manuella Gabrielle", kelas: "X6" },
        { name: "Nicolai Gunawan", kelas: "X6" },
        { name: "Phoebe Lynelle Budiman", kelas: "X6" }
      ]
    },
    {
      bidang: "Merchandise",
      members: [
        { name: "Cheryl Madelyn Suryana", kelas: "XI8" },
        { name: "Eleonora Calyna Kuncara", kelas: "XI5" },
        { name: "Fayola Arista", kelas: "X1" },
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
        { name: "Chika Letischa", kelas: "X1" },
        { name: "Christopher Matthew Lasmana", kelas: "X8" },
        { name: "Dimitry Marvello", kelas: "XI6" },
        { name: "Dylan Kenzie Wantah", kelas: "XI6" },
        { name: "Evan Conary Wangsa", kelas: "X7" },
        { name: "Felics Gunawan", kelas: "X8" },
        { name: "Filbert Kuswara", kelas: "X8" },
        { name: "Garret Earl Hidayat", kelas: "X6" },
        { name: "Given Theofilius Wijaya", kelas: "XI4" },
        { name: "Jason Valentino Budiman", kelas: "XI9" },
        { name: "Jessica Naomi", kelas: "X8" },
        { name: "Jonathan Halim", kelas: "X2" },
        { name: "Joshua Christian Kurniawan", kelas: "XI2" },
        { name: "Joshua Nathanael Yang", kelas: "XI6" },
        { name: "Marvel Khioe", kelas: "X4" },
        { name: "Nicholas Reynald Lawan", kelas: "X4" },
        { name: "Richard Dean Gunawan", kelas: "X2" },
        { name: "Vivian Aurelia Agusta", kelas: "XI3" }
      ]
    },
    {
      bidang: "Publikasi",
      members: [
        { name: "Putu Acyntia Kanaya Ardani", kelas: "X1" },
        { name: "Eveline Yolenta", kelas: "X2" },
        { name: "Jocelyn Haosana", kelas: "X2" },
        { name: "Richelyn Chandra", kelas: "X3" },
        { name: "Gracia Audrey Budiono", kelas: "X6" },
        { name: "Katy Zoey Tanuwijaya", kelas: "X6" },
        { name: "Giselle Christabel Sendrik", kelas: "X8" },
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
        { name: "Fionna Giselle Setiawan", kelas: "X3" },
        { name: "Sofie Nicole Saragih", kelas: "XI2" }
      ]
    },
    {
      bidang: "Trophies",
      members: [
        { name: "Edna Reia Napitpulu", kelas: "XI6" },
        { name: "Ivana Roxanne Subakti", kelas: "X1" },
        { name: "Jocelyn Emilia Layadi", kelas: "XI9" },
        { name: "Karen Edline", kelas: "X3" },
        { name: "Michelle Gisellyn", kelas: "XI9" },
        { name: "Sherine Erica Heryawan", kelas: "X2" }
      ]
    },
    {
      bidang: "P3K",
      members: [
        { name: "Shiela Pranoto", kelas: "X3" },
        { name: "Hillary Rhema Pribadi", kelas: "X3" },
        { name: "Caroline Christine Then", kelas: "X2" },
        { name: "Livia Audrey Hartono", kelas: "X4" },
        { name: "Jeanny Suryanto Yap", kelas: "X2" },
        { name: "Olivia Harsono", kelas: "X3" },
        { name: "Catherine Kimberly Ng", kelas: "X7" },
        { name: "Jeanice Sanricz Atmapralieto", kelas: "XI7" },
        { name: "Rachel Emily Harnoto", kelas: "X3" },
        { name: "Natania Then", kelas: "X3" },
        { name: "Merlyn Eunice Chang", kelas: "X1" },
        { name: "Letizia Nathania Wong", kelas: "X5" },
        { name: "Venartha Valentio", kelas: "X3" },
        { name: "Jazzelyn Martin", kelas: "X3" },
        { name: "Ethan Timothy Irawan", kelas: "XI6" }
      ]
    },
    {
      bidang: "Web Division",
      members: [
        { name: "Bernard Thimotius Turnip", kelas: "X2" },
        { name: "Matthew Ethan Jefferson", kelas: "XI6" },
        { name: "Zeke Isaiah Wijaya", kelas: "XI6" }
      ]
    }
  ];

const SOC1_2025 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          Hasil Seleksi Tahap 1 Open Recruitment SOC 2025
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <SOCGrid data={data}/>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mt-5">Jakarta, 14 Mei 2025</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
        <div className="flex flex-col md:flex-row justify-between items-center p-6 space-y-14 md:space-y-0 md:space-x-20">

          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2 text-center">
              Wakasis SMAK 1 PENABUR Jakarta
            </div>
            <img src={ttdyy} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Yendra Yohannes, S.S.,M.Li</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2">Ketua SOC 2025</div>
            <img src={ttd_steven} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Steven Andrew Wijaya</div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SOC1_2025;
