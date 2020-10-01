import React,{useState} from "react";
import {
    ModalContainer,
    AddContainer,
    Title,
    SaveBtn,
    CancelBtn,
    ModalActions} from "./AddModal.styles";
import shortid from 'shortid';

const AddModal=({
    items,
    setItems,
    displayModal,
    setDisplayModal,
    })=>{

    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");

    const handleSave=()=>{               
        setItems([...items,
                {id:shortid.generate(),
                userId:shortid.generate(),
                title:title,
                body:body}
            ]);
        setDisplayModal(false);
        setTitle("");
        setBody("");
    };
    const handleCancel=()=>{
        setDisplayModal(false);
        setTitle("");
        setBody("");
    };
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    };
    const handleBodyChange=(e)=>{
        setBody(e.target.value);
    };

return(
    <ModalContainer display={displayModal?"flex":"none"}>
        <AddContainer>
                <Title>Add</Title>
            <label for="title">
                Title
            </label>
            <input
                id="title" 
                placeholder={"add a title"}
                onChange={handleTitleChange}
                value={title} />
            <label for="title">
                body
            </label>
            <textarea
                id="body" 
                placeholder={"add a title"}
                onChange={handleBodyChange}
                value={body} />

            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <SaveBtn type={'button'} onClick={handleSave} >Save</SaveBtn>
            </ModalActions>
        </AddContainer>
    </ModalContainer>
    );
};

export default AddModal;