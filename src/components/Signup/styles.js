import styled from 'styled-components'

const Banner = styled.section`
background: rgba(21, 21, 21, 1);
color: white;
width: 70%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media(max-width: 800px){
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
}
`
const Main = styled.main`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;

@media(max-width: 800px){
    flex-direction: column;
}
`

const AuthSection = styled.aside`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AuthForm = styled.form`
margin-top: 20%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;

:disabled{
    background: #ccc;
}
`

const FormLabel = styled.label`
margin-bottom: 10px;
`

const FormInput = styled.input`
width: 250px;
height: 15px;
border-radius: 5px;
border: 1px #D4D4D4 solid;
padding: 20px;
font-size: large;
`

const RoundedButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 290px;
height: 45px;
background: rgba(31, 94, 238, 1);
color: white; 
border: none;
border-radius: 5px;
font-size: medium;
`

const UnderlineLink = styled.p`
color: white;
text-decoration-line: underline;
`

const LargeTitle = styled.h1`
font-family: 'Passion One', cursive;
font-size: xxx-large;
`

const Title = styled.h2`
font-size: larger;
`

export {AuthSection, Banner, Main, AuthForm, FormLabel, FormInput, RoundedButton, UnderlineLink, LargeTitle, Title}