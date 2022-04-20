import React from "react";

type Props = {};
const Add = (props: Props) => {
  return (
   
    <form>  
        <h3>ADD USER DETAILS</h3>
  
        <label>Firstname: <input type="text" name="firstname"/></label><br></br>
        <label>Lastname: <input type="text" name="lastname"/></label><br></br>
        <label>Gender:</label><br></br>
        <input type="radio" name="gender" id="male"/>
    <label htmlFor="male">Male</label>
    <input type="radio" name="gender" id="female"/>
    <label htmlFor="female">Female</label><br></br>
       
        <label>Designation:</label><br></br>
        <select name="designation" id="designation"><br></br>
        <option value="developer">Software Developer</option>
        <option value="engineer">Associate Engineer</option>
        <option value="engineer">Software Engineer</option>
    </select><br></br>
        
    <label>Email Address: <input type="email" name="email"/></label><br></br>
        <label>Phone Number: <input type="text" name="phone"/></label><br></br>
        <label>City: <input type="text" name="city"/></label><br></br>
        <label>Department: <input type="text" name="department"/></label><br></br>
        <label>Date of Birth: <input type="date" name="dob"/></label><br></br>
       
        <label>Language:</label><br></br>
        <input type="checkbox" name="language" value="english" id="english"/>
        <label htmlFor="english">English</label>
        <input type="checkbox" name="language" value="malayalam" id="malayalam"/>
        <label htmlFor="malayalam">Malayalam</label>
        <input type="checkbox" name="language" value="hindi" id="hindi"/>
        <label htmlFor="hindi">Hindi</label><br></br>
        
        <input type="submit" value="Submit"/><br></br>
    </form>
  );
};
export default Add;