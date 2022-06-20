import styled from "styled-components";

const Main = styled.main`
    width: 100%;
    height: 100%;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    * {
        box-sizing: border-box;
    }
`;

const Posts = styled.section`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 `

const H1 = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 900;
    font-size: 43px;
    color: #FFFFFF;
`;

export {Main,Posts, H1}