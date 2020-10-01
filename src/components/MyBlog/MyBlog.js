import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Container,CardGrid} from "./MyBlog.styles";
import SearchField from "components/SearchField";
import Card from "components/Card";


const MyBlog=()=>{
    const [items,setItems]=useState([]);
    const [searchItems,setSearchItems]=useState([]);
    const [inputValue,setInputValue]=useState('');

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            'https://jsonplaceholder.typicode.com/posts',
            );
        setItems(()=>{
                let itemsSet=[];
                for(let i=0;i<16;i++){
                itemsSet=[...itemsSet,result.data[i]];
                };
                return itemsSet;
        });
    };
        fetchData();
    }, []);

    const handleChange=(value)=>{
        setInputValue(value);
    };
    console.log(items);
    return(
        <Container>
            <h1 > My Blog</h1>
            <SearchField  value={inputValue} handleChange={handleChange}/>
            <CardGrid>
                {items.map((item,index)=>
                <Card key={index} 
                gridArea={index}
                title={item.title}
                body={item.body} 
                itemId={item.id}/>)}
            </CardGrid>
        </Container>
    )
};
export default MyBlog ;