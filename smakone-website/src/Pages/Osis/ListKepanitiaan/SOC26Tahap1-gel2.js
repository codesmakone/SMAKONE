import React from "react";
import { NavLink } from "react-router-dom";

import ttd_buOP from "../../../Image/Osis/ttd BuOP.png";
import ttd_steven from "../../../Image/Osis/ttd_Steven.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
        "bidang": "Acara",
        "members": [
            { "name": "Angelica Naomi Antony", "kelas": "X-9" },
            { "name": "Elisa Jean Walangitang", "kelas": "X-2" },
            { "name": "Fionna Estelyccia Purwanto", "kelas": "X-3" },
            { "name": "Jordan Yap", "kelas": "X-7" },
            { "name": "Justin Lawrence The", "kelas": "X-7" },
            { "name": "Maria Joanna Husin", "kelas": "X-5" },
            { "name": "Matthew Evander Hie", "kelas": "X-9" },
            { "name": "Natalie Tranquilina Santoso", "kelas": "X-5" }
        ]
    },
    {
        "bidang": "Badminton",
        "members": [
            { "name": "Abigail Dominique Pangaribuan", "kelas": "X-5" },
            { "name": "Darius Theodore Bong", "kelas": "XI-1" },
            { "name": "Darren Carlisle Nathaniel", "kelas": "XII-4" },
            { "name": "Evangelina Widjanarko", "kelas": "X-3" },
            { "name": "Evangeline Olivia Lee", "kelas": "X-8" },
            { "name": "Fransiskus Felixiano", "kelas": "X-8" },
            { "name": "Gad Cebrian Fabiano Teguh", "kelas": "XI-10" },
            { "name": "Jemima Eunike Himawan", "kelas": "X-3" },
            { "name": "Kayla Gabrielle Bong", "kelas": "X-4" },
            { "name": "Kenza Eddelies Wen", "kelas": "X-8" },
            { "name": "Kenzo Aurellio Tandarahardjo", "kelas": "X-9" },
            { "name": "Kimberly Lady Katojaya", "kelas": "X-3" },
            { "name": "Marta Valencia", "kelas": "XI-2" },
            { "name": "Rafaela Abigail Paterisia Hasibuan", "kelas": "X-9" },
            { "name": "Sammy Michael Yang", "kelas": "X-8" },
            { "name": "Samuel Jethro Cahyadi", "kelas": "XII-8" },
            { "name": "Stacey Graciella Krisdianto", "kelas": "X-3" },
            { "name": "Starlene Faustine Luping", "kelas": "X-2" },
            { "name": "Theodore Ryuken Halim", "kelas": "X-1" }
        ]
    },
    {
        "bidang": "Band",
        "members": [
            { "name": "Chelsea Jesslyn Huang", "kelas": "X-1" },
            { "name": "Renata Jocelyn Liemel", "kelas": "X-5" },
            { "name": "Chelsea Gracia Jacob", "kelas": "X-6" },
            { "name": "Justin Ethan Lionard", "kelas": "X-6" },
            { "name": "Dylan Matthew", "kelas": "X-9" },
            { "name": "Joel Brandon Gunawan", "kelas": "XI-3" },
            { "name": "Kirsty Aurelia Wisanto", "kelas": "XI-5" },
            { "name": "Gregory Dion Yusuf", "kelas": "XI-10" },
            { "name": "Aeka Lakeesha Tanudjaja", "kelas": "XII-5" },
            { "name": "Davon Abisha Cahyana", "kelas": "XII-5" }
        ]
    },
    {
        "bidang": "Basket",
        "members": [
            { "name": "Brayden Royce Hermanto", "kelas": "X-7" },
            { "name": "Calista Maheswari Regina Purnama", "kelas": "X-9" },
            { "name": "Clayton Invanio", "kelas": "XI-1" },
            { "name": "Lana Renatta Kosasih", "kelas": "X-2" },
            { "name": "Lance wellington", "kelas": "XII-2" },
            { "name": "Mike Louis Susanto Bhudiawan", "kelas": "XI-3" },
            { "name": "Zen Ermenegeldo Nicholas", "kelas": "XI-3" },
            { "name": "Hans Davis Pranata", "kelas": "X-1" },
            { "name": "SILVER SEAN KUNTOAJI", "kelas": "XII-4" },
            { "name": "Dylan Clement Louis", "kelas": "X-2" },
            { "name": "Severus aiden sebastian", "kelas": "X-5" }
        ]
    },
    {
        "bidang": "Business Plan",
        "members": [
            { "name": "Carlton Invanio",  "kelas": "XI-3" },
            { "name": "Gabriella Angeline Tanuwijaya", "kelas": "X-8" },
            { "name": "Richelle Chloe Gunawan", "kelas": "X-2" },
            { "name": "Alena Michaella Christabelle", "kelas": "X-7" }
        ]
    },
    {
        "bidang": "Dana",
        "members": [
            { "name": "Beatricia Allegra Pratomo", "kelas": "XI-8" },
            { "name": "Charice Suryajaya", "kelas": "X-8" },
            { "name": "Charlene Song", "kelas": "X-6" },
            { "name": "Edrick Hui", "kelas": "X-4" },
            { "name": "Georgia Pax Nielfie Silalahi", "kelas": "X-8" },
            { "name": "Joanna Phang", "kelas": "X-2" },
            { "name": "Kennedy Warren Then", "kelas": "XI-2" },
            { "name": "Lionel Nathan Solaiman", "kelas": "X-4" },
            { "name": "pande Nyoman Flaviano Kusuma Wardana", "kelas": "X-3" },
            { "name": "Selly Florencia Mok", "kelas": "XI-6" },
            { "name": "Sophie Yang", "kelas": "X-1" },
            { "name": "Timothy amadeus komala", "kelas": "X-4" }
        ]
    },
    {
        "bidang": "Dekor Lapangan",
        "members": [
            { "name": "Ayla Adellyne", "kelas": "X-1" },
            { "name": "Hasianta Odette Wahyunanindra", "kelas": "X-1" },
            { "name": "Johanna Harijanto", "kelas": "X-1" },
            { "name": "Jeanice Wijaya", "kelas": "X-2" },
            { "name": "Gwen Alicia Dharmanto", "kelas": "X-4" },
            { "name": "Josephine Olivia Layadi", "kelas": "X-6" },
            { "name": "Madeline Liu", "kelas": "X-7" },
            { "name": "Cathelyn Alenna", "kelas": "X-9" },
            { "name": "Edeline Karine Nathanael", "kelas": "X-9" },
            { "name": "Lovicia Cahyadi", "kelas": "XI-2" },
            { "name": "Michelle Clarissa Thiehunan", "kelas": "XI-10" },
            { "name": "Viny Graciella Tan", "kelas": "XII-3" },
            { "name": "Fayola Arista", "kelas": "XII-6" }
        ]
    },
    {
        "bidang": "Design Division",
        "members": [
            { "name": "Katie Nathaniela Saputra", "kelas": "X-3" },
            { "name": "Liony Thesalonika Santoso", "kelas": "XI-9" },
            { "name": "Olive Arianne Tjen", "kelas": "X-1" },
            { "name": "Shannon Christabelle Wang", "kelas": "X-6" },
            { "name": "Jesslyn Valerie Kangga", "kelas": "X-1" },
            { "name": "Jeslyn Mayuri", "kelas": "X-3" },
            { "name": "Jemima Lemuela Liong", "kelas": "X-2" },
            { "name": "Haylee Josephine Kurniawan", "kelas": "XI-9" },
            { "name": "Elaine Chrysellie", "kelas": "X-5" },
            { "name": "Dasha Riani Pasaribu", "kelas": "XI-6" },
            { "name": "Brianna Cheryll Widjaja", "kelas": "XI-10" },
            { "name": "Beverlly Andromeda Perdana", "kelas": "X-5" },
            { "name": "Abigail Gunawan", "kelas": "X-1" }
        ]
    },
    {
        "bidang": "EDS",
        "members": [
            { "name": "Charice Vanessa Anwar", "kelas": "X-3" },
            { "name": "Evangeline Alexandra Nauli Parapat", "kelas": "XI-7" },
            { "name": "Felicia Kim Poliman", "kelas": "X-5" },
            { "name": "Gabrielle Angeline Stephanson Li", "kelas": "XI-5" },
            { "name": "Keshya Cordelia", "kelas": "X-3" },
            { "name": "Megan Valencia Kho", "kelas": "X-9" },
            { "name": "Nathania Regina Chayadi", "kelas": "X-8" }
        ]
    },
    {
        "bidang": "Esports",
        "members": [
            { "name": "Bertrand Nathanael Prasetyo", "kelas": "XI-1" },
            { "name": "Duncan Yang", "kelas": "X-1" },
            { "name": "Jamie Constantine", "kelas": "XII-8" },
            { "name": "Jerrald Clement Macken", "kelas": "X-5" },
            { "name": "Jonathan Davin Sasmito", "kelas": "XI-6" },
            { "name": "Joshua Theodore Suryanto", "kelas": "XI-4" },
            { "name": "Kelsey Valery Irawan", "kelas": "X-7" },
            { "name": "Marcello Josua Partogi", "kelas": "X-5" },
            { "name": "Nathan Wiseborn Tjung", "kelas": "X-6" },
            { "name": "Nikolas Hayden Pande", "kelas": "X-2" },
            { "name": "Reynaldo Frances Hendarto", "kelas": "X-1" },
            { "name": "Reynard Paulson Juadi", "kelas": "XI-9" },
            { "name": "Richard Franscuelo Steven", "kelas": "X-7" },
            { "name": "Shannon Kelita Midi Darmawan", "kelas": "X-7" }
        ]
    },
    {
        "bidang": "Film & Documentation",
        "members": [
            { "name": "Alysha Callista Irwandi", "kelas": "X-9" },
            { "name": "Carlson Sukiman", "kelas": "X-3" },
            { "name": "Gabrielle Angelina Sugandi", "kelas": "X-2" },
            { "name": "Raphael Arlest Krisna", "kelas": "X-2" },
            { "name": "Stefanny Fransiska Oenardy", "kelas": "X-6" },
            { "name": "Valerie Faith Leo", "kelas": "X-3" }
        ]
    },
    {
        "bidang": "Fotografi",
        "members": [
            { "name": "Hanna Joey Vania", "kelas": "X-4" },
            { "name": "Jesslyn Setiawan", "kelas": "X-4" },
            { "name": "Joshua Jose Kuntara", "kelas": "XI-5" },
            { "name": "Richelle Christabel Sendrik", "kelas": "XII-1" },
            { "name": "Yesica Andriani Br Sianturi", "kelas": "XII-2" },
            { "name": "Virenka Rheynna Tan", "kelas": "XI-5" }
        ]
    },
    {
        "bidang": "Futsal",
        "members": [
            { "name": "Aiden Edsel Hanara", "kelas": "XI-4" },
            { "name": "Brighten Theofilus Wijaya", "kelas": "XI-9" },
            { "name": "Collin Luo", "kelas": "X-1" },
            { "name": "Daviano Licco Ongsono", "kelas": "X-3" },
            { "name": "Ethan Zach Weidris", "kelas": "X-5" },
            { "name": "Ethantheo Therim Sutejo", "kelas": "X-7" },
            { "name": "Ferrel Gabriel", "kelas": "XII-7" },
            { "name": "Jayden Elchanan Timothy", "kelas": "X-7" },
            { "name": "Vidy Immanuel Tan", "kelas": "X-6" },
            { "name": "Joey Wayne Widjaja", "kelas": "X-5" },
            { "name": "Kenneth Gerrald Kurniawan", "kelas": "X-1" },
            { "name": "Kingsley Aurick Paulus", "kelas": "X-3" },
            { "name": "Lim Ryo Nathanael", "kelas": "X-2" },
            { "name": "Nigel Einslee", "kelas": "X-1" },
            { "name": "Wilson Patrick Setiawan", "kelas": "XI-10" }
        ]
    },
    {
        "bidang": "Humas",
        "members": [
            { "name": "Amabella Calita Sitepu", "kelas": "X-5" },
            { "name": "Anaya Christa Basauli Simarmata", "kelas": "X-8" },
            { "name": "Andrea Putri Setiadi", "kelas": "X-9" },
            { "name": "Angelina Josephine Kwok", "kelas": "X-4" },
            { "name": "Angella Danielle Wu", "kelas": "X-5" },
            { "name": "Arcelia Nalini Manalu Rumaijuk", "kelas": "X-8" },
            { "name": "Arciella Tandiono", "kelas": "X-4" },
            { "name": "Beatrice Hannah Salim", "kelas": "X-9" },
            { "name": "Bradley Aurelio Tan", "kelas": "X-8" },
            { "name": "Caroline Aprilia Then", "kelas": "XI-3" },
            { "name": "Catherine Margaretha Anabelle", "kelas": "X-1" },
            { "name": "CHLOE ALEXANDRA EFFENDI", "kelas": "XI-6" },
            { "name": "Gracellyn Handoko", "kelas": "X-1" },
            { "name": "Jennifer", "kelas": "X-6" },
            { "name": "Karina Kwan", "kelas": "X-8" },
            { "name": "Kheyrin Evangelina Chandra", "kelas": "XI-1" },
            { "name": "Lynette Samantha", "kelas": "X-4" },
            { "name": "matthew tansulla", "kelas": "X-4" },
            { "name": "Naomi", "kelas": "XI-6" },
            { "name": "Nathanael Melvin", "kelas": "X-5" },
            { "name": "Odeleya Sincere Kurniawan", "kelas": "X-4" },
            { "name": "Raphaella Abigail Adji Dharma", "kelas": "X-7" },
            { "name": "Thirza Leandra Sembiring", "kelas": "X-4" },
            { "name": "Vanya Clarissa Maha", "kelas": "X-4" }
        ]
    },
    {
        "bidang": "JHS English",
        "members": [
            { "name": "Dina Maria Novayu Sitohang", "kelas": "XI-7" },
            { "name": "Felice Surya Aliwarga", "kelas": "X-7" },
            { "name": "Ignacia S Senjaya", "kelas": "XI-6" },
            { "name": "Jayron Sterling Khoe", "kelas": "XI-4" },
            { "name": "Jesslyn Richelle Khoe", "kelas": "XI-9" },
            { "name": "Nathanael Suryadarma", "kelas": "X-3" }
        ]
    },
    {
        "bidang": "JHS IPA",
        "members": [
            { "name": "Kirana Anggraini", "kelas": "X-2" },
            { "name": "Noah Immanuel Siahaan", "kelas": "X-4" },
            { "name": "Josephine Kayla Wisata", "kelas": "X-5" },
            { "name": "Brandon Gabriel Yustiano Jordan Bija", "kelas": "X-6" },
            { "name": "Tara Emilia chia", "kelas": "X-6" },
            { "name": "Josephine Grace Tanujaya", "kelas": "XI-2" },
            { "name": "Visakha Panna Pindi Kisata", "kelas": "XI-2" },
            { "name": "Michael Thio", "kelas": "XI-4" },
            { "name": "Nathanael Lucretio Yusar", "kelas": "XI-6" },
            { "name": "Davino Sugianto", "kelas": "XII-2" }
        ]
    },
    {
        "bidang": "JHS IPS",
        "members": [
            { "name": "Christa Jade Widjaya", "kelas": "XI-5" },
            { "name": "Elise Tanaya Setiawan", "kelas": "XII-8" },
            { "name": "Jocelyn Trisna Suwanda", "kelas": "XII-3" },
            { "name": "Justin Sinclair", "kelas": "XI-2" },
            { "name": "Michelle Tan", "kelas": "XII-6" },
            { "name": "Vania Graciela Santoso", "kelas": "XII-8" }
        ]
    },
    {
        "bidang": "JHS Matematika",
        "members": [
            { "name": "Bradley Colin Rusli", "kelas": "X-4" },
            { "name": "Josephine Novena Elizabeth", "kelas": "X-4" },
            { "name": "Marcello Benedict", "kelas": "X-6" },
            { "name": "Nicholas Lay", "kelas": "X-4" }
        ]
    },
    {
        "bidang": "Konsumsi",
        "members": [
            { "name": "Adeline Felicia Lee", "kelas": "X5" },
            { "name": "Agnes Jesica Miranda", "kelas": "X2" },
            { "name": "Aurelia Jocellyn Manujaya", "kelas": "X5" },
            { "name": "Carla Adeline Hidayat", "kelas": "X3" },
            { "name": "Charlyne Gunawan", "kelas": "X2" },
            { "name": "Cleocta Egerei O.S", "kelas": "XI4" },
            { "name": "Elisha Gunawan", "kelas": "X4" },
            { "name": "Elvira Christa", "kelas": "X6" },
            { "name": "Fionna Sumittadevi", "kelas": "XI9" },
            { "name": "Grace Agnes Chandra", "kelas": "X6" },
            { "name": "Joline Kiarra", "kelas": "XI3" },
            { "name": "Joyce Grace", "kelas": "XI8" },
            { "name": "Maxwell Adrien", "kelas": "X7" },
            { "name": "Michella Valerie", "kelas": "X3" },
            { "name": "Richard Michael", "kelas": "XI6" },
            { "name": "Ryland Irvin", "kelas": "X6" },
            { "name": "Tasha Hartanto", "kelas": "X1" }
        ]
    },
    {
        "bidang": "Merchandise & Transport",
        "members": [
            { "name": "Aileen Pringle Hin", "kelas": "X-7" },
            { "name": "Alessandra Kelly Limanto", "kelas": "X-9" },
            { "name": "Aretha Olive Budiman", "kelas": "XI-5" },
            { "name": "Brenda Victoria Michelle Abram", "kelas": "X-6" },
            { "name": "Chelsea Alicia Lauren", "kelas": "XI-4" },
            { "name": "Evelyn Renata Christian", "kelas": "X-3" },
            { "name": "Feodor Evie Pranata", "kelas": "X-1" },
            { "name": "Gracella Patricia", "kelas": "XI-1" },
            { "name": "Javelyn Javon Jong", "kelas": "XI-5" },
            { "name": "Naoko Pema", "kelas": "X-4" },
            { "name": "Tatyana Lemuel", "kelas": "XI-9" },
            { "name": "Vannesa Junardi Chua", "kelas": "X-3" },
            { "name": "Viola Christania Tjahyadi", "kelas": "X-5" }
        ]
    },
    {
        "bidang": "Modern Dance",
        "members": [
            { "name": "Barbara Queen Adrienne", "kelas": "XI-5" },
            { "name": "Darielle Kurniawan Totong", "kelas": "XI-5" },
            { "name": "Giselle Theofilus Wijaya", "kelas": "X-6" },
            { "name": "Graciella Anastasya Sutanto", "kelas": "XI-8"},
            { "name": "Natalizia Rainy Sualdani", "kelas": "X-1" },
            { "name": "Richelle Dewey Valerine", "kelas": "X-9" },
            { "name": "Viansy Vexia", "kelas": "XI-1" }
        ]
    },
    {
        "bidang": "MonsoonSIM",
        "members": [
            { "name": "Patricia Apriliani Supriyanto", "kelas": "XI-9" }
        ]
    },
    {
        "bidang": "MUN",
        "members": [
            { "name": "Annabeth Wong", "kelas": "XI3" },
            { "name": "Miley Caralyn Tan", "kelas": "X1" }
        ]
    },
    {
        "bidang": "Mural",
        "members": [
            { "name": "Emily Sugiono", "kelas": "X-1" },
            { "name": "Fiona Valencia", "kelas": "X-2" }, 
            { "name": "Jolie Eugenia", "kelas": "X-5" },
            { "name": "Elleanore Alyshia Rolind", "kelas": "X-6" },
            { "name": "Michelle Madeline", "kelas": "X-9" },
            { "name": "Veera Lalita Chairil", "kelas": "XI-1" },
            { "name": "Verlin Vexia", "kelas": "XI-2" },
            { "name": "Gabriella Marjorie Christianty", "kelas": "XI-3" },
            { "name": "Natanoella Davina Lau", "kelas": "XI-5" },
            { "name": "Giovanie Ferren Sutanto", "kelas": "XI-8" },
            { "name": "Marleen Gloryanne Tjandra", "kelas": "XI-10" }
        ]
    },
    {
        "bidang": "P3K",
        "members": [
            { "name": "Alicia Calista", "kelas": "XI-7" },
            { "name": "Christabelle Andrea Putri Onsoe", "kelas": "XI-5" },
            { "name": "Daniel Timothy Setiawan", "kelas": "XI-8" },
            { "name": "Howard Chung", "kelas": "XI-7" },
            { "name": "Lioren Wienny Huang", "kelas": "XI-3" },
            { "name": "Seraphine Cipto Liwan", "kelas": "XI-5" },
            { "name": "Vallerie Yuvelina Putri", "kelas": "XI-8" }
        ]
    },
    {
        "bidang": "Perlengkapan",
        "members": [
            { "name": "Adelaine Beatrix Lyni Ponto", "kelas": "X-5" },
            { "name": "Albert Tito Ebenhaezer Simanjuntak", "kelas": "X-5" },
            { "name": "Alicia Aurelia Lau", "kelas": "X-8" },
            { "name": "Caitlyn Annabelle Tambunan", "kelas": "X-4" },
            { "name": "Charistio Yeciro Yonadab", "kelas": "X-8" },
            { "name": "Christhard Paulo Desiderius Pangaribuan", "kelas": "X-8" },
            { "name": "Colin Amadeo Tsai", "kelas": "X-2" },
            { "name": "Davin Nathanael Arifin", "kelas": "XII-1" },
            { "name": "Edbert Matthew Linardi", "kelas": "X-7" },
            { "name": "Evann Xie", "kelas": "XI-3" },
            { "name": "Gabriell Nikolaas Suryajaya", "kelas": "X-5" },
            { "name": "Garrett Earl Hidayat", "kelas": "XII-3" },
            { "name": "Ignacio Lionel Joseph Budihardja", "kelas": "X-2" },
            { "name": "Jason Raharjo", "kelas": "XI-7" },
            { "name": "Keenan Ark Siahaan", "kelas": "XI-7" },
            { "name": "Kenjiyory Gyan Bhimasena Idrian", "kelas": "XI-6" },
            { "name": "Kenzy Nicholas Kwan", "kelas": "X-9" },
            { "name": "Marvel Owen Supratman", "kelas": "XI-3" },
            { "name": "Milliani Phong", "kelas": "X-8" },
            { "name": "Timothy Rafael Teguh", "kelas": "X-8" },
            { "name": "Vincent Tanaya Lim", "kelas": "X-3" },
            { "name": "Abednego Putra Pratama", "kelas": "XI-8" },
            { "name": "Shiellya Marcha Prawiro", "kelas": "X-7" },
            { "name": "Alfonsus Herobe Clementino", "kelas": "X-6" }
        ]
    },
    {
        "bidang": "Publikasi",
        "members": [
            { "name": "Angeline Lynelle Lowena", "kelas": "XI-3" },
            { "name": "Cherish Gradia Erlambang Liem", "kelas": "X-6" },
            { "name": "Elaine Valencia Liu", "kelas": "X-6" },
            { "name": "Evangeline Claire Christiven", "kelas": "X-9" },
            { "name": "Jesslyn Vistalim", "kelas": "X-8" },
            { "name": "Jocelyn Carissa", "kelas": "X-8" },
            { "name": "Laura Olivia Budiman", "kelas": "X-5" },
            { "name": "Rachel Victoria Saputro", "kelas": "X-4" },
            { "name": "Ribka Joseba Stella Lumbantoruan", "kelas": "X-7" },
            { "name": "Sharleen Gowarman", "kelas": "X-3" },
            { "name": "Sharlene Evangeline Hillary", "kelas": "X-9" },
            { "name": "Viera Kay Praiseley", "kelas": "XI-4" },
            { "name": "Yeremia Armando Damanik", "kelas": "X-8" }
        ]
    },
    {
        "bidang": "Ticketing",
        "members": [
            { "name": "Annabelle Elaine Clarice Derasak", "kelas": "X-3" },
            { "name": "Celine Sweetheart Liduwan", "kelas": "X-3" },
            { "name": "Cleon Wyn Setiawan", "kelas": "XI-8" },
            { "name": "Doreen Brigitta Saputra", "kelas": "XI-1" },
            { "name": "Fiona Calista Setiawan", "kelas": "XI-1" },
            { "name": "Frederick Fievel Fanza", "kelas": "X-3" },
            { "name": "Gabrio Aaron Wijaya", "kelas": "XII-4" },
            { "name": "Joel Ecclesian Chandra", "kelas": "X-6" },
            { "name": "Kireina Karmelia Siahaan", "kelas": "X-8" },
            { "name": "Lionell Austin Hermando", "kelas": "XI-4" },
            { "name": "Orlin speranza setiadi", "kelas": "X-8" },
            { "name": "Stanley Elisiano Angelo", "kelas": "XI-7" },
            { "name": "Darrell Sebastian Tanusubandi", "kelas": "X-3" }
        ]
    },
    {
        "bidang": "Trophies",
        "members": [
            { "name": "Catherine Elizabeth Salim", "kelas": "X-6" },
            { "name": "Seraphim Theodora Pasaribu", "kelas": "X-6" },
            { "name": "Florence Stephanie Janto", "kelas": "XI-7" },
            { "name": "Callysta Elia", "kelas": "XI-9" },
            { "name": "Joanna Ryska Erickson", "kelas": "XI-9" }
        ]
    },
    {
        "bidang": "Voli",
        "members": [
            { "name": "ANTHONY NIXON WIRIYANTO", "kelas": "XI-8" },
            { "name": "DAVID JOSEPH MULYANA", "kelas": "XII-7" },
            { "name": "MATTHEW TJANDRA", "kelas": "XI-9" }
        ]
    },
    {
        "bidang": "Keamanan",
        "members": [
            { "name": "Alexander Theodore Viawan", "kelas": "XI-6" },
            { "name": "Andrew Hardy", "kelas": "X-5" },
            { "name": "Billy Armando Hartanto", "kelas": "XI-8" },
            { "name": "Clinton Harrison Lay", "kelas": "XII-5" },
            { "name": "Dyandra Kayliela Putri", "kelas": "XI-9" },
            { "name": "Ephram Gerson Marlundu Napitupulu", "kelas": "X-8" },
            { "name": "Ezekhiel Othniel Purnomo", "kelas": "X-8" },
            { "name": "Felix Susanto Herdi", "kelas": "XI-1" },
            { "name": "Freya Evelyn", "kelas": "X-1" },
            { "name": "Gracelyn Quinn Effendi", "kelas": "X-9" },
            { "name": "Jacob flint sumali", "kelas": "XII-3" },
            { "name": "Jason Keith Situhardja", "kelas": "XI-6" },
            { "name": "Jasper Bernard Sanjaya", "kelas": "XI-6" },
            { "name": "Jayden Nicholas Faith", "kelas": "X-9" },
            { "name": "Joelyn zhang", "kelas": "XI-10" },
            { "name": "Jones Oswale Marcellious", "kelas": "X-6" },
            { "name": "Joshua Michael Hioe", "kelas": "XI-2" },
            { "name": "Kenzie Azura Jusuf", "kelas": "XI-10" },
            { "name": "Kiera Iora Chandra", "kelas": "X-9" },
            { "name": "Leonard Andrew Suryawijaya", "kelas": "X-4" },
            { "name": "Mikael Angelo Huang", "kelas": "X-3" },
            { "name": "Mylo Timotheus Rura Hutahean", "kelas": "X-8" },
            { "name": "Nathan Aurelius Halim", "kelas": "XI-5" },
            { "name": "Nathanael Valencius", "kelas": "X-7" },
            { "name": "Ray Hayden Rahardja", "kelas": "XI-6" },
            { "name": "Reiner Irvia Santoso", "kelas": "XI-6" },
            { "name": "Scott Lionel Wong", "kelas": "X-4" },
            { "name": "tristan hilario sufi", "kelas": "XI-7" },
            { "name": "Vellyn Chandra", "kelas": "X-1" },
            { "name": "Violet Miracle Sugiharto", "kelas": "XII-1" }
        ]
    }
];

const SOC1_2026_gel2 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto mb-10">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
          Hasil Seleksi Tahap Berkas Open Recruitment SOC Gelombang 2
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 mb-7">
          Setelah kami melakukan seleksi tahap berkas, berikut adalah daftar nama yang lolos ke tahap selanjutnya: 
        </p>
      </div>
      <SOCGrid data={data} />
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mt-5">Jakarta, 05 Agustus 2026</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
        <div className="mt-20 flex flex-col items-center">
          <img
            src={ttd_buOP}
            alt="Signature of Olivia Melissa Puspitarini, S. Pd"
            className="h-24 mb-1"
          />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">
            Olivia Melissa Puspitarini, S. Pd
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

export default SOC1_2026_gel2;
