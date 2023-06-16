import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navvbar from './components/Navbar/Navvbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navvbar></Navvbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
