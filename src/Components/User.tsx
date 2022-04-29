import React from "react";
import { Link } from "react-router-dom";
import IUser from "../types";
import "./User.css";


const User: React.FC<{item:IUser}> = ({item}) => {
  return (
    <Link to={`./UsersList/${item.id}` } >
    <div className="card">
    
        <h4>
        
        <img src="https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg" />
          <b>{item.id}</b><br></br>
          {item.first_name}<br></br>
          {item.last_name}<br></br>
          {item.email}<br></br>
        
        </h4>
        
        <p></p>
        </div>
        </Link>
  );
};
export default User;
