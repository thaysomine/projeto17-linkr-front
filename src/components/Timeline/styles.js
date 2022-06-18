import styled from "styled-components";

const Main = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 110px;
display: flex;

* {
        box-sizing: border-box;
    }
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

const H1 = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 900;
    font-size: 43px;
    color: #FFFFFF;
`;

export {Main, Posts, LargeTitle, H1}
