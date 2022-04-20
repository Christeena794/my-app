import React, { useEffect, useState } from "react";
import User from "./User";

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
    <div>
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
