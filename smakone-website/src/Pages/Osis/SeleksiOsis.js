import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'
import SeleksiGrid from '../../Component/Osis/SeleksiGrid';

const SeleksiOsis = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-28 mx-auto'>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>Daftar Calon Lolos Tahap 1</h1>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-4'>Seleksi OSIS 2025</h1>
        <SeleksiGrid bidang={1} content={[
          [1,'Lionel Keane','X-3'],
          [2,'Janice Leticia','X7'],
          [3,'Naya Patreginia Mesah','X4'],
          [4,'Joshua Christian Kurniawan','XI 2'],
          [5,'Marciano Nathanael','XI4'],
          [6,'Timotius Alvino Gunawan','X5'],
          [7,'Christine Alicia Anabel ','X2'],
          [8,'Steve Jedidiah Suryanto','XI7'],
          [9,'Gracia Audrey Budiono','X6'],
          [10,'Frederick Suhardi','XI-8'],
          [11,'Gabriella Clementine Situmorang ','X8'],
          [12,'Obediah Honest Kurniawan','XI8'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={2} content={[
          [1,'Putu Acyntia Kanaya Ardani','X1'],
          [2,'Merlyn Eunice Chang','X1'],
          [3,'Karen edline simon','X3'],
          [4,'Jessica Faustine Karnali','X3'],
          [5,'Natalie Angela','X7'],
          [6,'Jennifer Elizabeth','X1'],
          [7,'Imanuel Yohanes Setiawan','x-8'],
          [8,'Christine Angel Yodien Wen','X9'],
          [9,'Clairence Ilona Tanu','X2'],
          [10,'Chika Letischa','X1'],
          [11,'Jamie Constantine. ','X3'],
          [12,'Viola Putri Setiawan','X9'],
          [13,'Livia Audrey Hartono','X4'],
          [14,'Madelyn Nathania Panadi ','X1'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={3} content={[
          [1,'Kezia Adelynn Phondiadi','X2'],
          [2,'Elvaretta Amabel Aurellia Simbolon','X5'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={4} content={[
          [1,'Jesslyn Clarissa Tamin','XI1'],
          [2,'Raphael David Siaw','XI3'],
          [3,'Jonathan Calen Kho','XI7'],
          [4,'Emily Chairmanly Afla','X9'],
          [5,'Chieryl Imanuella Sandy','XI3'],
          [6,'Madline Elizabeth Lasmana','XI1'],
          [7,'Quirinus Lionbel Hanson Kangga','X8'],
          [8,'Nadine Ng','X8'],
          [9,'Letizia Nathania Wong','X5'],
          [10,'Diego Marvel Maxwell','X8'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={5} content={[
          [1,'Eunike Alexandra Tanusaputera','X5'],
          [2,'Vivian Aurelia Augusta ','XI3'],
          [3,'Verena Sheridan ','X6'],
          [4,'Reyna Chryslene Setyono','X8'],
          [5,'Quenella Lachelle Madeline Kaloh','X7'],
          [6,'Mutiara Jelita Tangkilisan ','X3'],
          [7,'Metta Nimmala','X6'],
          [8,'Jessica Widyatmadja Lookman','XI8'],
          [9,'Clarissa Vinski Khowori ','XI7'],
          [10,'Felicia Iyori Goh ','X5'],
          [11,'Marvel Khioe','X4'],
          [12,'Given Theofilus Wijaya','XI4'],
          [13,'Orvillo Albert Ezekiel Sugiyanto','XI6'],
          [14,'Jonathan Felix ','XI8'],
          [15,'Edna Reia Saulina Napitupulu','XI6'],
          [16,'Marco Atreyu Hanjaya ','XI9'],
          [17,'Angelica Shelyn Nathania','XI3'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={6} content={[
          [1,'Aurel Jolyn Japutra','X4'],
          [2,'Jonathan Kendrick','XI4'],
          [3,'Chan Andrew Wirawan ','X3'],
          [4,'Karenza Sheli Pasisir','X7'],
          [5,'Jocelyn Haosana ','X2'],
          [6,'Kaylene Fredrica Suryaatmadja','X2'],
          [7,'Stella Tristiana Widjaja','X1'],
          [8,'Joshua Nathanael Yang','XI6'],
          [9,'Rachel Yap','X2'],
          [10,'Filbert Kuswara','X8'],
          [11,'David Prijatna','X2'],
          [12,'Feronica Wijatmo','X7'],
          [13,'Alika Dylan Budiman ','X9'],
          [14,'Joey Yu','X1'],
          [15,'Vivian Visakha Bunnawan','X7'],
          [16,'Cecylia Kyrie Tiara Putri','XI7'],
          [17,'Jazzelyn Martin','X3'],
          [18,'Tristan Axel Kosen','X5'],
          [19,'Garrett Earl Hidayat','X6'],
          [20,'Rainer Tristan Thunggawan','X1'],
          [21,'Catherine Hannalie','X8'],
          [22,'Ni Dyandra Mulia','X4'],
          [23,'Eldon Harris','X1'],
          [24,'Elise Tanaya Setiawan','X9'],
          [25,'Phoebe Lynelle Budiman ','X6'],
          [26,'Jessica Aubrey Wong','X5'],
          [27,'Cherish Manzo Felicia','X2'],
          [28,'Florentina Cynthia Clarissa','X9'],
          [29,'Michelle Tan','X8'],
          [30,'Caroline Tanadi','X5'],
          [31,'Putri Tufany Emanuella','X8'],
          [32,'Adeline Alexandra Emmanuella Goh','X9'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={7} content={[
          [1,'Willard Ricxie Phanagara','X1'],
          [2,'Joyce Avrill Miracle','X5'],
          [3,'Malvin Reswanda Rahardjo','XI4'],
          [4,'Joan Felicia Natania','X9'],
          [5,'Darius Sudarmo','X3'],
          [6,'Davon Abisha Cahyana','X1'],
          [7,'Julian Elim Dharmanto','X9'],
          [8,'Kenneth Benedict Wijaya','X6'],
          [9,'Valentio Jeremy Putra Wanadri','X4'],
          [10,'Isakhar Kaleb Mulyadi','X5'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={8} content={[
          [1,'Catherine Kimberly Ng ','X7'],
          [2,'Nadine Gunawan','X9'],
          [3,'Kihana Mandy Rade Sihombing','X4'],
          [4,'Freja Almeira Masykuri','X5'],
          [5,'Katy Zoey Tanuwijaya','X6'],
          [6,'Claudia Augustine Sitorus','X8'],
          [7,'Bianca Margareth Soetopo','X9'],
          [8,'Laurensia Edeline Santosa ','X1'],
          [9,'Jordana Utama','X4'],
          [10,'Acelynn Richel Kusuma','X4'],
          [11,'Keanna Sutanto ','X1'],
          [12,'Marvel Sebastian Gunawan','XI2'],
          [13,'Owen Peter Chow','XI8'],
          [14,'Karen Mikaela Nurtanio','X8'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={9} content={[
          [1,'Joanne Gisella Yusmita','X4'],
          [2,'Darren Nathanael Bachtiar','X6'],
          [3,'Nicholas Reynald Lawanto','X8'],
          [4,'Robertus Wilson Santosa','X9'],
          [5,'Delicia Angela Gunario','X2'],
          [6,'Jennifer Anastasia','X5'],
          [7,'Frederick Arellyus Wang','XI-7'],
          [8,'Zefanya Michael Purnomo','X8'],
          [9,'Nathan Hartanto','X9'],
          [10,'Kenneth Lie','XI7'],
          [11,'Jason contantine','X9'],
          [12,'Faye Valerie Lesley','X1'],
          [13,'Edward Russell Ruslim','X4'],
          [14,'Matthew Ethan Jefferson','XI6'],
          [15,'Shenny Pannya Lowis','X8'],
          ]
        }></SeleksiGrid>
        <SeleksiGrid bidang={10} content={[
          [1,'Joshua Widjaja','X8'],
          [2,'Gabrio Aaron Wijaya','X1'],
          [3,'Ivana Roxanne Subakti','X1'],
          [4,'Constantina Cendekiawan ','X5'],
          [5,'Kimberleigh Ayu Goenawan','X9'],
          [6,'Violet Miracle Sugiharto','X1'],
          [7,'Nicolai Gunawan','X6'],
          [8,'Keysha Caroline Sinuraya ','XI1'],
          [9,'Cherise Eleanor Halim','X8'],
          [10,'Rachel Emily Harnoto','X3'],
          [11,'Abigail Lorraine Hanel','X1'],
          [12,'Marvell Josiah Kumala','X9'],
          [13,'Darren Jeonathan','X9'],
          [14,'Alana Nicole Mardjuki','XI2'],
          [15,'Jaclyn Aditya The','X9'],
          [16,'Shane Wibowo','X5'],
          [17,'Jeriel Silaban','X8'],
          [18,'Darren Valentian Mok','X1'],
          [19,'Mahendra Kalyana Sunarko','XI9'],
          [20,'Emily Adelia','X6'],
          [21,'Eugene Izuka Candra','X3'],
          ]
        }></SeleksiGrid>
      </div>
      <Footer/>
    </div>
  )
}

export default SeleksiOsis