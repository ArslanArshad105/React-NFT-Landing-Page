import React, { useState } from "react";
import "./App.css";
import "./styles/base.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Free from "./components/Free/Free";
import Clients from "./components/Clients/Clients";
import SuperRare from "./components/SuperRare/SuperRare";
import Release from "./components/Release/Release";
import Like from "./components/Like/Like";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
