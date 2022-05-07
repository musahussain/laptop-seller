import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Footer from "./pages/SharedComponent/Footer/Footer";
import Header from "./pages/SharedComponent/Header/Header";
import NotFound from "./pages/SharedComponent/NotFound/NotFound";
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
