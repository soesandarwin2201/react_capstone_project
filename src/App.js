import Navbar from "./Components/Navbar/Navbar";
import { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Components/Home/Home";
// import Details from "./Components/Detail/Detail";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    {/* <Routes>
      <Route index element={<Home />} />
      <Route path="/Details" element={<Details />} />
    </Routes> */}
    </>
  );
}

export default App;