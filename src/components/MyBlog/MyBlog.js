import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Container,CardGrid} from "./MyBlog.styles";
import SearchField from "components/SearchField";
import Card from "components/Card";
import AddModal from "components/AddModal";



const MyBlog=()=>{
    const [filteredItems,setFilteredItems]=useState([]);
    const [items,setItems]=useState([]);
    const [inputValue,setInputValue]=useState("");
    const [displayModal,setDisplayModal]=useState(false);

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
        const newItems = items
            .map(item => item.title)
            .filter(title => {
            const searchExpression = new RegExp(value, "gi");
            return title.match(searchExpression);
            });
        if (value !== "") {
        setFilteredItems([
            ...items.filter(item => newItems.includes(item.title))
        ]);
        setInputValue(value);
        } else {
            setFilteredItems([]);
            setInputValue(value);
        } };

    return(
        <Container>
            <h1> My Blog</h1>
            <SearchField  value={inputValue} handleChange={handleChange}/>
            <button type={"button"} onClick={()=>setDisplayModal(true)}>Add item</button>
            <CardGrid>
                {filteredItems[0]?(filteredItems.map((item,index)=>
                <Card key={index} 
                gridArea={index}
                title={item.title}
                body={item.body} 
                itemId={item.id}/>)):
                (items.map((item,index)=>
                <Card key={index} 
                gridArea={index}
                title={item.title}
                body={item.body} 
                itemId={item.id}/>))
                }
            </CardGrid>
            <AddModal displayModal={displayModal} 
                    setDisplayModal={setDisplayModal}
                    items={items}
                    setItems={setItems}/>
        </Container>
    )
};
export default MyBlog ;