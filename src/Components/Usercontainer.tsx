import React, { useEffect, useState } from "react";
import apiData from '../apidata.json';
import User from "./User";
import "./Usercontainer.css";
import IUser from "../types";
//import { getMaxListeners } from "process";

const Usercontainer:React.FC<IProps> = (props) => {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    setUsersData(props.userdata)
  }, []);

  //  async function fetchUserData() {
    //   const response = await fetch(
    //     "https://my.api.mockaroo.com/users.json?key=3c7caa60"
    //   );
    //   const data = await response.json();
    //   setUsersData(data);
    //   console.log(data);
    // };
    return (
      <div>
      <form className="example">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i className="fa fa-search"></i></button>
</form>
    
      <div className="grid-container">
        {props.userdata.map((item) => (
          <User item={item} key={item.id} />
          
        ))}
        </div>
        </div>
          
    );
  }

export default Usercontainer;

interface IProps{
  userdata : IUser[]
}

