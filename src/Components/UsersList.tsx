import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  IUser  from '../types';
import "./UsersList.css";
 
const UsersList: React.FC<IProps> = (props) => {
  const [userData, setUserData] = useState<IUser>();
  const { userid } = useParams();
 
  useEffect(() => {
    setUserData(props.usersData?.find((user) => user.id === Number(userid)))
  }, [props.usersData]);
  console.log(userData);
 
  return (
    <form>
      <div className='user'>
        <h5>DETAILS OF USER</h5>
        <div> Firstname :{userData?.first_name}</div>
        <div> Lastname  :{userData?.last_name}</div>
        <div>Email Address :{userData?.email}</div>
        <div>Gender :{userData?.gender}</div>
        <div>Designation :{userData?.designation}</div>
        <div>Phone Number :{userData?.phone_no}</div>
        <div>City :{userData?.city}</div>
        <div>Department :{userData?.department}</div>
        <div>Date of Birth :{userData?.date_of_birth}</div>
        <div>Language :{userData?.language}</div>
        <button>Delete</button>
 
      </div>
    </form>
  );
}
export default UsersList;
 
interface IProps {
  usersData: IUser[];
}
