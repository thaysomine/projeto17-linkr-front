import styled from "styled-components";

const Title = styled.div`
    text-align: start;
    font-size: 36px;
    font-weight: bolder;
    color: white;
    padding-block: 20px;
    padding-bottom: 40px;
    margin-left: 18px;
    margin-top: 20px;
`;

const ContainerUser = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #333333;
    padding-top: 90px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top {
        display: flex;
        align-items: center;
        margin-left: 18px;
    }
    .Follow {
        color: #FFFFFF;
        background: #1877F2;
    }
    .Unfollow {
        color: #1877F2;
        background: #FFFFFF;
    }
    .Loading {
        opacity: 20%;
    }

    @media (max-width: 750px) {
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 31px;
    background: #1877F2;
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

`;

export { Title, ContainerUser, Div };
