import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About

from './components/About';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav/>
      <Routes className="content">
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
