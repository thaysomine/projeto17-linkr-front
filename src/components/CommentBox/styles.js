import styled from "styled-components";

const CommentContainer = styled.div`
    width: 85%;
`;

const Form = styled.form`
    box-sizing: border-box;
    height: 115px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-around;
    h1 {
        font-size: 19px;
        text-align: center;
    }

    .input-fields {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;
        input {
            width: 80%;
            height: 30px;
            border-radius: 5px;
            padding-inline: 3px;
            outline: none;
            border: 1px solid gray;
            background-color: rgba(0, 0, 0, 0.123);
        }

        button {
            border-radius: 5px;
            padding-inline: 3px;
            outline: none;
            padding-inline: 10px;
            border: 1px solid gray;
            background-color: rgb(64, 64, 252);
            color: white;
            font-size: 17px;
            cursor: pointer;
        }
    }
`;

export { CommentContainer, Form };
