import React from 'react'
import { NavLink } from 'react-router-dom';

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from '../../../Component/Nav/Nav'
import Footer from '../../../Component/Footer/Footer'
import SeleksiGrid from '../../../Component/Osis/SeleksiGrid';

const SeleksiOsis = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-28 mx-auto'>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>Daftar Calon Lolos Seleksi</h1>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-4'>OSIS 2025</h1>
        <SeleksiGrid title='Bidang 1' content={[[1,'Lionel Keane','X3'],[2,'Gabriella Clementine Situmorang','X8'],[3,'Obediah Honest Kurniawan','XI8'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 2' content={[[1,'Putu Acyntia Kanaya Ardani','X1'],[2,'Clairence Ilona Tanu','X2'],[3,'Jessica Faustine Karnali','X3'],[4,'Joshua Nathanael Yang','XI6'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 3' content={[[1,'Bianca Margareth Soetopo','X9'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 4' content={[[1,'Quirinus Lionnel Hanson Kangga','X8'],[2,'Emily Chairmanly Afla','X9'],[3,'Jesslyn Clarissa Tamin','XI1'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 5' content={[[1,'Metta Nimmala','X6'],[2,'Reyna Chryslene','X8'],[3,'Angelica Shelyn','XI3'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 6' content={[[1,'Tristan Axel Kosen','X5'],[2,'Cecylia Kyrie','XI7'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 7' content={[[1,'Willard Ricxie Phanagara','X1'],[2,'Valentio Jeremy Putra Wanadri','X4'],[3,'Joyce Avrill Miracle','X5'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 8' content={[[1,'Laurensia Edeline Santosa','X1'],[2,'Jordana Utama','X4'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 9' content={[[1,'Joanne Gisella Yusmita','X4'],[2,'Shenny Pannya Lowis','X8'],]}></SeleksiGrid>
        <SeleksiGrid title='Bidang 10' content={[[1,'Ivana Roxanne Subakti','X1'],[2,'Jaclyn Aditya The','X9'],]}></SeleksiGrid>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-bold'>1 Desember 2024</p>
        <p>⠀</p>
        <p className='text-lg font-bold'>Mengetahui,</p>
        <img className='w-1/2 lg:w-1/6' src={ttdyy}></img>
        <p className='text-lg font-bold'>Yendra Yohannes</p>
        <p className='text-lg font-bold'>Wakil Kesiswaan</p>
      </div>
      <Footer/>
    </div>
  )
}

export default SeleksiOsis

