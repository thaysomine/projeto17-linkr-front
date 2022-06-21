import styled from "styled-components";

const Body = styled.article`
    width: 611px;
    height: 215px;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
    padding: 16px;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* margin-top: 30px; */
`;

const Form = styled.form`
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: 18px;
`;

const H2 = styled.h2`
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #707070;
    margin-top: 5px;
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    font-size: 15px;
    background: #efefef;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px;

    ::placeholder {
        font-family: "Lato";
        font-weight: 300;
        color: #949494;
    }
`;

const Content = styled.textarea`
    width: 100%;
    max-width: 516px;
    height: 66px;
    max-height: 66px;
    font-size: 15px;
    background: #efefef;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px 10px;

    ::placeholder {
        font-family: "Lato";
        font-weight: 300;
        color: #949494;
    }
`;

const Button = styled.button`
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 112px;
    height: 31px;
    background: #1877f2;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 5px;
    cursor: pointer;
`;

export { Body, Form, H2, Input, Content, Button };
