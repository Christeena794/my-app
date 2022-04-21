import React from "react";
import "./User.css";

const User: React.FC<IProps> = (props) => {
  return (
    <div className="card">
      
        <h4>
          <b>{props.item.id}</b><br></br>
          {props.item.last_name}<br></br>
          {props.item.email}<br></br>
        </h4>

        <p></p>
        </div>
  );
};
export default User;

interface IProps {
  item: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    designation: string;
    phone_no: number;
  };
}
