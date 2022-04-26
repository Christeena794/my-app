 import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import IUser from '../types';
// import userdata from "../apidata.json";
// import Props = {Props}

// function UsersList({}: Props){
//   const [userdata,setUserData] =useState<IUser>()
//   const{userId} = useParams();
// console.log(userdata)


// useEffect(() => {
//   setUserData(userdata.find((user) => user.id === Number(userId)))
// }, [userdata])
  

// return (
//   <form>
//     <div className='userd'>
//       <div>
//         Firstname :<p className='first'>{userdata?.first_name}</p>
//       </div>

//       <div>
//         Lastname :<p className='last'>{userdata?.last_name}</p>
//       </div>

//       <div>
//         Email Address :<p className='mail'>{userdata?.email}</p>
//       </div>

//       <div>
//         Gender :<p className='gender'>{userdata?.gender}</p>
//       </div>

//       <div>
//         Designation :<p className='desn'>{userdata?.designation}</p>
//       </div>

//       <div>
//         Phone Number :<p className='pnno'>{userdata?.phone_no}</p>
//       </div>

//       <div>
//         City :<p className='city'>{userdata?.city}</p>
//       </div>

//       <div>
//         Department :<p className='depart'>{userdata?.department}</p>
//       </div>

//       <div>
//         Date of Birth :<p className='dob'>{userdata?.date_of_birth}</p>
//       </div>

//       <div>
//         Language :<p className='language'>{userdata?.language}</p>
//       </div>
//       </div>
  
//   </form>
//   );
// };

// export default UsersList;