import styled from "styled-components";

const ContainerTrending = styled.div`
    box-sizing: border-box;
    width: 335px;

    background-color: #171717;
    border-radius: 10px;
    padding-bottom: 25px;

    h1 {
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 26px;
        color: white;
        padding-inline: 25px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    hr {
        border: 1px #484848 solid;
        margin: 0;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

const List = styled.ul`
    margin-top: 15px;
    padding-inline: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li,
    a {
        font-family: "Lato", sans-serif;
        color: white;
        font-weight: 700;
        font-size: 21px;
        text-decoration: none;
        letter-spacing: 0.05em;
    }
`;

export { ContainerTrending, List };
