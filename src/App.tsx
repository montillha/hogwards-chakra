import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Charts from './pages/Charts';
import Navbar from './components/NavBar';
import { CharacterProvider } from './context/Character.Context';

function App() {
  return (
    <CharacterProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/charts" element={<Charts/>}/>
    </Routes>
    </BrowserRouter>
    </CharacterProvider>


  )
}

export default App
