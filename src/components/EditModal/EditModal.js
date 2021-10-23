import React,{useState} from "react";
import {
    ModalContainer,
    EditContainer,
    Title,
    SaveBtn,
    CancelBtn,
    ModalActions} from "./EditModal.styles";

const EditModal=({
    title,
    body,
    itemId,
    items,
    setItems,
    displayModal,
    setDisplayModal,
    })=>{

    const[editedTitle,setEditedTitle]=useState(title);
    const[editedBody,setEditedBody]=useState(body);
    const handleSave=()=>{       
        const newItems=items.map(item=>{
            if(item.id===itemId){
                item.title=editedTitle;
                item.body=editedBody;
            }
            return item;
        });        
        setItems([...newItems]);
        setDisplayModal(false);
    };
    const handleCancel=()=>{
        setDisplayModal(false);
        
    };
    const handleTitleChange=(e)=>{
        setEditedTitle(e.target.value);
    };
    const handleBodyChange=(e)=>{
        setEditedBody(e.target.value);
    };

return(
    <ModalContainer display={displayModal?"flex":"none"}>
        <EditContainer>
                <Title>Edit</Title>
            <label for="title">
                Title
            </label>
            <input
                id="title" 
                placeholder={"Edit"}
                onChange={handleTitleChange}
                value={editedTitle} />
            <label for="title">
                body
            </label>
            <textarea
                id="body" 
                placeholder={"Edit "}
                onChange={handleBodyChange}
                value={editedBody} />

            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <SaveBtn type={'button'} onClick={handleSave} >Save</SaveBtn>
            </ModalActions>
        </EditContainer>
    </ModalContainer>
    );
};

export default EditModal;