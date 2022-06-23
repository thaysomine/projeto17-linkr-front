import styled from "styled-components";

const Body = styled.div`
display:flex;
flex-direction: column;
background-color: #1E1E1E;
color: #fff;
border-radius:16px;
margin-top:20px;
`;

const BodyPost = styled.article`
width: 600px;
background-color: #171717;
border-radius: 16px;
display: flex;
padding: 10px;
color: white;
`;

const VerticalStack = styled.div`
    width: ${(props) => props.width}%;
    height: 100%;
    margin: ${(props) => props.margin}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const HorizontalStack = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.alignment ? props.alignment : "flex-start"};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin}px;

    a {
        color: white;
        text-decoration: none;
    }
`;

const SnippetBody = styled.article`
    margin-top: 5px;
    width: 100%;
    height: 150px;
    background-color: #171717;
    border: 1px solid gray;
    border-radius: 10px;
    //padding: 25px 0px 10px 25px;
    display: flex;
    cursor: pointer;
`;
const SnippetImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0 10px 10px 0;
`;
const SnippetTitle = styled.h1`
    font-size: larger;
    font-weight: 800;
    color: #cecece;
    font-family: "Lato", sans-serif;
`;
const SnippetDescription = styled.p`
    font-size: small;
    line-break: auto;
    color: #cecece;
    font-family: "Lato", sans-serif;
    width: 95%;
`;
const SnippetUrl = styled.h2`
    font-size: small;
    color: lightgray;
    font-family: "Lato", sans-serif;
`;

const Likes = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: small;
    margin-top: 10px;

    ion-icon {
        font-size: x-large;
        font-weight: 800;
        margin-bottom: 5px;
        color: ${(props) => (props.isLiked ? "red" : "white")};
    }
`;

const ChangeArea = styled.div`
    display: ${(props) => (props.visible ? "flex" : "none")};
    ion-icon {
        font-size: large;
        font-weight: 800;
        margin: 5px;
    }
`;

const PostForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PostDescription = styled.span`
    width: 100%;
    color: #b7b7b7;
`;

const Content = styled.textarea`
    width: 100%;
    border: none;
    border-radius: 9px;
    padding: 6px;
    font-size: 17px;
    resize: vertical;
    color: ${(props) => (props.editing ? "black" : "white")};
    pointer-events: ${(props) => (props.editing ? "all" : "none")};
    background-color: ${(props) => (props.editing ? "white" : "transparent")};
`;

const ConfirmBox = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    position: fixed;
    z-index: 2;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: 50%;
    justify-content: center;
`;

const RepostBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 33px;
    padding: 12px;
    gap: 6px;
    
    
    span {
        font-family: 'Lato';
        font-size: 11px;
        font-weight: 400;
    }
    strong {
        font-family: 'Lato';
        font-size: 11px;
        font-weight: 700;
    }
`;

const ConfirmCard = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 597px;
    height: 262px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #333333;
    border-radius: 50px;
    z-index: 2;
    p {
        margin: 8px 0;
        width: 370px;
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        text-align: center;
        color: #ffffff;
    }
    button {
        width: 95px;
        p {
            color: #ffffff;
        }
    }

    @media (max-width: 750px) {
        width: 80%;
        height: fit-content;
        padding: 40px 20px;
        border-radius: 20px;
        p {
            width: fit-content;
            font-family: var(--font-family);
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #ffffff;
        }
    }
`;

const CheckAnswer = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-evenly;
`;

const GoBackButton = styled.button`
    height: 37px;
    min-width: 134px;
    color: #1877f2;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #ffffff;
    :hover {
        filter: brightness(95%);
    }
    @media (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
        min-width: fit-content;
    }
`;

const ConfirmButton = styled.button`
    height: 37px;
    min-width: 134px;
    background-color: #1877f2;
    color: #ffffff;
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 27px;
    cursor: pointer;
    :hover {
        filter: brightness(95%);
    }
    @media (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
        min-width: fit-content;
    }
    @media (max-width: 290px) {
        margin-left: 10px;
    }
`;

const Input = styled.input`
    all: unset;
    outline: none;
    border: none;
    text-indent: 17px;
    margin-bottom: 13px;
    border-radius: 6px;
    font-family: var(--font-family);

    width: 100%;
    height: 44px;

    font-size: 14px;

    color: #4c4c4c;
    background-color: #ffffff;
    :focus {
        filter: brightness(95%);
    }
    ::placeholder {
        color: #4c4c4c;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    @media (max-width: 900px) {
        height: 55px;
    }
`;

const Hashtag = styled.span`
    color: white;
    font-weight: 800;
    a {
        text-decoration: none;
        color: white;
    }
`;

export {
    Body,
    BodyPost,
    VerticalStack,
    HorizontalStack,
    Likes,
    Hashtag,
    SnippetBody,
    SnippetImage,
    SnippetTitle,
    SnippetDescription,
    SnippetUrl,
    ChangeArea,
    PostForm,
    PostDescription,
    Content,
    ConfirmBox,
    RepostBox,
    ConfirmCard,
    CheckAnswer,
    GoBackButton,
    ConfirmButton,
    Input,
};
