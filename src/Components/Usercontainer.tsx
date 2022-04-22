import React, { useEffect, useState } from "react";
//import apiData from './apidata.json'
import User from "./User";
import "./Usercontainer.css";
import { IUser } from "../types";

const Usercontainer:React.FC<IProps> = (props) => {
  // const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    
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
      <div className="grid-container">
        {props.userdata.map((item) => (
          <User item={item} key={item.id} />
        ))}
      </div>
    );
  }

export default Usercontainer;

interface IProps{
  userdata : IUser[]
}
