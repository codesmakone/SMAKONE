import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import Nav from '../../../Component/Nav/Nav'
import Footer from '../../../Component/Footer/Footer'
import SeleksiGrid from '../../../Component/Osis/SeleksiGrid';

const PanitiaBazone2024 = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-28 mx-auto'>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>Daftar Panitia</h1>
        <h1 className='text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-4'>Bazone 2024</h1>
        <SeleksiGrid title="Dana" content={[
          [1,'Alyssa Claudia Halim','XIIS1'],
          [2,'Jessica Aubrey Wong','X5'],
          [3,'Kania Paramita Purnomo','X2'],
          [4,'Marc Louis Wiria','XI5']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Acara" content={[
          [1,'Reyna Chryslene Setyono','X8'],
          [2,'Emily Chairmanly Afla','X9'],
          [3,'Fionna Angelica','XIA1'],
          [4,'Jordana Utama','X4']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Konsumsi" content={[
          [1,'Clarissa Vinski Khowori','XI7'],
          [2,'Jeanne Elisha Dinatri','XIIS2'],
          [3,'Letizia Nathania Wong','X5']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Dekorasi Lapangan" content={[
          [1,'Elise Tanaya','X9'],
          [2,'Michelle Tan','X8'],
          [3,'Chloe Charlotte','XIIS2'],
          [4,'Dafel Miracle','XI1'],
          [5,'Jake Christopher','XI2']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Design Division" content={[
          [1,'Stella Tristianta Widjaja','X1'],
          [2,'Vivian Vishaka Bunawan','X7']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Keamanan" content={[
          [1,'Jessica Widyatmadja Lookman','XI8'],
          [2,'Nathanael Angga Kusuma','XI3'],
          [3,'Hosea Ignatio Lim','XI8'],
          [4,'Maxbillian Christiansen Sanjaya','XI4'],
          [5,'Putri Tufany Emanuella','X8'],
          [6,'Matthew Ethan Jefferson','XI6']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Publikasi" content={[
          [1,'Sabrina Angeline Sujantono','XIIS1'],
          [2,'Angelica Shelyn','XI3'],
          [3,'Samantha Lemuel','XI2'],
          [4,'Joshua Christian Kurniawan','XI2'],
          [5,'Gracia Audrey Budiono','X6']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Perlengkapan" content={[
          [1,'George Steindhart Nathanael','XI7'],
          [2,'Ammarryyo Q.Y Idrian','XI6'],
          [3,'Theodore Kimi Tjen','XI4'],
          [4,'Erick Rey Chandra','XI4'],
          [5,'Marvel Khioe','X4'],
          [6,'Quirius Lionnel Hanson Kangga','X8'],
          [7,'Felics Gunawan','X8'],
          [8,'Joshua Emmanuel Wahyu','XIIA8']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Hadiah" content={[
          [1,'Keysha Caroline','XI1'],
          [2,'Vania Graciela Santoso','X9']
          ]
        }></SeleksiGrid>

				<SeleksiGrid title="Ticketing" content={[
          [1,'Darlene Bianca Tanuwijaya','XI2'],
          [2,'Hans Wilsen','XIIA7'],
          [3,'Rainer Tristan Thunggawan','X1'],
          [4,'Clairence Ilona','X2'],
          [5,'Thalia Joevy','X8'],
          [6,'Joslin Gracia','XIIA3'],
          [7,'Andhorea Chrestotesia Patriabara','XI2']
          ]
        }></SeleksiGrid>

      </div>
      <Footer/>
    </div>
  )
}

export default PanitiaBazone2024