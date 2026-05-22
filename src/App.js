import './App.css';
import Home from './Pages/HomeP/Home';
import Toolskit from './Pages/Toolskit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUsP from './Pages/ContactUsP';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tool' element={<Toolskit />} />
          <Route path='/contact' element={<ContactUsP />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;