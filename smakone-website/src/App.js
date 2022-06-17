import './App.css';
import {Routes, Route} from "react-router-dom"

import Home from './Pages/Home/Home';
import Osis from './Pages/Osis/Osis'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer';


function App() {
  return (
      <div className='w-full h-full font-sans'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/osis' element={<Osis/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
