import React, { useEffect, useState } from "react";
import Add from "./Add";
import "./Add.tsx";
import "./Search.css";

const Search:React.FC<IProps> = () => {
  const [formView, setFormView] = useState(false);

  return (
    <div className="container">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <input type="text" id="header-search" placeholder="Search" name="s" />
        <button type="submit">Go</button>
      </form>
      <button type="submit" onClick={() => setFormView(true)}>
        ADDUSER{" "}
      </button>
      {formView && <Add />}
    </div>
  );
};
export default Search;

interface IProps {
    
}
