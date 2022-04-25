import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
import "./Add.tsx";
import "./Search.css";

const Search:React.FC<IProps> = () => {
  const [formView, setFormView] = useState(false);
  return (
    <div className="searchcontainer">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <input type="text" id="header-search" placeholder="Search" name="s" />
        <button type="submit" className="text-sm text-white bg-purple-500 ">Go</button>
        
      </form>
      <div>
      <Link to={"/add"} >Add User</Link>
    
      
      </div>
    </div>
  );
};
export default Search;

interface IProps {
    
}
