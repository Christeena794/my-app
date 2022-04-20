import React from "react";
import "./User.css";

const User: React.FC<IProps> = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{props.item.first_name}</b>
          <b>{props.item.last_name}</b>
        </h4>

        <p></p>
      </div>
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
