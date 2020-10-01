import styled from "styled-components";



const  ModalContainer=styled.div`
  display:${props=>props.display};
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background: #0a0a0a99; 
  overflow-y:hidden;
`;

const EditContainer= styled.div`
width: 474px;
height: 237px;
background: rgba(255, 255, 255, 0.99);
border: 1px solid #15950A;
border-radius: 10px;
margin:auto;
display:flex;
flex-direction:column;
`;
const Title=styled.div`

font-family:sans-serif;
font-style: bold;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #15950A;

`;



const SaveBtn=styled.button`
width: 76px;
height: 30px;
background: #15950A;
border: 1px solid #15950A;
box-sizing: border-box;
border-radius: 5px;

font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #FEFEFE;
border:none;
outline:none;
cursor: pointer;
margin:10px;

`;

const CancelBtn=styled.button`
width: 47px;
height: 18px;

font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #15950A;
background-color: white; 
margin:10px;
border:none;
outline:none;
cursor: pointer;
`;

const ModalActions=styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
margin-right:10px;

`;



export {
  ModalContainer,
  EditContainer,
  Title,
  SaveBtn,
  CancelBtn,
  ModalActions};