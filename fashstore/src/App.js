import React from "react";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Addwear } from "./components/Addwear";
import { Wears } from "./components/Wear/Wears";
import { Weardetail } from "./components/Wear/Weardetail";
import { Signup } from "./components/Login/Signup";
import { Logged } from "./components/Login/Logged";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<Addwear />} exact />
          <Route path="/western" element={<Wears />} exact />
          <Route path="/western/:id" element={<Weardetail />} exact />
          <Route path="/login" element={<Logged/>} exact/>
          <Route path="/signup" element={<Signup/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
