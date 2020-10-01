import React,{useState} from "react";
import {CardContainer,CardContent,Button} from "./Card.styles";
// import { Link } from "react-router-dom";
import EditModal from "components/EditModal";

const Card=({title,body,itemId,items,setItems})=>{
    const [displayModal,setDisplayModal]=useState(false);

    const handleDelete=()=>{
      const newItems=items.filter(item=>item.id!==itemId);
      setItems([...newItems]);
    };

    return(
      <CardContainer>
        <CardContent>
        <h3>{title}</h3>
        <p>{body}</p>
        </CardContent>
        read more
        <div style={{display:"flex"}}>
            <Button type={"button"} onClick={()=>setDisplayModal(true)}>
              Edit
            </Button>
            <Button type={"button"} onClick={handleDelete}>
              Delete
            </Button>
        </div>
        <EditModal displayModal={displayModal} 
                    setDisplayModal={setDisplayModal}
                    items={items}
                    setItems={setItems}
                    itemId={itemId} 
                    title={title}
                    body={body}
                    />
      </CardContainer>
    )
};
export default Card ;