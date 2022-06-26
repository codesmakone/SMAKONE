import './App.css';
import {Routes, Route} from "react-router-dom"

// Import Component
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import ScrollToTop from './Component/ScrollToTop'


// Import Pages
import Home from './Pages/Home/Home';
import Soundscape from './Pages/Home/Kegiatan/soundscape'
import STN from './Pages/Home/Kegiatan/stn'
import Kriza from './Pages/Home/Kegiatan/kriza'
import SOC from './Pages/Home/Kegiatan/soc'
import EnrichieGracia from './Pages/Home/Alasan/Enrichie'
import GillianSeason from './Pages/Home/Alasan/Gilian'
import Berwyn1 from './Pages/Home/Alasan/Berwyn'
import MattheusBryanDjahtranto from './Pages/Home/Alasan/Mattheus'

import Osis from './Pages/Osis/Osis'
import Emagz from './Pages/Emagz/Emagz'
import Ass1st from './Pages/Ass1st/Ass1st'
import Kedokteran from './Pages/Ass1st/Jurusan/Kedokteran'
import Farmasi from './Pages/Ass1st/Jurusan/Farmasi'
import Keguruan from './Pages/Ass1st/Jurusan/Keguruan'
import Sosiologi from './Pages/Ass1st/Jurusan/Sosiologi'
import Akutansi from './Pages/Ass1st/Jurusan/Akutansi'
import Hukum from './Pages/Ass1st/Jurusan/Hukum'
import Psikologi from './Pages/Ass1st/Jurusan/Psikologi'
import Sipil from './Pages/Ass1st/Jurusan/Sipil'
import Pertambangan from './Pages/Ass1st/Jurusan/Pertambangan'

import TentangKami from './Pages/TentangSMAK1/TentangSMAK1'
import KehidupanSmukiers from './Pages/Smukiers/KehidupanSmukiers'
import TipsBelajar from './Pages/Smukiers/TipsBelajar'
import KegiatanSetelahKelas from './Pages/Smukiers/KegiatanSetelahKelas'

import BPH from './Pages/Osis/BPH/BPH'
import OSIS_1 from './Pages/Osis/Osis_1/Osis_1'
import OSIS_2 from './Pages/Osis/Osis_2/Osis_2'
import OSIS_3 from './Pages/Osis/Osis_3/Osis_3'
import OSIS_4 from './Pages/Osis/Osis_4/Osis_4'
import OSIS_5 from './Pages/Osis/Osis_5/Osis_5'
import OSIS_6 from './Pages/Osis/Osis_6/Osis_6'
import OSIS_7 from './Pages/Osis/Osis_7/Osis_7'
import OSIS_8 from './Pages/Osis/Osis_8/Osis_8'
import OSIS_9 from './Pages/Osis/Osis_9/Osis_9'
import OSIS_10 from './Pages/Osis/Osis_10/Osis_10'

import NoMatchPages from './Pages/NoMatchPages/NoMatchPages'

import AlumniPage from './Pages/Alumni/alumni'
import Billy from './Pages/Alumni/BillyStevanus'
import Scoot from './Pages/Alumni/ScottMoses'
import Nicole from './Pages/Alumni/NicoleCharlene'

function App() {
  return (
      <div className='w-full h-full font-Product'>
        <ScrollToTop/> 
        <Nav/>
        <div className='mt-40'>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path='/kegiatan/soc' element={<SOC/>}/>
            <Route path='/kegiatan/soundscape' element={<Soundscape/>}/>
            <Route path='/kegiatan/stn' element={<STN/>}/>
            <Route path='/kegiatan/kr1za' element={<Kriza/>}/>

            <Route path='/alasan/EnrichieGracia' element={<EnrichieGracia/>}/>
            <Route path='/alasan/GillianSeason' element={<GillianSeason/>}/>
            <Route path='/alasan/Berwyn' element={<Berwyn1/>}/>
            <Route path='/alasan/MattheusBryanDjahtranto' element={<MattheusBryanDjahtranto/>}/>

          <Route path="/tentang_smak1" element={<TentangKami/>}/>

          <Route path="/Kehidupan_smukiers" element={<KehidupanSmukiers/>}/>
          <Route path="/Kehidupan_smukiers/tips" element={<TipsBelajar/>}/>
          <Route path="/Kehidupan_smukiers/kegiatan" element={<KegiatanSetelahKelas/>}/>
          <Route path='/Kehidupan_smukiers/Alumni' element={<AlumniPage/>}/>
            <Route path='/Kehidupan_smukiers/Alumni/BillyStevanus' element={<Billy/>}/>
            <Route path='/Kehidupan_smukiers/Alumni/ScottMoses' element={<Scoot/>}/>
            <Route path='/Kehidupan_smukiers/Alumni/NicoleCharlene' element={<Nicole/>}/>

          <Route path='/OSIS' element={<Osis/>}/>
            <Route path='/OSIS/bph' element={<BPH/>}/>
            <Route path='/OSIS/bidang1' element={<OSIS_1/>}/>
            <Route path='/OSIS/bidang2' element={<OSIS_2/>}/>
            <Route path='/OSIS/bidang3' element={<OSIS_3/>}/>
            <Route path='/OSIS/bidang4' element={<OSIS_4/>}/>
            <Route path='/OSIS/bidang5' element={<OSIS_5/>}/>
            <Route path='/OSIS/bidang6' element={<OSIS_6/>}/>
            <Route path='/OSIS/bidang7' element={<OSIS_7/>}/>
            <Route path='/OSIS/bidang8' element={<OSIS_8/>}/>
            <Route path='/OSIS/bidang9' element={<OSIS_9/>}/>
            <Route path='/OSIS/bidang10' element={<OSIS_10/>}/>
          <Route path='/OSIS/Emagz' element={<Emagz/>}/>
          <Route path='/OSIS/ASS1ST' element={<Ass1st/>}/>
            <Route path='/OSIS/ASS1ST/Kedokteran' element={<Kedokteran/>}/>
            <Route path='/OSIS/ASS1ST/Farmasi' element={<Farmasi/>}/>
            <Route path='/OSIS/ASS1ST/Keguruan' element={<Keguruan/>}/>
            <Route path='/OSIS/ASS1ST/Sosiologi' element={<Sosiologi/>}/>
            <Route path='/OSIS/ASS1ST/Akutansi' element={<Akutansi/>}/>
            <Route path='/OSIS/ASS1ST/Hukum' element={<Hukum/>}/>
            <Route path='/OSIS/ASS1ST/Psikologi' element={<Psikologi/>}/>
            <Route path='/OSIS/ASS1ST/Teknik_sipil' element={<Sipil/>}/>
            <Route path='/OSIS/ASS1ST/Pertambangan' element={<Pertambangan/>}/>


          <Route path='*' element={<NoMatchPages/>}/>
        </Routes>
        </div>
        <Footer/> 
      </div>
  );
}

export default App;
