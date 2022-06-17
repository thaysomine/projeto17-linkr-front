import styled from "styled-components";

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;

    .error {
        padding-top: 45px;
        text-align: center;
        width: 611px;
        color: white;
        font-size: 29px;
    }
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export { Feed, MainContent };
