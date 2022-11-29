import Nav from "./components/Nav";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Galeri from "./pages/Galeri";

function App() {


  return (
    <>
    <Nav />

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Galeri' element={<Galeri/>} />
    </Routes>

    </>
  );
}

export default App;