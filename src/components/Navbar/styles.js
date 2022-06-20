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
z-index: 1;
`
const Logo = styled.h1`
font-family: 'Passion One', cursive;
font-weight: 400;
color: white;
`
const SearchField = styled.div`
background-color: white;
width: 100%;
height: auto;
display:flex;
align-items: center;
justify-content: center;
border-radius: 8px;
position: relative;
z-index: 2;

@media(max-width: 700px){
    display: none;
}
`
const SearchInput = styled.input`
width: 100%;
height: 30px;
border: none;
border-radius: 8px;
padding: 6px;
font-size: 17px;
z-index: 2;
:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
`
const ProfPic = styled.div`
height: 45px;
border: 1px gray;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;


ion-icon{
    color: white;
    font-size: larger;
    margin-right: 25px;
    cursor: pointer;
    
}
`
const Image = styled.img`
width: 45px;
height: 45px;
border-radius: 50px;
background: white;
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
 z-index: -1;

 transform: ${props => props.isShowing ? 'translate(0, 0)' : 'translate(0, -50px)'};
 opacity:  ${props => props.isShowing ? '1' : '0'};
 transition-duration: 0.5s;
`

const AutocompleteBox = styled.div`
    background-color: #E7E7E7;
    position: absolute;
    top: 37px;
    width: inherit;
    max-height: 500px;
    box-sizing: border-box;
    padding: 13px 17px 7px 17px;
    border-radius: 0px 0px 8px 8px;
    overflow-y: scroll;
    z-index: 2;
    display: ${props => props.suggestionBox ? 'none' : ''};
`;

const Suggestion = styled.div`
    background-color: #E7E7E7;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    p {
        margin-left: 12px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #515151;
        overflow: hidden;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width:300px;
    box-sizing: border-box;
    padding: 0px 10px;
    height: auto;
`;

const DropDownItem = styled.p``

export {Header, SearchField, SearchInput, Logo, ProfPic, Image, DropDownContent, DropDownItem, AutocompleteBox, Suggestion, Wrapper}