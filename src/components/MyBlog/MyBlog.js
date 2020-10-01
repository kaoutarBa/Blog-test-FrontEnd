import React,{useState} from "react";
import {Container} from "./MyBlog.styles";
import SearchField from "components/SearchField";
import Card from "components/Card";

const MyBlog=()=>{
    const [items,setItems]=useState([]);
    const [searchItems,setSearchItems]=useState([]);
    const [inputValue,setInputValue]=useState('');
    const handleChange=(value)=>{
        setInputValue(value);
    };

    return(
        <Container>
            <h1> My Blog</h1>
            <SearchField value={inputValue} handleChange={handleChange}/>

        </Container>
    )
};
export default MyBlog ;