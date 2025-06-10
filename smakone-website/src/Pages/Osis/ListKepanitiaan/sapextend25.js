import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
      bidang: "Acara",
      members: [
        { name: "Karen Mikaela Nurtanio", kelas: "X8" },
        { name: "Keanna sutanto", kelas: "X1" },
        { name: "Violet Sugiharto", kelas: "X1" },
      ]
    },
    {
      bidang: "Dana",
      members: [
        { name: "Regina Lucky Surjadi", kelas: "XI8" },
        { name: "Joy Angeline Chandra", kelas: "X2" },
        { name: "Catherine Hannalie", kelas: "X8" },
        { name: "Vania Graciela Santoso", kelas: "X9" },
      ]
    },
    {
      bidang: "Dekorasi Lapangan",
      members: [
        { name: "Emily Adelia", kelas: "X6" },
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Phoebe Lynelle Budiman", kelas: "X6" },
      ]
    },
    {
      bidang: "Merchandise",
      members: [
        { name: "Ivana Roxanne Subakti", kelas: "X1" },
      ]
    },
    {
        bidang: "Perlengkapan SAP",
        members: [
            { name: "Raphael Jacob Panangian Sitompul", kelas: "XI1" },
            { name: "Jonathan Kendrick", kelas: "XI4" },
        ]
    },
    {
        bidang: "Perlengkapan SMS",
        members: [
            { name: "Nicholas Thaddeus", kelas: "XI5" },
        ]
    },
    {
        bidang: "Ticketing",
        members: [
            { name: "Karen edline simon", kelas: "X3" },
            { name: "Quenella Lachelle Madeline Kaloh", kelas: "X7" },
            { name: "Madeline Elizabeth Lasmana", kelas: "XI1" },
            { name: "Rachel Emily Harnoto", kelas: "X3" },
            { name: "Abigail Kusnadi", kelas: "XI7" },
        ]
    },
    {
        bidang: "Transportasi",
        members: [
            { name: "Chika Letischa", kelas: "X1" },
        ]
    },
  ];

const Sapext25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-10">
          Hasil Seleksi Tahap 1 Open Recruitment SAPxSMS 2025
        </h1>
        <div className="flex flex-col items-center ">
            <p className="text-left w-3/4 mb-5">
                Setelah kami melakukan open recruitment selama 6 hari pada <b>Kamis, 22 Mei 2025 - Selasa, 27 Mei 2025,</b> telah ditentukan calon anggota baru sebagai berikut:
            </p>
        </div>
      </div>
      <SOCGrid data={data}/>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
            {/* Date */}
            <p className="text-right">Jakarta, 28 Mei 2025</p>

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

export default Sapext25;
