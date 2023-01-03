import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import { getBugData } from './Redux/BugApi';

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
