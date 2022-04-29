import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import userdata from "../apidata.json";


function Add()
{
  const navigate = useNavigate();
  const [addDetails ,setAddDetails] =useState({
    
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    designation:"",
    phone_no:"",
    city: "",
    department:"",
    date_of_birth:"",
    language:"",
    search: "",
  })
    
    const handleFirstNameInputChange =(event:any) =>{
      setAddDetails({...addDetails,first_name:event.target.value});}
    const handleLastNameInputChange =(event:any) =>{
        setAddDetails({...addDetails,last_name:event.target.value});}
  const handleEmailInputChange =(event:any) => {
      setAddDetails({...addDetails,email:event.target.value});}
    const handleGenderInputChange =(event:any) =>{
      setAddDetails({...addDetails,gender:event.target.value});}
      const handleDesignationInputChange =(event:any) =>{
        setAddDetails({...addDetails,designation:event.target.value});}
        const handlePhone_noInputChange =(event:any) =>{
          setAddDetails({...addDetails,phone_no:event.target.value});}
          const handleCityInputChange =(event:any) =>{
            setAddDetails({...addDetails,city:event.target.value});}
            const handleDepartmentInputChange =(event:any) =>{
              setAddDetails({...addDetails,department:event.target.value});}
            const handleDate_of_birthInputChange =(event:any) =>{
              setAddDetails({...addDetails,date_of_birth:event.target.value});}
              const handleLanguageInputChange =(event:any) =>{
                setAddDetails({...addDetails,language:event.target.value});
              }

              const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
                e.preventDefault();
                
                console.log({ addDetails });
                userdata.push({
                  id: userdata.length + 1,
                  first_name: addDetails.first_name,
                  last_name: addDetails.last_name,
                  email: addDetails.email,
                  gender:addDetails .gender,
                  designation: addDetails.designation,
                  phone_no:addDetails.phone_no,
                  city: addDetails.city,
                  department:addDetails.department,
                  date_of_birth:addDetails.date_of_birth,
                  language: addDetails.language,
                });
                navigate("/")
              }




  return (
    <div className="register">
      <div className="header">
        <h3>ADD USER DETAILS</h3>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Firstname : <input type="text" name="first_name" value={addDetails.first_name} onChange={handleFirstNameInputChange }/>
          </label>
        <br></br>
        <br></br>
        <label>
          Lastname : <input type="text" name="last_name" value={addDetails.last_name} onChange={handleLastNameInputChange}/>
          </label>
        <br></br>
        <br></br>
        <label>
          Email Address: <input type="email" name="email" value={addDetails.email} onChange={handleEmailInputChange}/>
        </label>
        <br></br>
        <br></br>
        <label>Gender :</label>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Female</label>
        <br></br>
        <br></br>

        <label>
          Designation :<input type="text" name="designation" value={addDetails.designation} onChange={handleDesignationInputChange} />
        </label>
        <br></br>
        <br></br>
        
        <label>
          Phone Number : <input type="text" name="phone" value={addDetails.phone_no} onChange={handlePhone_noInputChange}/>
        </label>
        <br></br>
        <br></br>
        <label>
          City : <input type="text" name="city" value={addDetails.city} onChange={handleCityInputChange}/>
        </label>
        <br></br>
        <br></br>
        <label>
          Department : <input type="text" name="department" value={addDetails.department} onChange={handleDepartmentInputChange}/>
        </label>
        <br></br>
        <br></br>
        <label>
          Date of Birth: <input type="date" name="dob" value={addDetails.date_of_birth} onChange={handleDate_of_birthInputChange}/>
        </label>
        <br></br>
        <br></br>
        <label>
          Language :<input type="text" name="language"value={addDetails.language} onChange={handleLanguageInputChange} />
        </label>
        <br></br>
        <br></br>
        <button  type="submit" className="save">
          Save
        </button>
        <br></br>
        <br></br>
        <button type="reset" className="save" >
          Cancel
        </button>
        <br></br>
      </form>
    </div>
  );
};
export default Add;
