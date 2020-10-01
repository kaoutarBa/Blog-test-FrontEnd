import React from "react";
import {Input} from "./SearchField.styles";

const SearchField=({inputValue,handleChange})=>{
    return(
      <Input 
      type={"text"} 
      placeholder={"Type in order to search "}
      value={inputValue}
      onChange={(e)=>handleChange(e.target.value)}/>
    )
};
export default SearchField ;