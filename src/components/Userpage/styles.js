import styled from 'styled-components'

const Title = styled.div`
    text-align: start;
    font-size: 36px;
    font-weight: bolder;
    color: white;
    padding-block: 20px;

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

    @media(max-width: 750px){

    }
`;

export {Title, ContainerUser}