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
            { name: "Jessie", kelas: "X-9" },
            { name: "Gad Cebrian Fabiano Teguh", kelas: "X-10" }
        ]
    },
    {
        bidang: "Badminton",
        members: [
            { name: "Joel Brandon Gunawan", kelas: "X-1" },
            { name: "Darius Theodore Bong", kelas: "X-2" },
            { name: "Candice Andrea", kelas: "X-2" },
            { name: "Ashley Samantha Zeng", kelas: "X-2" },
            { name: "Giselle Christina Hartono", kelas: "X-2" },
            { name: "Tiffany Allison Oedyanto", kelas: "X-2" },
            { name: "Jeremia Rex Dinatra", kelas: "X-3" },
            { name: "Stevia Sufriady", kelas: "X-6" },
            { name: "Arabelle Soetarso", kelas: "X-6" },
            { name: "Kyana Alicia", kelas: "X-7" },
            { name: "Darius Sudarmo", kelas: "XI-1" },
            { name: "William Andrew Huang", kelas: "XI-3" },
            { name: "Karen Edline Simon", kelas: "XI-8" },
            { name: "Janet Christie", kelas: "XI-9" }
        ]
    },
    {
        bidang: "Band",
        members: [
            { name: "Kenneth Nathaniel Tjan", kelas: "X-1" },
            { name: "Mike Louis Susanto Bhudiawan", kelas: "X-3" },
            { name: "Davendra Winston Kasmah", kelas: "X-3" },
            { name: "Lionel Lie Hadiwinata", kelas: "X-4" },
            { name: "Nathanael Armantyo Hutabalian", kelas: "X-8" },
            { name: "Frances Ivana Natawidha", kelas: "X-9" },
            { name: "Declan Hannael Adhypramana", kelas: "X-9" },
            { name: "Shiela Pranoto", kelas: "XI-3" }
        ]
    },
    {
        bidang: "Basket",
        members: [
            { name: "Zen Ermenegeldo Nicholas", kelas: "X-4" },
            { name: "Baby Aurellia Bagotz Purda", kelas: "X-4" },
            { name: "Seraphine Cipto Liwan", kelas: "X-7" },
            { name: "Kaori Eliana Talia", kelas: "X-7" },
            { name: "Charlene Angelina Tan", kelas: "X-8" },
            { name: "Evans Gideon Senduk", kelas: "XI-4" },
            { name: "Jovita Mayleen", kelas: "XI-8" },
            { name: "Karen Augustina Tantoso", kelas: "X-3" },
            { name: "Julian Elim Dharmanto", kelas: "XI-8" }
        ]
    },
    {
        bidang: "Business Plan",
        members: [
            { name: "Matthew Petra Suhanto", kelas: "X-10" },
            { name: "Selina Kandarto", kelas: "X-3" },
            { name: "Michelle Christina Nursiman", kelas: "X-6" },
            { name: "Cathleen Trisha Willona", kelas: "X-6" },
            { name: "Andy Tedjosukmono", kelas: "X-9" },
            { name: "Fellow Tedjomuljono", kelas: "XI-2" }
        ]
    },
    {
        bidang: "Dana",
        members: [
            { name: "Nicole Tokyo Liongdra", kelas: "X-4" },
            { name: "Chloe Alexandra Effendi", kelas: "X-5" },
            { name: "Adeline Valerie Handoko", kelas: "X-7" },
            { name: "Elise Tanaya Setiawan", kelas: "XI-4" },
            { name: "Claudia Augustine Sitorus", kelas: "XI-5" },
            { name: "Giselle Christabel Sendrik", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Dekor Lapangan",
        members: [
            { name: "Fabiola Jane Sutanto", kelas: "X-1" },
            { name: "Callysta Ubrinna Sunjaya", kelas: "X-10" },
            { name: "Graciella Fiorenza Thiesman", kelas: "X-4" },
            { name: "Chelline Velovita Karlowee", kelas: "X-4" },
            { name: "Caitlyn Abigail", kelas: "X-5" },
            { name: "Audrey Valencia Sutjipto", kelas: "X-7" },
            { name: "Joanne Patricia Wirawan", kelas: "X-8" },
            { name: "Valerie Rachel Gunadi", kelas: "X-9" },
            { name: "Richelle Florence Papilaya", kelas: "XI-4" },
            { name: "Jessica Aurellia Parman", kelas: "XI-8" }
        ]
    },
    {
        bidang: "Design Division",
        members: [
            { name: "Jocelyn Felicia Lisyanto", kelas: "X-1" },
            { name: "Zoey Chen", kelas: "X-3" },
            { name: "Nomi Widjaja", kelas: "X-5" },
            { name: "Ellanor Jovanka Huang", kelas: "X-5" },
            { name: "Gregory Dion Yusuf", kelas: "X-8" },
            { name: "Alika Dylan Budiman", kelas: "XI-4" }
        ]
    },
    {
        bidang: "EDS",
        members: [
            { name: "Madeline Setiawan", kelas: "X-1" },
            { name: "Lim Trinity Angelina", kelas: "X-1" },
            { name: "Nathan Aurelion", kelas: "X-10" },
            { name: "Gabrielle Angeline Stephanson Li", kelas: "X-4" },
            { name: "Ceravine schneider so", kelas: "X-6" },
            { name: "Jane Frances Chau", kelas: "X-8" },
            { name: "Jevon Alvaro Hanaka", kelas: "X-8" },
            { name: "Natasha Jocelyn Anton", kelas: "XI-1" },
            { name: "Marvell Josiah Kumala", kelas: "XI-3" },
            { name: "Michael Keelen Bunjamin", kelas: "XI-7" },
            { name: "Joshua Widjaja", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Esports",
        members: [
            { name: "Edward Kenneth Salim", kelas: "X-10" },
            { name: "Reynard Paulson Juadi", kelas: "X-10" },
            { name: "Lionel Yap", kelas: "X-2" },
            { name: "Bertrand Nathanael Prasetyo", kelas: "X-4" },
            { name: "Quenella Lachelle Madeline Kaloh", kelas: "XI-6" },
            { name: "Bryan Steven Jonathan", kelas: "X-5" },
            { name: "Matthew Benjamin Mandagi", kelas: "X-8" },
            { name: "Stanley Elisiano Angelo", kelas: "X-9" },
            { name: "Maurizio Matthew Soeroso", kelas: "XI-1" }
        ]
    },
    {
        bidang: "Film & Documentation",
        members: [
            { name: "Elbert Justin Lie", kelas: "X-1" },
            { name: "Valerie Tigris", kelas: "X-10" },
            { name: "Timothy Noel Jonggur Tua Sinaga", kelas: "X-10" },
            { name: "Kaitlyn Kallita Kusnandar", kelas: "X-3" },
            { name: "Victorianto Vincentcius Limodya", kelas: "X-5" },
            { name: "John Haren Tangputra", kelas: "X-5" },
            { name: "Christopher Dale Limence", kelas: "XI-4" }
        ]
    },
    {
        bidang: "Fotografi",
        members: [
            { name: "Constantina Cendekiawan", kelas: "XI-8" },
            { name: "Mahesa Wisesa", kelas: "XI-8" },
            { name: "America Juliet Sujanto", kelas: "X-9" },
            { name: "Rafael Ephron Djimantoro", kelas: "X-9" }
        ]
    },
    {
        bidang: "Futsal",
        members: [
            { name: "Clarence Feonard Sugiarto", kelas: "X-1" },
            { name: "Samuel Prabaswara", kelas: "X-3" },
            { name: "Kenneth Christensen", kelas: "X-10" },
            { name: "Rainer Arthur Setiawan", kelas: "X-6"},
            { name: "Patrick Wilson Tee", kelas: "X-7" },
            { name: "Shane Wibowo", kelas: "XI-6" },
            { name: "Carlton Invanio", kelas: "X-1" },
            { name: "Andrew Nathanael Hong", kelas: "X-4" },
            { name: "Ferrel Gabriel", kelas: "XI-5" },
        ]
    },
    {
        bidang: "Humas",
        members: [
            { name: "Kimberleigh Ayu Goenawan", kelas: "XI-4" },
            { name: "Florence Stephanie Janto", kelas: "X-9" },
            { name: "Lioren Wienny Huang", kelas: "X-9" },
            { name: "Faith Emanuella Rusli", kelas: "X-7" },
            { name: "Natasya Caryn", kelas: "X-7" },
            { name: "Callysta Elia Eleora", kelas: "X-7" },
            { name: "Kheyrin Evangelina Chandra", kelas: "X-7" },
            { name: "Felice Valeria Aurelia", kelas: "X-6" },
            { name: "Carmeline Japutra", kelas: "X-5" },
            { name: "Stevianne Hanna Saerang", kelas: "X-4" },
            { name: "Pheodore Chiara Lavernia", kelas: "X-4" },
            { name: "Rachel Wibisono", kelas: "X-3" },
            { name: "Fernysia Edbert Samsie", kelas: "X-2" },
            { name: "Elena Natania Arifin", kelas: "X-2" },
            { name: "Mudita Nimmala", kelas: "X-5" }
        ]
    },
    {
        bidang: "JHS English",
        members: [
            { name: "Jason Nicholas Wijaya", kelas: "X-4" },
            { name: "Naomi Azalia Gunawan", kelas: "X-4" },
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
            { name: "Josephine Grace Tanujawa", kelas: "X-5" },
            { name: "Shannon Demetria Suwanto", kelas: "X-6" },
            { name: "Joshua Edrick Lim", kelas: "X-8" }
        ]
    },
    {
        bidang: "JHS IPS",
        members: [
            { name: "Jazzelyn Abigail Hanley", kelas: "X-2" },
            { name: "Michelle Hie", kelas: "X-4" },
            { name: "Celestine Victoria Wang", kelas: "X-6" },
            { name: "Marvel Khioe", kelas: "XI-9" }
        ]
    },
    {
        bidang: "JHS Matematika",
        members: [
            { name: "Luffy Lionheart Liduwan", kelas: "XI-2" },
            { name: "Michael Christian Halim", kelas: "XI-2" },
            { name: "Marciano", kelas: "XI-7" },
            { name: "Judson Carlton Lim", kelas: "X-8" },
            { name: "Kenathan Ngadi Panghe", kelas: "X-2" },
            { name: "Felix Susanto Herdi", kelas: "X-2" },
            { name: "Vanessa Rain", kelas: "X-6" },
            { name: "William Isaac Tjhie", kelas: "X-6" },
            { name: "Jayron Sterling Khoe", kelas: "X-7" },
            { name: "Timothy Gabriel Pek", kelas: "X-8" },
            { name: "Brighten Theofilus Wijaya", kelas: "X-8" },
            { name: "Joshua Josepth Wibowo", kelas: "X-9" }
        ]
    },
    {
        bidang: "Konsumsi",
        members: [
            { name: "Aurel Intan Annelies Lamria Purba", kelas: "XI-4" },
            { name: "Annika Lambey", kelas: "XI-8" },
            { name: "Jauce Leticia", kelas: "XI-9" },
            { name: "Letizia Wong", kelas: "XI-6" },
            { name: "Keanna Sutanto", kelas: "XI-3" },
            { name: "Beverly Tanzil", kelas: "X-8" },
            { name: "Naomi", kelas: "X-6" },
            { name: "Sean Huang", kelas: "X-3" },
            { name: "Veera Chairil", kelas: "X-2" },
            { name: "Celine Huang", kelas: "X-2" },
            { name: "Viansy Vexia", kelas: "X-1" }
        ]
    },
    {
        bidang: "Merchandise & Transport",
        members: [
            { name: "Keelyn Ivy Lukito", kelas: "X-10" },
            { name: "Rachel Arciany Sofian", kelas: "X-10" },
            { name: "Nadya Cherry Hendro", kelas: "X-10" },
            { name: "Chelsea Alicia Lauren", kelas: "X-3" },
            { name: "Beatricia Allegra Pratomo", kelas: "X-7" },
            { name: "Madeleine Chen", kelas: "X-8" },
            { name: "Karenza Sheli Pasisir", kelas: "XI-2" },
            { name: "Sharlene Grace Oenadi", kelas: "XI-2" },
            { name: "Viola Putri Setiawan", kelas: "XI-6" }
        ]
    },
    {
        bidang: "Modern Dance",
        members: [
            { name: "Verlin Vexia", kelas: "X-2" },
            { name: "Aretha Olive Budiman", kelas: "X-3" },
            { name: "Christa Jade Widjaya", kelas: "X-3" },
            { name: "Barbara Queen Adrienne", kelas: "X-5" },
            { name: "Darielle Kurinawan Totong", kelas: "X-5" },
            { name: "Felisitas Fiona Fanza", kelas: "X-7" },
            { name: "Danesya Odelia Dharto", kelas: "X-7" },
            { name: "Natalie Evangeline Tanuwidjaja", kelas: "X-9" },
            { name: "Nicolle Lin", kelas: "X-9" },
            { name: "Nadine Sachiko Darmutji", kelas: "XI-1" },
            { name: "Nadine Ng", kelas: "XI-8" },
            { name: "Gabriel Clara Hermawan", kelas: "XI-9" }
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
            { name: "Carolynn Siah", kelas: "X-3" },
            { name: "Cheryl Marsha Heryanto", kelas: "X-4" },
            { name: "Edbert Derris Leman", kelas: "X-6" },
            { name: "Rafaelle Alvaro Darmawan", kelas: "X-9" },
            { name: "Virenka Rheynna Tan", kelas: "X-9" },
            { name: "Freja Almeira Masykuri", kelas: "XI-5" },
            { name: "Chantaleia Sachi Hendratno", kelas: "XI-9" }
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
            { name: "Timothy Darren Kusumo", kelas: "X-2" },
            { name: "Brianne Allegra Pratomo", kelas: "X-3" },
            { name: "Tristan Hilario Sufi", kelas: "X-3" },
            { name: "Eugenio Mikael Pramono", kelas: "X-3" },
            { name: "Richard Michael Evan", kelas: "X-8" },
            { name: "Evander Josua Adhyastha Sadi", kelas: "X-9" },
            { name: "Christopher Matthew Lasmana", kelas: "XI-1" },
            { name: "Jonathan Halim", kelas: "XI-3" },
            { name: "Sebastian Kean Vifel Ellindra Zista", kelas: "XI-3" },
            { name: "Fernando Rama William Purnomo", kelas: "XI-3" },
            { name: "Nicholas Reynald Lawanto", kelas: "XI-4" },
            { name: "Felics Gunawan", kelas: "XI-4" },
            { name: "David Prijatna", kelas: "XI-7" },
            { name: "Isakhar Kaleb Mulyadi", kelas: "XI-7" },
            { name: "Jacob Flint Sumali", kelas: "XI-7" },
            { name: "Jessica Naomi", kelas: "XI-7" },
            { name: "Andreas Felix", kelas: "X-4" }
        ]
    },
    {
        bidang: "Publikasi",
        members: [
            { name: "Lovicia Cahyadi", kelas: "X-1" },
            { name: "Doreen Brigitta Saputra", kelas: "X-2" },
            { name: "Gracia Tiffany Wirawan", kelas: "X-3" },
            { name: "Madison Suratman", kelas: "X-7" },
            { name: "Jacqueline Audrey Wijaya", kelas: "X-7" },
            { name: "Claire Santoso", kelas: "XI-2" },
            { name: "Jaclyn Aditya The", kelas: "XI-3" },
            { name: "Katy Zoey Tanuwijaya", kelas: "XI-5" },
            { name: "Gracia Audrey Budiono", kelas: "XI-6" },
            { name: "Jocelyn Haosana", kelas: "XI-8" },
            { name: "Jovanka Gabriella", kelas: "X-10" }
        ]
    },
    {
        bidang: "Ticketing",
        members: [
            { name: "Joelyn Zhang", kelas: "X-2" },
            { name: "Marta Valencia", kelas: "X-2" },
            { name: "Kimberly Nayadi", kelas: "X-3" },
            { name: "Jasper Bernard Sanjaya", kelas: "X-3" },
            { name: "Naomi Abigail Edward", kelas: "X-6" },
            { name: "Clarissa Aquila Benaiah", kelas: "X-9" },
            { name: "Rachel Emily Harnoto", kelas: "XI-1" },
            { name: "Cherish Manzo Felicia", kelas: "XI-2" },
            { name: "Joanna Alexandra Liang", kelas: "XI-2" },
            { name: "Filbert Kuswara", kelas: "XI-3" },
            { name: "Jessica Setiawan", kelas: "XI-6" }
        ]
    },
    {
        bidang: "Trophies",
        members: [
            { name: "Joanna Ryska Erickson", kelas: "X-1" },
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
            { name: "Nicholas Hugo Iswandy", kelas: "X-1" },
            { name: "Nadine Averina Wijaya", kelas: "X-3" },
            { name: "Diego Leander Wilbert", kelas: "X-4" },
            { name: "Charice Sianes", kelas: "X-8" },
            { name: "Jovan Rafael Natalieputra", kelas: "X-8" },
            { name: "Kenneth William Sugiano", kelas: "X-9" },
            { name: "Purisa Asthine Dira", kelas: "XI-4" },
            { name: "Celine Josetta Boentara", kelas: "XI-5" },
            { name: "Abbigayle Jaya Halim", kelas: "XI-6" },
            { name: "Keysia Aurelia Rawung", kelas: "XI-7" }
        ]
    },
    {
        bidang: "Web Division",
        members: [{ name: "Eleazar Gosdavicraka", kelas: "XI-8" }]
    },
    {
        bidang: "Keamanan",
        members: [
            { name: "Bill Moritz Su", kelas: "X-1" },
            { name: "Elena Leticia Hendrawan", kelas: "X-1" },
            { name: "Ray Hayden Rahardja", kelas: "X-1" },
            { name: "Visakha Panna Pindi Kisata", kelas: "X-10" },
            { name: "Aiden Edsel Hanara", kelas: "X-2" },
            { name: "Nicky Christian Wibowo Lu", kelas: "X-2" },
            { name: "Jonathan Felix Chandra", kelas: "X-3" },
            { name: "Benedictus Kioe", kelas: "X-4" },
            { name: "Max Gabriel Hariyanto", kelas: "X-5" },
            { name: "Theodore Kenneth Setiady", kelas: "X-5" },
            { name: "Darren Thaddeus Sopian", kelas: "X-5" },
            { name: "Joshua Henry Sutrisno", kelas: "X-5" },
            { name: "Feydrick Kanalie", kelas: "X-5" },
            { name: "Nathanael Polendry", kelas: "X-6" },
            { name: "Carmane Wilbert Soetopo", kelas: "X-6" },
            { name: "Lie Sharonia Belle", kelas: "X-7" },
            { name: "Nathan Aurelius Halim", kelas: "X-7" },
            { name: "Velin Gabriel Johansen", kelas: "X-7" },
            { name: "Matthew Monang Sitorus", kelas: "X-9" },
            { name: "Josh Calvin Goh", kelas: "XI-1" },
            { name: "Kezia Adelynn Phondiadi", kelas: "XI-1" },
            { name: "Marvel Elbert Edyson", kelas: "XI-1" },
            { name: "Chan Andrew Wirawan", kelas: "XI-1" },
            { name: "Darren Valentian Mok", kelas: "XI-1" },
            { name: "Livia Reanata Lim", kelas: "XI-3" },
            { name: "Jason Constantine", kelas: "XI-3" },
            { name: "Cherie Arlene", kelas: "XI-4" },
            { name: "Zefanya Michael Purnomo", kelas: "XI-5" },
            { name: "Ashvagosha Kho", kelas: "XI-6" },
            { name: "Maximillian Abraham", kelas: "XI-6" },
            { name: "Lionel Matthew Melven", kelas: "XI-6" },
            { name: "Nicholas Febiyanto", kelas: "XI-7" },
            { name: "Anthonius Sebastian Kurniawan", kelas: "XI-8" },
            { name: "Pande Made Kenjioka Kusuma Hartana", kelas: "XI-8" },
            { name: "Edward Russell Ruslim", kelas: "XI-8" },
            { name: "Vianna Gerent Brightly Tiwa", kelas: "XI-9" }
        ]
    }
];

const SOC1_2026 = () => {
    return (
        <div>
            <Nav />
            <div className="mt-28 mx-auto mb-10">
                <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
                    Hasil Seleksi Tahap Berkas Open Recruitment SOC 2026
                </h1>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-left w-3/4 mb-7">
                    Setelah dilaksanakannya seleksi berkas pada <b>30 April 2026</b>, maka telah ditentukan siswa/siswi yang lanjut pada seleksi tahap Wawancara sebagai berikut:
                </p>
            </div>
            <SOCGrid data={data} />
            <div className="flex flex-col items-center">
                <p className="text-lg font-bold mt-5">Jakarta, 1 Mei 2026</p>
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
