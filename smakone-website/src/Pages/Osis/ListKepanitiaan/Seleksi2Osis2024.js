import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import Nav from '../../../Component/Nav/Nav'
import Footer from '../../../Component/Footer/Footer'
import SeleksiGrid from '../../../Component/Osis/SeleksiGrid';

const SeleksiOsis = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-28 mx-auto'>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>Daftar Calon Lolos Tahap 1</h1>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-4'>Seleksi OSIS 2025</h1>
        <SeleksiGrid title='Bidang 1' content={[[1,'Lionel Keane','X3'],[2,'Naya Patreginia Mesah','X4'],[3,'Joshua Christian Kurniawan','XI2'],[4,'Gabriella Clementine Situmorang','X8'],[5,'Obediah Honest Kurniawan','XI8'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 2' content={[[1,'Putu Acyntia Kanaya Ardani','X1'],[2,'Merlyn Eunice Chang','X1'],[3,'Jessica Faustine Karnali','X3'],[4,'Jennifer Elizabeth','X1'],[5,'Clairence Ilona Tanu','X2'],[6,'Chika Letischa','X1'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 3' content={[[1,'Kezia Adelynn Phondiadi','X2'],[2,'Elvaretta Amabel Aurellia SImbolon','X5'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 4' content={[[1,'Jesslyn Clarissa Tamin','XI1'],[2,'Emily Chairmanly Afla','X9'],[3,'Chieryl Imanuella Sandy','XI3'],[4,'Quirinus Lionbel Hanson Kangga','X8'],[5,'Nadine Ng','X8'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 5' content={[[1,'Vivian Aurelia Augusta ','XI3'],[2,'Reyna Chryslene Setyono','X8'],[3,'Metta Nimmala','X6'],[4,'Jessica Widyatmadja Lookman','XI8'],[5,'Felicia Iyori Goh ','X5'],[6,'Angelica Shelyn Nathania','XI3'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 6' content={[[1,'Joshua Nathanael Yang','XI6'],[2,'Feronica Wijatmo','X7'],[3,'Cecylia Kyrie Tiara Putri','XI7'],[4,'Tristan Axel Kosen','X5'],[5,'Catherine Hannalie','X8'],[6,'Eldon Harris','X1'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 7' content={[[1,'Willard Ricxie Phanagara','X1'],[2,'Joyce Avrill Miracle','X5'],[3,'Joan Felicia Natania','X9'],[4,'Darius Sudarmo','X3'],[5,'Valentio Jeremy Putra Wanadri','X4'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 8' content={[[1,'Nadine Gunawan','X9'],[2,'Claudia Augustine Sitorus','X8'],[3,'Bianca Margareth Soetopo','X9'],[4,'Laurensia Edeline Santosa ','X1'],[5,'Jordana Utama','X4'],[6,'Marvel Sebastian Gunawan','XI2'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 9' content={[[1,'Joanne Gisella Yusmita','X4'],[2,'Darren Nathanael Bachtiar','X6'],[3,'Nicholas Reynald Lawanto','X8'],[4,'Robertus Wilson Santosa','X9'],[5,'Delicia Angela Gunario','X2'],[6,'Zefanya Michael Purnomo','X8'],[7,'Shenny Pannya Lowis','X8'],]}></SeleksiGrid>
<SeleksiGrid title='Bidang 10' content={[[1,'Gabrio Aaron Wijaya','X1'],[2,'Ivana Roxanne Subakti','X1'],[3,'Constantina Cendekiawan ','X5'],[4,'Keysha Caroline Sinuraya ','XI1'],[5,'Jaclyn Aditya The','X9'],]}></SeleksiGrid>
      </div>
      <Footer/>
    </div>
  )
}

export default SeleksiOsis