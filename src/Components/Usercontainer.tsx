import React, { useEffect, useState } from "react";
import User from "./User";
import "./User.css";

const Usercontainer = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/users.json?key=3c7caa60"
    );
    const data = await response.json();
    setUsersData(data);
    console.log(data);

  };

  return (
    <div className="container">
      {usersData.map((item) => (
        <User item={item}/>
      ))}
    </div>
  );
};

export default Usercontainer;

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  designation: string;
  phone_no: number;
}
// const usersData=[
//   {
//     id: 1,
//     first_name: "Amal",
//     last_name: "jith",
//     email: "amal@123",
//     gender: "Male",
//     designation: "Associate",
//     phone_no: 987654321
//   },
//   {
//     id: 2,
//     first_name: "Sera",
//     last_name: "lima",
//     email: "sera@123",
//     gender: "female",
//     designation: "Associate",
//     phone_no: 987654921
//   },
//   {
//     id: 3,
//     first_name: "Isa",
//     last_name: "Mariyam",
//     email: "isa@123",
//     gender: "female",
//     designation: "Associate",
//     phone_no: 987654361
//   },
//   {
//     id: 4,
//     first_name: "christeena",
//     last_name: "jo",
//     email: "chris@123",
//     gender: "female",
//     designation: "Associate",
//     phone_no: 987654321
//   },
//   {
//     id: 5,
//     first_name: "changel",
//     last_name: "bony",
//     email: "changel@123",
//     gender: "female",
//     designation: "Associate",
//     phone_no: 977654321
//   },
  

//]