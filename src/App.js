import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import Details from './Components/Detail/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
