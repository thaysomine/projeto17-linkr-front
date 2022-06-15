import styled from "styled-components";

const Body = styled.article`
margin-top: 110px;
width: 600px;
height: 276px;
background-color: #171717;
border-radius: 15px;
display: flex;
padding: 10px;
color: white;


`
const VerticalStack = styled.div`
width: ${props => props.width}%;
height: 100%;
margin-right: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 3px;
`

const HorizontalStack = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: ${props => props.alignment ? props.alignment : 'flex-start'};
`

const Likes = styled.div`
width: 50px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: small;
margin-top: 10px;

ion-icon{
    font-size: x-large;
    font-weight: 800;
    margin-bottom: 5px;
    color: ${props => props.isLiked ? 'red': 'white'};
}
`

const ChangeArea = styled.div`
ion-icon{
    font-size: large;
    font-weight: 800;
    margin: 5px;
}
`

const PostForm = styled.form`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.textarea`
width: 100%;
border: none;
border-radius: 9px;
padding: 6px;
font-size: 17px;
color:  ${props => props.editing ? 'black' : 'white'};
pointer-events: ${props => props.editing ? 'all' : 'none'};
background-color: ${props => props.editing ? 'white' : 'transparent'};

`

export {Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content}