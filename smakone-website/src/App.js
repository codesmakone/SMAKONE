import './App.css';
import {Routes, Route} from "react-router-dom"

// Import Component
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'


// Import Pages
import Home from './Pages/Home/Home';
import Osis from './Pages/Osis/Osis'
import TentangKami from './Pages/TentangKami/TentangKami'
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
import SOC from './Pages/Kegiatan/soc'
import Soundscape from './Pages/Kegiatan/soundscape'
import STN from './Pages/Kegiatan/stn'
import Kriza from './Pages/Kegiatan/kriza'
import AlumniPage from './Pages/Alumni/alumni'


function App() {
  return (
      <div className='w-full h-full font-sans'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/osis' element={<Osis/>}>
            {/* <Route path='bph' element={<BPH/>}/>
            <Route path='bidang1' element={<OSIS_1/>}/>
            <Route path='bidang2' element={<OSIS_2/>}/>
            <Route path='bidang3' element={<OSIS_3/>}/>
            <Route path='bidang4' element={<OSIS_4/>}/>
            <Route path='bidang5' element={<OSIS_5/>}/>
            <Route path='bidang6' element={<OSIS_6/>}/>
            <Route path='bidang7' element={<OSIS_7/>}/>
            <Route path='bidang8' element={<OSIS_8/>}/>
            <Route path='bidang9' element={<OSIS_9/>}/>
            <Route path='bidang10' element={<OSIS_10/>}/>
            <Route path='*' element={<NoMatchPages/>}/> */}
          </Route>
          <Route path="/tentang_kami" element={<TentangKami/>}/>
          <Route path='/osis/bph' element={<BPH/>}/>
          <Route path='/osis/bidang1' element={<OSIS_1/>}/>
          <Route path='/osis/bidang2' element={<OSIS_2/>}/>
          <Route path='/osis/bidang3' element={<OSIS_3/>}/>
          <Route path='/osis/bidang4' element={<OSIS_4/>}/>
          <Route path='/osis/bidang5' element={<OSIS_5/>}/>
          <Route path='/osis/bidang6' element={<OSIS_6/>}/>
          <Route path='/osis/bidang7' element={<OSIS_7/>}/>
          <Route path='/osis/bidang8' element={<OSIS_8/>}/>
          <Route path='/osis/bidang9' element={<OSIS_9/>}/>
          <Route path='/osis/bidang10' element={<OSIS_10/>}/>
          <Route path='*' element={<NoMatchPages/>}/>
          <Route path='/kegiatan/soc' element={<SOC/>}/>
          <Route path='/kegiatan/soundscape' element={<Soundscape/>}/>
          <Route path='/kegiatan/stn' element={<STN/>}/>
          <Route path='/kegiatan/kriza' element={<Kriza/>}/>
          <Route path='/alumni' element={<AlumniPage/>}/>
        </Routes>
        <Footer/> 
      </div>
  );
}

export default App;
