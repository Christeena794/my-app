import React from "react";
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
