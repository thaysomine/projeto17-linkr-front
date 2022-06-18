import styled from "styled-components";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    * {
        box-sizing: border-box;
    }
`;

const H1 = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 900;
    font-size: 43px;
    color: #FFFFFF;
`;

export {Main, H1}