import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './Pages/Home/Home';

import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className='w-full h-full'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
