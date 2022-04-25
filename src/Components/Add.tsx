import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

type Props = {};
const Add = (props: Props) => {

  // const [id, setId] = useState("");

  // const [firstName, setFirstName] = useState("");

  // const [lastName, setLastName] = useState("");

  // const [Email, setEmail] = useState("");

  // const [Gender, setGender] = useState("");

  // const [Designation, setDesignation] = useState("");

  // const [Phno, setPhonenumber] = useState("");

  // const [City, setCity] = useState("");

  // const [department, setDepartment] = useState("");

  // const [dob, setDOB] = useState("");

  // const [language, setlanguage] = useState("");



  // const handleSubmit = (e:React.FormEvent) => {

  //     e.preventDefault();

  //     userdata.push({

  //         id:Number(id),

  //         first_name:firstName,

  //         last_name :lastName,

  //         email:Emailid,

  //         gender:Gender,

  //         designation:Designation,

  //         phone_no:Number(Phno),

  //         city:City,

  //         department:department,

  //         date_of_birth:dob,

  //         language:language,



  const navigate=useNavigate();
  return (
   
   <div className="register">
      <div className="header">
        <h3>ADD USER DETAILS</h3></div>  
   
    <form className="form">
    
        <label >Firstname   : <input type="text" name="firstname"/></label><br></br><br></br>
        <label>Lastname     : <input type="text" name="lastname"/></label><br></br><br></br>
        <label>Gender       :</label>
        <input type="radio" name="gender" id="male"/>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female"/>
          <label htmlFor="female">Female</label><br></br><br></br>
       
        <label>Designation  :<input type="text" name="designation"/></label><br></br><br></br>
        <label>Email Address: <input type="email" name="email"/></label><br></br><br></br>
        <label>Phone Number : <input type="text" name="phone"/></label><br></br><br></br>
        <label>City         : <input type="text" name="city"/></label><br></br><br></br>
        <label>Department   : <input type="text" name="department"/></label><br></br><br></br>
        <label>Date of Birth: <input type="date" name="dob"/></label><br></br><br></br>
        <label>Language     :<input type="text" name="language"/></label><br></br><br></br>
        <button type="submit" className="save" onClick={() => navigate(-1)}>Save</button><br></br><br></br>
        <button type="submit" className="save" onClick={() => navigate(-1)}>Cancel</button><br></br>
    </form>
    </div>
  );
};
export default Add;