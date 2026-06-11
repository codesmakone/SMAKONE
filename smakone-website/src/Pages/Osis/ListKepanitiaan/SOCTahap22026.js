import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_steven from "../../../Image/Osis/ttd_Steven.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
        bidang: "Acara",
        members: [
            { name: "Valencia Marvelle", kelas: "X-6" },
            { name: "Rachel Arciany Sofian", kelas: "X-10" }
        ]
    },
    {
        bidang: "Badminton",
        members: [
            { name: "Darius Sudarmo", kelas: "XI-1" },
            { name: "William Andrew Huang", kelas: "XI-3" },
            { name: "Celine Josetta Boentara", kelas: "XI-5" },
            { name: "Janet Christie", kelas: "XI-9" },
            { name: "Ashley Samantha Zeng", kelas: "X-2" },
            { name: "Giselle Christina", kelas: "X-2" },
            { name: "Arabelle Soetarso", kelas: "X-6" },
            { name: "Stevia Sufriady", kelas: "X-6" },
            { name: "Kyana Alicia", kelas: "X-7" },
            { name: "Karen Edline", kelas: "XI-8" },
            { name: "Candice Andrea", kelas: "X-2" },
            { name: "Tiffany Allison", kelas: "X-2" },
            { name: "Jeremia Rex", kelas: "X-3" }
        ]
    },
    {
        bidang: "Band",
        members: [
            { name: "Kenneth Nathaniel Tjan", kelas: "X-1" },
            { name: "Davendra Winston Kasmah", kelas: "X-3" },
            { name: "Nathanael Armantyo Hutabalian", kelas: "X-8" },
            { name: "Declan Hannael Adhypramana", kelas: "X-9" },
            { name: "Shiela Pranoto", kelas: "XI-3" }
        ]
    },
    {
        bidang: "Basket",
        members: [
            { name: "Baby Aurellia Bagotz Purda", kelas: "X-4" },
            { name: "Evans Gideon Senduk", kelas: "XI-4" },
            { name: "Jovita Mayleen", kelas: "XI-8" },
            { name: "Julian Elim Dharmanto", kelas: "XI-8" },
            { name: "Karen Augustina Tantoso", kelas: "X-3" },
            { name: "Joan Felicia Natania", kelas: "XI-5" },
            { name: "Kaori Eliana Talia", kelas: "X-7" },
            { name: "Charlene Angelina Tan", kelas: "X-8" }
        ]
    },
    {
        bidang: "Business Plan",
        members: [
            { name: "Fellow Tedjomuljono", kelas: "XI-2" },
            { name: "Selina Kandarto", kelas: "X-3" },
            { name: "Michelle Christina Nursiman", kelas: "X-6" },
            { name: "Cathleen Trisha Willona", kelas: "X-6" },
            { name: "Andy Tedjosukmono", kelas: "X-9" },
            { name: "Matthew Petra Suhanto", kelas: "X-10" }
        ]
    },
    {
        bidang: "Dana",
        members: [
            { name: "Claudia Augustine Sitorus", kelas: "XI-5" },
            { name: "Giselle Christabel Sendrik", kelas: "XI-7" },
            { name: "Nicole Tokyo Liongdra", kelas: "X-4" }
        ]
    },
    {
        bidang: "Dekor Lapangan",
        members: [
            { name: "Fabiola Jane Sutanto", kelas: "X-1" },
            { name: "Chelline Velovita Karlowee", kelas: "X-4" },
            { name: "Graciella Fiorenza Thiesman", kelas: "X-4" },
            { name: "Caitlyn Abigail", kelas: "X-5" },
            { name: "Audrey Valencia Sutjipto", kelas: "X-7" },
            { name: "Joanne Patricia Wirawan", kelas: "X-8" },
            { name: "Valerie Rachel Gunadi", kelas: "X-9" },
            { name: "Callysta Ubrinna Sunjaya", kelas: "X-10" },
            { name: "Richelle Florence Papilaya", kelas: "XI-4" },
            { name: "Jessica Aurellia Parman", kelas: "XI-8" }
        ]
    },
    {
        bidang: "Design Division",
        members: [
            { name: "Jocelyn Felicia Lisyanto", kelas: "X-1" },
            { name: "Ellanor Jovanka Huang", kelas: "X-5" },
            { name: "Nomi Widjaja", kelas: "X-5" },
            { name: "Alika Dylan", kelas: "XI-4" }
        ]
    },
    {
        bidang: "EDS",
        members: [
            { name: "Madeline Setiawan", kelas: "X-1" },
            { name: "Ceravine Schneider So", kelas: "X-6" },
            { name: "Nathan Aurelion", kelas: "X-10" },
            { name: "Joshua Widjaja", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Esports",
        members: [
            { name: "Edward Kenneth Salim", kelas: "X-10" },
            { name: "Quenella Lachelle Madeline Kaloh", kelas: "XI-6" },
            { name: "Maurizio Matthew Soeroso", kelas: "XI-1" },
            { name: "Bryan Steven Jonathan", kelas: "X-5" }
        ]
    },
    {
        bidang: "Film & Documentation",
        members: [
            { name: "Christopher Dale Limence", kelas: "XI-4" },
            { name: "John Haren Tangputra", kelas: "X-5" },
            { name: "Victorianto Vincentcius Limodya", kelas: "X-5" },
            { name: "Kaitlyn Kallita Kusnandar", kelas: "X-3" },
            { name: "Elbert Justin Lie", kelas: "X-1" },
            { name: "Valerie Tigris", kelas: "X-10" }
        ]
    },
    {
        bidang: "Fotografi",
        members: [
            { name: "Rafael Ephron Djimantoro", kelas: "X-9" },
            { name: "Constantina Cendekiawan", kelas: "XI-8" },
            { name: "America Juliet Sujanto", kelas: "X-9" }
        ]
    },
    {
        bidang: "Futsal",
        members: [
            { name: "Shane Wibowo", kelas: "XI-6" },
            { name: "Samuel Prabaswara", kelas: "X-3" },
            { name: "Clarence Feonard Sugiarto", kelas: "X-1" },
            { name: "Kenneth Christensen", kelas: "X-10" },
            { name: "Andrew Hong", kelas: "X-4" },
            { name: "Rainer Arthur Setiawan", kelas: "X-6"},
            { name: "Patrick Wilson Tee", kelas: "X-7" }
        ]
    },
    {
        bidang: "Humas",
        members: [
            { name: "Stevianne Hanna Saerang", kelas: "X-4" },
            { name: "Mudita Nimmala", kelas: "X-5" },
            { name: "Rachel Wibisono", kelas: "X-3" },
            { name: "Kimberleigh Ayu Goenawan", kelas: "XI-4" },
            { name: "Natasya Caryn", kelas: "X-7" },
            { name: "Fernysia Edbert Samsie", kelas: "X-2" },
            { name: "Elena Natania Arifin", kelas: "X-2" },
            { name: "Faith Emanuella Rusli", kelas: "X-7" }
        ]
    },
    {
        bidang: "JHS English",
        members: [
            { name: "Made Renata Aditya Cahyadhi", kelas: "X-6" },
            { name: "Rain Chandra", kelas: "X-7" },
            { name: "Nicoleen Leonny", kelas: "XI-1" },
            { name: "Eveline Yolenta", kelas: "XI-1" },
            { name: "Fionna Giselle Setiawan", kelas: "XI-1" }
        ]
    },
    {
        bidang: "JHS IPA",
        members: [
            { name: "Aaron Kesler Lim", kelas: "X-1" },
            { name: "Oliver Roderick Adrian Talik", kelas: "X-4" },
            { name: "Natasha Zheng", kelas: "X-4" },
            { name: "Shannon Demetria Suwanto", kelas: "X-6" },
            { name: "Joshua Edrick Lim", kelas: "X-8" }
        ]
    },
    {
        bidang: "JHS IPS",
        members: [
            { name: "Jazzelyn Abigail Hanley", kelas: "X-2" },
            { name: "Celestine Victoria Wang", kelas: "X-4" },
            { name: "Marvel Khioe", kelas: "XI-9" }
        ]
    },
    {
        bidang: "JHS Matematika",
        members: [
            { name: "Luffy Lionheart Liduwan", kelas: "XI-2" },
            { name: "Judson Carlton Lim", kelas: "X-8" },
            { name: "Vanessa Rain", kelas: "X-6" },
            { name: "Marciano", kelas: "XI-7" },
            { name: "Timothy Gabriel Pek", kelas: "X-8" },
            { name: "William Isaac Tjhie", kelas: "X-6" }
        ]
    },
    {
        bidang: "Konsumsi",
        members: [
            { name: "Sean Huang", kelas: "X-3" },
            { name: "Celine Huang", kelas: "X-2" },
            { name: "Aurel Intan Annelies", kelas: "XI-3" },
            { name: "Janice Leticia", kelas: "XI-9" },
            { name: "Annika Lambey", kelas: "XI-8" },
            { name: "Beverly Tanzil", kelas: "X-8" }
        ]
    },
    {
        bidang: "Merchandise & Transport",
        members: [
            { name: "Keelyn Ivy Lukito", kelas: "X-10" },
            { name: "Madeleine Chen", kelas: "X-8" },
            { name: "Nadya Cherry Hendro", kelas: "X-10" },
            { name: "Karenza Sheli Pasisir", kelas: "XI-2" },
            { name: "Sharlene Grace Oenadi", kelas: "XI-2" },
            { name: "Viola Putri Setiawan", kelas: "XI-6" }
        ]
    },
    {
        bidang: "Modern Dance",
        members: [
            { name: "Nadine Ng", kelas: "XI-8" },
            { name: "Nadine Sachiko Darmutji", kelas: "XI-1" },
            { name: "Gabriel Clara Hermawan", kelas: "XI-9" },
            { name: "Felisitas Fiona Fanza", kelas: "X-7" },
            { name: "Nicole Lin", kelas: "X-9" },
            { name: "Danesya Odelia Dharto", kelas: "X-7" }
        ]
    },
    {
        bidang: "MonsoonSIM",
        members: [
            { name: "Richelle Liu", kelas: "X-1" },
            { name: "Clarissa Federica", kelas: "X-10" },
            { name: "Faye Valerie Lesley", kelas: "XI-2" },
            { name: "Stella Tristiana Widjaja", kelas: "XI-3" }
        ]
    },
    {
        bidang: "MUN",
        members: [
            { name: "Cheryl Marsha Heryanto", kelas: "X-4" },
            { name: "Carolynn Siah", kelas: "X-3" },
            { name: "Edbert Derris Leman", kelas: "X-6" },
            { name: "Rafaelle Alvaro Darmawan", kelas: "X-9" },
            { name: "Freja Almeira Masykuri", kelas: "XI-5" }
        ]
    },
    {
        bidang: "Mural",
        members: [
            { name: "Marietta Luvi Tjandra", kelas: "X-1" },
            { name: "Jasmine Arthalia Tan", kelas: "X-2" },
            { name: "Kezia Jocelyn Tasmaan", kelas: "X-2" },
            { name: "Joel Lim", kelas: "X-7" },
            { name: "Felicia Yemima Tambunan", kelas: "X-10" },
            { name: "Samanta Tavela Sulim", kelas: "XI-3" },
            { name: "Jocelyn Einslee", kelas: "XI-5" }
        ]
    },
    {
        bidang: "P3K",
        members: [
            { name: "Darren Nathanael Bachtiar", kelas: "XI-9" },
            { name: "Merlyn Eunice Chang", kelas: "XI-8" },
            { name: "Jennifer Olivia Chang", kelas: "X-10" },
            { name: "Venartha Valentio", kelas: "XI-2" },
            { name: "Olivia Harsono", kelas: "XI-3" },
            { name: "Myra Theresia Penanian", kelas: "X-10" },
            { name: "Catherine Kimberly Ng", kelas: "XI-8" },
            { name: "Acelynn Richel Kusuma", kelas: "XI-8" },
            { name: "Kaylene Fredrica Suryaatmadja", kelas: "XI-1" },
            { name: "Angelique Kyria Rusli", kelas: "X-2" },
            { name: "Steven Surtijo", kelas: "X-4" },
            { name: "Selina Prajitno", kelas: "X-8" },
            { name: "Ignasius Yosef Adi Kurnia", kelas: "XI-5" }
        ]
    },
    {
        bidang: "Perlengkapan",
        members: [
            { name: "Brianne Allegra Pratomo", kelas: "X-3" },
            { name: "Andreas Felix", kelas: "X-4" },
            { name: "Timothy Darren Kusumo", kelas: "X-2" },
            { name: "Evander Josua Adhyastha Sadi", kelas: "X-9" },
            { name: "Jonathan Halim", kelas: "XI-3" },
            { name: "Jessica Naomi", kelas: "XI-7" },
            { name: "Sebastian Kean Vifel Ellindra Zista", kelas: "XI-3" },
            { name: "Felics Gunawan", kelas: "XI-4" },
            { name: "Christopher Matthew Lasmana", kelas: "XI-1" },
            { name: "Isakhar Kaleb Mulyadi", kelas: "XI-7" },
            { name: "David Prijatna", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Publikasi",
        members: [
            { name: "Gracia Audrey Budiono", kelas: "XI-6" },
            { name: "Jocelyn Haosana", kelas: "XI-8" },
            { name: "Jaclyn Aditya The", kelas: "XI-3" },
            { name: "Katy Zoey Tanuwijaya", kelas: "XI-5" },
            { name: "Jovanka Gabriella", kelas: "X-10" },
            { name: "Jacqueline Audrey Wijaya", kelas: "X-7" },
            { name: "Gracia Tiffany Wirawan", kelas: "X-3" },
            { name: "Madison Suratman", kelas: "X-7" }
        ]
    },
    {
        bidang: "Ticketing",
        members: [
            { name: "Rachel Emily Harnoto", kelas: "XI-1" },
            { name: "Joanna Alexandra Liang", kelas: "XI-2" },
            { name: "Cherish Manzo", kelas: "XI-2" },
            { name: "Filbert Kuswara", kelas: "XI-3" },
            { name: "Jessica Setiawan", kelas: "XI-6" },
            { name: "Naomi Abigail Edward", kelas: "X-6" },
            { name: "Clarissa Aquila Benaiah", kelas: "X-9" }
        ]
    },
    {
        bidang: "Trophies",
        members: [
            { name: "Gabriel Ailenka Cayadi", kelas: "X-3" },
            { name: "Jesslyn Kireina Ailen", kelas: "X-4" },
            { name: "Gwynneth Christa", kelas: "X-7" },
            { name: "Eugenia Celine Chandra", kelas: "X-8" },
            { name: "Gabriella Hillary", kelas: "XI-1" }
        ]
    },
    {
        bidang: "Voli",
        members: [
            { name: "Nadine Averina Wijaya", kelas: "X-3" },
            { name: "Diego Leander Wilbert", kelas: "X-4" },
            { name: "Charice Sianes", kelas: "X-8" },
            { name: "Jovan Rafael Natalieputra", kelas: "X-8" },
            { name: "Kenneth William Sugiano", kelas: "X-9" },
            { name: "Fernando Rama William Purnomo", kelas: "XI-3" },
            { name: "Purisa Asthine Dira", kelas: "XI-4" },
            { name: "Abbigayle Jaya Halim", kelas: "XI-6" },
            { name: "Keysia Aurelia Rawung", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Web Design",
        members: [
            { name: "Eleazar Gosdavicraka", kelas: "XI-8" }
        ]
    },
    {
        bidang: "Keamanan",
        members: [
            { name: "Elena Leticia Hendrawan", kelas: "X-1" },
            { name: "Darren Valentian Mok", kelas: "XI-1" },
            { name: "Livia Reanata Lim", kelas: "XI-3" },
            { name: "Zefanya Michael Purnomo", kelas: "XI-5" },
            { name: "Ashvagosha Kho", kelas: "XI-6" },
            { name: "Vianna Gerent Brightly Tiwa", kelas: "XI-9" },
            { name: "Bill Moritz Su", kelas: "X-1" },
            { name: "Nicky Christian Wibowo Lu", kelas: "X-2" },
            { name: "Jonathan Felix Chandra", kelas: "X-3" },
            { name: "Benedictus Kioe", kelas: "X-4" },
            { name: "Darren Thaddeus Sopian", kelas: "X-5" },
            { name: "Joshua Henry Sutrisno", kelas: "X-5" },
            { name: "Feydrick Kanalie", kelas: "X-5" },
            { name: "Lie Sharonia Belle", kelas: "X-7" },
            { name: "Velin Gabriel Johansen", kelas: "X-7" },
            { name: "Matthew Monang Sitorus", kelas: "X-9" },
            { name: "Marvel Elbert Edyson", kelas: "XI-1" },
            { name: "Chan Andrew Wirawan", kelas: "XI-1" },
            { name: "Anthonius Sebastian Kurniawan", kelas: "XI-8" }
        ]
    }
];

const SOC1_2026 = () => {
    return (
        <div>
            <Nav />
            <div className="mt-28 mx-auto mb-10">
                <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
                    Hasil Seleksi Tahap Wawancara Open Recruitment SOC 2026
                </h1>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-left w-3/4 mb-7">
                    Setelah dilaksanakannya seleksi wawancara, maka telah ditentukan anggota-anggota baru sebagai berikut:
                </p>
            </div>
            <SOCGrid data={data} />
            <div className="flex flex-col items-center">
                <p className="text-lg font-bold mt-5">Jakarta, 5 Juni 2026</p>
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

export default SOC1_2026;
