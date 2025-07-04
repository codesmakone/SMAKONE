import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_ketsms from "../../../Image/Osis/ttd_ketsms.jpeg";
import ttd_ketsap from "../../../Image/Osis/ttd_ketsap.jpeg";
import ttd_ketos25 from "../../../Image/Osis/ttd_ketos25.jpeg";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
      bidang: "Acara",
      members: [
        { name: "Cherish Manzo", kelas: "X2" },
        { name: "Claudia Augustine Sitorus", kelas: "X8" },
        { name: "Quirinus Lionnel Hanson", kelas: "X8" },
        { name: "Karen Mikaela Nurtanio", kelas: "X8" },
        { name: "Reyna Chryslene Setyono", kelas: "X8" },
        { name: "Emily Chairmanly Afla", kelas: "X9" },
        { name: "Joshua Christian Kurniawan", kelas: "XI2" },
      ]
    },
    {
      bidang: "Dana",
      members: [
        { name: "Joy Angeline Chandra", kelas: "X2" },
        { name: "Catherine Hannalie", kelas: "X8" },
        { name: "Gabriella Clementine Situmorang", kelas: "X8" },
        { name: "Given Theofilus", kelas: "XI4" },
        { name: "Elwein Liong", kelas: "XI4" },
        { name: "Dwayne Benaya", kelas: "XI4" },
        { name: "Joanne Neisha", kelas: "XI4" },
        { name: "Hosea Ignatio Lim", kelas: "XI8" },
        { name: "Regina Lucky Sujardi", kelas: "XI8" }
      ]
    },
    {
      bidang: "Dekorasi Lapangan",
      members: [
        { name: "Keiko Giovanni Kurniawan", kelas: "X1" },
        { name: "Rachel Yap", kelas: "X2" },
        { name: "Emily Adelia", kelas: "X6" },
        { name: "Laura Angela Salim", kelas: "X7" },
        { name: "Abigail Charissa Triswandi", kelas: "XI3" },
        { name: "Jessica Belle Linsky", kelas: "XI4" },
        { name: "Helen Jovanna", kelas: "XI8" },
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Christine Alicia Anabel", kelas: "X2" },
        { name: "Clairence Ilona Tanu ", kelas: "X2" },
        { name: "Katy Zoey", kelas: "X6" },
        { name: "Phoebe Lynelle Budiman", kelas: "X6" },
        { name: "Nadine Ng", kelas: "X8" },
        { name: "Jake Christopher", kelas: "XI2" },
        { name: "Clarissa Vinski Khowori", kelas: "XI7" },
        { name: "Daniella Deborah Sutrisno", kelas: "XI9" },
      ]
    },
    {
      bidang: "Merchandise",
      members: [
        { name: "Ivana Roxanne Subakti", kelas: "X1" },
        { name: "Jordana Utama", kelas: "X4" },
        { name: "Caroline Tanadi ", kelas: "X5" },
        { name: "Samantha Faye Feriyanto", kelas: "XI2" },
        { name: "Angelina", kelas: "XI2" },
        { name: "Vivian Aurellia Augusta", kelas: "XI3" },
        { name: "Audrey Elisabeth Pardede", kelas: "XI3" },
        { name: "Gracia Emmanuella Candra", kelas: "XI5" },
        { name: "Earleen Yapary", kelas: "XI9" },
        { name: "Jocelyn Emilia Layadi", kelas: "XI9" },
      ]
    },
    {
      bidang: "Perlengkapan SAP",
      members: [
        { name: "Rainer Tristan Thunggawan", kelas: "X1" },
        { name: "Valentio Jeremy Putra Wanadiri", kelas: "X4" },
        { name: "Raphael Jacob Panangian Sitompul", kelas: "XI1" },
        { name: "Louis Alfian Sutanto", kelas: "XI2" },
        { name: "Thadius Kennard Abidin", kelas: "XI3" },
        { name: "Peter Purnama", kelas: "XI4" },
        { name: "Erick Rey Chandra", kelas: "XI4" },
        { name: "Ammaryyo Quinan Yudhistira Idrian", kelas: "XI6" },
        { name: "Jason Valentino Budi ", kelas: "XI9" },
      ]
    },
    {
      bidang: "Perlengkapan SMS",
      members: [
        { name: "Willard Ricxie Phanagara", kelas: "X1" },
        { name: "Arthur Albert Alison", kelas: "XI9" },
        { name: "Ernest Nathanael Wiguna", kelas: "XI9" },
        { name: "Nicholas Thaddeus Gozali ", kelas: "XI5" },
      ]
    },
    {
      bidang: "Publikasi",
      members: [
        { name: "Putu Acyntia K.", kelas: "X1" },
        { name: "Jocelyn Haosana", kelas: "X2" },
        { name: "Richellyn Chandra", kelas: "X3" },
        { name: "Metta Nimmala", kelas: "X6" },
        { name: "Jaclyn Aditya T.", kelas: "X9" },
        { name: "Keneisha Aurelyn P.S. ", kelas: "XI6" },
        { name: "Yessi Melinda", kelas: "XI9" },
      ]
    },
    {
      bidang: "Ticketing",
      members: [
        { name: "Rachel Emily Harnoto", kelas: "X3" },
        { name: "Joyce Avrill Miracle", kelas: "X5" },
        { name: "Maxwell Nolan Susatia", kelas: "X6" },
        { name: "Thalia Joevy Abidin", kelas: "X8" },
        { name: "Madeline Elizabeth Lasmana ", kelas: "XI1" },
        { name: "Darlene Bianca Tanuwija ", kelas: "XI2" },
        { name: "Felicia Ivana Yuval ", kelas: "XI5" },
        { name: "Abigail Kusnadi", kelas: "XI7" },
        { name: "Jonathan Saputra Lim", kelas: "XI9" },
        { name: "Clarabella Tania Lim ", kelas: "XI9" },
        { name: "Ellen Florencia", kelas: "XI9" },
        { name: "Vanessa Chloe Korompis", kelas: "XI9" },
      ]
    },
    {
      bidang: "Transportasi",
      members: [
        { name: "Gracia Audrey", kelas: "X6" },
        { name: "Jessica Naomi", kelas: "X8" },
        { name: "Imanuel Yohanes ", kelas: "X8" },
        { name: "Deandra Moeliono", kelas: "XI5" },
        { name: "Evelyne Clarissa", kelas: "XI6" },
        { name: "Samantha Wijaya", kelas: "XI6" },
        { name: "Michelle Gisellyn", kelas: "XI9" }
      ]
    },
    {
      bidang: "Film and Documentation",
      members: [
        { name: "Evan Glorious Widirga", kelas: "XI3" },
        { name: "Marciano Nathanael", kelas: "XI4" },
        { name: "Grant Favor Tanudjaja", kelas: "XI5" },
        { name: "Jeremy Theodore", kelas: "XI5" },
        { name: "Darrian Young", kelas: "XI7" },
      ]
    },
  ];

const Sapxsms25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-10">
          Hasil Seleksi Tahap Wawancara SAPxSMS 2025
        </h1>
        <div className="flex flex-col items-center ">
            <p className="text-left w-3/4 mb-5">
Setelah kami melakukan tahap wawancara selama 2 hari pada <b>Rabu, 28 Mei 2025 dan Jumat, 30 Mei 2025,</b> telah ditentukan anggota baru sebagai berikut:
            </p>
        </div>
      </div>
      <SOCGrid data={data}/>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
      {/* Date */}
      <p className="text-right">Jakarta, 6 Juni 2025</p>

      {/* <p className="text-center mt-12">Hormat kami,</p>

      <div
        className="mt-20 flex flex-col items-center gap-16
                   lg:flex-row lg:justify-between lg:gap-8"
      >
        <div className="flex flex-col items-center">
          <img
            src={ttd_ketos25} 
            alt="Signature of BENEDICT ERICK ANTHONY"
            className="h-24 mb-4"
          />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">
            BENEDICT ERICK ANTHONY
          </p>
          <p className="text-center mt-1">Ketua OSIS 2025</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={ttd_ketsap}
            alt="Signature of YOVELA DANIA HEWIS"
            className="h-24 mb-4"
          />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">
            YOVELA DANIA HEWIS
          </p>
          <p className="text-center mt-1">Ketua SAP 2025</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={ttd_ketsms}
            alt="Signature of JESSLYN MILKHA HONGDIYANTO"
            className="h-24 mb-4"
          />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">
            JESSLYN MILKHA HONGDIYANTO
          </p>
          <p className="text-center mt-1">Ketua SMS 2025</p>
        </div>
      </div> */}

      {/* Menyetujui */}
      <p className="text-center mt-24">Mengetahui,</p>
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
    </section>
      {/* <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between lg:items-end items-center p-6 space-y-14 md:space-y-0 md:space-x-20">

          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Mengetahui,</p>
            <p>⠀</p>
            <div className="text-lg font-bold mb-2 text-center">
              Wakasis SMAK 1 PENABUR Jakarta
            </div>
            <img src={ttdyy} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Yendra Yohannes, S.S.,M.Li</div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold mt-5">Jakarta, 27 Mei 2025</p>
            <p>⠀</p>
            <div className='flex flex-row items-center gap-5'>
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold mb-2">Ketua SAP 2025</div>
                    <img src={ttd_ketsap} className="w-auto h-20 my-2" />
                    <div className="text-lg font-bold">Yovela Dania Hewis</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-lg font-bold mb-2">Ketua SMS 2025</div>
                    <img src={ttd_ketsms} className="w-auto h-20 my-2" />
                    <div className="text-lg font-bold">Jesslyn Milkha Hongdiyanto</div>
                </div>
            </div>
          </div>

        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Sapxsms25;
