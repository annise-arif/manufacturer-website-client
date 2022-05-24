import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from '../src/pages/Shared/Navbar/Navbar.js';
import Footer from '../src/pages/Shared/Footer/Footer.js';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
