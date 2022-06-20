import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import {Title, ContainerUser} from './styles';
import Navbar from '../Navbar';
import Main from '../MainContent';
import UserContext from "../../contexts/UserContext";
import { TrendingContext } from "../../contexts/TrendingContext";
import { ContainerHashtag } from '../HashtagPage/style';
import SearchBar from '../Navbar/SearchBar';

export default function Userpage() {
    //const token = 'qoasda342wf45iu36eq25iwueoqiwue';
    const {token} = useContext(UserContext);
    const {trending} = useContext(TrendingContext);
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');

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
    console.log(username);
    return (
        <>
            <Navbar />
            <ContainerUser>
                <div>
                    <SearchBar screen = "mobile"/>
                    <Title>{username}</Title>
                    <Main posts={posts} hashtags={trending} />
                </div>
            </ContainerUser>
        </>
    )
}

// TODO arrumar a barra de pesquisa 
// TODO versão mobile
