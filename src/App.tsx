import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";
import Usercontainer from "./Components/Usercontainer";

function App() {
  return (
    <>
      <Navigation />
        <Search />
        <Usercontainer />
    </>
  );
}

export default App;
