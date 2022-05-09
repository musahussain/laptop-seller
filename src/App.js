import React from "react";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/AddItems/AddItems/AddItems";
import Blog from "./pages/Blog/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import Inventory from "./pages/Inventory/Inventory/Inventory";
import Login from "./pages/Login/Login/Login";
import ManageItems from "./pages/ManageItems/ManageItems/ManageItems";
import MyItem from "./pages/MyItem/MyItem/MyItem";
import Footer from "./pages/SharedComponent/Footer/Footer";
import Header from "./pages/SharedComponent/Header/Header";
import NotFound from "./pages/SharedComponent/NotFound/NotFound";
import RequireAuth from "./pages/SharedComponent/RequireAuth/RequireAuth";
import Signup from "./pages/Signup/Signup/Signup";


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/inventory/:productId" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path="/manageitems" element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
        <Route path="/additems" element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
        <Route path="/myitems" element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
