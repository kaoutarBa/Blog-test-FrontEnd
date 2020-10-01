import styled from "styled-components";

const Container=styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`;

const CardGrid=styled.div`
display:grid;
grid-gap:10px;
grid-template-columns: 200px 200px 200px 200px;
grid-template-rows: auto;
`;


export {Container,CardGrid};