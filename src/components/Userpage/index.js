import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'

import Navbar from '../Navbar';
import Main from '../MainContent';
import UserContext from "../../contexts/UserContext";
import { ContainerHashtag } from '../HashtagPage/style';

export default function Userpage() {
    const token = 'qoasda342wf45iu36eq25iwueoqiwue';
    //const {token} = useContext(UserContext);
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');
    const hashtags = ["node", "javascript", "python", "linux"];

    useEffect(()=> {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const URL = `http://localhost:5000/user/${id}`;
        const promise = axios.get(URL, config);
        promise.then((response)=> {
            console.log(response)
            setPosts(response.data.posts);
            setUsername(response.data.name);
        });
        promise.catch((e)=> console.log(e));
    }, [id]);

    return (
        <>
            <Navbar />
            <ContainerUser>
                <div>
                    <Title>{username}</Title>
                    <Main posts={posts} hashtags={hashtags} />
                </div>
            </ContainerUser>
        </>
    )
}

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
`;
