import styled from "styled-components";

const ContainerTrending = styled.div`
    box-sizing: border-box;
    width: 300px;

    background-color: #171717;
    border-radius: 10px;
    padding-bottom: 15px;

    h1 {
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 23px;
        color: white;
        padding-inline: 15px;
        padding-block: 15px;
    }

    hr {
        border: 1px #484848 solid;
        margin: 0;
    }
`;

const List = styled.ul`
    margin-top: 15px;
    padding-inline: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    li,
    a {
        font-family: "Lato", sans-serif;
        color: white;
        font-weight: 600;
        font-size: 19px;
        text-decoration: none;
    }
`;

export { ContainerTrending, List };