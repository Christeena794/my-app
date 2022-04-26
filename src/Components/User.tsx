import React from "react";
import IUser from "../types";
//import ShowMore from 'react-show-more-button';
import "./User.css";

const User: React.FC<{item:IUser}> = (props) => {
  return (
    <div className="card">
    
        <h4>
        
        <img src="https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg" />
          <b>{props.item.id}</b><br></br>
          {props.item.first_name}<br></br>
          {props.item.last_name}<br></br>
          {props.item.email}<br></br>
        </h4>
        
        <p></p>
        </div>
  );
};
export default User;
