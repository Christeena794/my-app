import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";
import Usercontainer from "./Components/Usercontainer";
import apidata from "./apidata.json";
import IUser  from "./types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import UsersList from "./Components/UsersList";


function App() {
  const [userstate,setUserstate] = useState<IUser[]>([]);
 // const [userdata, setUsersData] = useState<IUser[]>([]);

    useEffect(() => {
     setUserstate(apidata);
  }, []);

// const response=await fetch('https://my.api.mockaroo.com/users.json?key=3c7caa60')
// const data= await response.json();
// setUserstate(data)
// use when api error
    
    
  return (

    <div className="App">
    <>
      
      <Router>
      <Navigation />
        <Search/>
        <Routes>
          
          <Route path="/add" element={<Add/>}/>
          <Route path="/" element={<Usercontainer userdata={userstate} />}/>
          <Route path="/UsersList/:userid" element={<UsersList usersData={userstate} />}/>
        </Routes>
      </Router>
        
        
    </>
    </div>
  );
}

export default App;


