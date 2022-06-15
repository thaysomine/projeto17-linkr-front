import styled from "styled-components"

const Header = styled.header`
height: 40px;
background-color: black;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
font-size: xx-large;
top: 0;
left: 0;
right: 0;
padding: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Logo = styled.h1`
font-family: 'Passion One', cursive;
font-weight: 400;
color: white;
`
const SearchField = styled.form`
width: 300px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 700px){
    display: none;
}
`
const SearchInput = styled.input`
width: 90%;
height: 90%;
border: none;
border-radius: 9px;
padding: 6px;
font-size: 17px;
`
const ProfPic = styled.div`
width: 45px;
height: 45px;
background: white;
border: 1px gray;
border-radius: 50px;
`
const Image = styled.img`
width: 45px;
height: 45px;
border-radius: 50px;
`
const DropDownContent = styled.div`
 margin-top: 40px;
 background-color: black;
 width: 150px;
 height: 47px;
 color: white;
 position: fixed;
 top: 40px;
 right: 0;
 font-size: medium;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 0 0 0 5px;
 cursor: pointer;
`

export {Header, SearchField, SearchInput, Logo, ProfPic, Image, DropDownContent}