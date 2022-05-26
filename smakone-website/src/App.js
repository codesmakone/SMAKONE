import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Component/Home"

function App() {
  return (
    <div className='w-full h-full'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
