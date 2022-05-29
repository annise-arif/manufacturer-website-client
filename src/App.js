import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../src/pages/Shared/Footer/Footer.js";
import Navbar from "../src/pages/Shared/Navbar/Navbar.js";
import "./App.css";
import Blogs from "./pages/Blogs/Blogs";
import AddAProduct from "./pages/Dashboard/AddAProduct";
import AddaReview from "./pages/Dashboard/AddaReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Home/Purchase/Purchase";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="myportfolio" element={<MyPortfolio />}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myorders" element={<MyOrders />}></Route>
          <Route path="addareview" element={<AddaReview />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
          <Route path="manageallorders" element={<ManageAllOrders />}></Route>
          <Route path="addaproduct" element={<AddAProduct />}></Route>
          <Route path="makeadmin" element={<MakeAdmin />}></Route>
          <Route path="manageproducts" element={<ManageProducts />}></Route>
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
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
