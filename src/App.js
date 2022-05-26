import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "../src/pages/Shared/Navbar/Navbar.js";
import Footer from "../src/pages/Shared/Footer/Footer.js";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Purchase from "./pages/Home/Purchase/Purchase";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddaReview from "./pages/Dashboard/AddaReview";
import MyProfile from "./pages/Dashboard/MyProfile";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="myorders" element={<MyOrders />}></Route>
          <Route path="addareview" element={<AddaReview />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
