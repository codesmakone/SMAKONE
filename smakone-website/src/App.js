import './App.css';
import {Routes, Route} from "react-router-dom"

import Home from './Pages/Home/Home';
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer';

function App() {
  return (
      <div className='w-full h-full'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        
        <Footer/>
      </div>
  );
}

export default App;
