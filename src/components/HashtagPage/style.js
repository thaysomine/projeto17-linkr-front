import styled from "styled-components";

const ContainerHashtag = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #333333;
    padding-top: 90px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    text-align: start;
    font-size: 36px;
    font-weight: bolder;
    color: white;
    padding-block: 20px;
`;

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export { ContainerHashtag, Title, MainContent, Feed };
