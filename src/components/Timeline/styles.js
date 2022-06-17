import styled from "styled-components";

const Main = styled.main`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
`

const Posts = styled.section`
width: 100%;
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const LargeTitle = styled.h1`
font-size: xx-large;
color: white;
`

export {Main, Posts, LargeTitle}