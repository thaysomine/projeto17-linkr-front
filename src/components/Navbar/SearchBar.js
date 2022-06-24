import {DebounceInput} from 'react-debounce-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

import api from "../../api";
import { SearchField, SearchInput, AutocompleteBox, Suggestion, Image, Wrapper } from "./styles";
import UserContext from "../../contexts/UserContext";

function SearchBar(props){

    const { userInfo } = useContext(UserContext);
    const { token } = userInfo

    const {screen} = props;
    //const token = 'qoasda342wf45iu36eq25iwueoqiwue';
    const navigate = useNavigate();

    const [userList, setUserList] = useState([]);
    const [search, setSearch] = useState('');
    let showSuggestions = userList.length === 0;

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const URL = `http://localhost:5000/search/${search}`;
        const searchLength = (search.length===0);
        //const URL = `/search/${search}`;
        if (!searchLength) {
            console.log('cheguei no if')
            const promise = axios.get(URL, config); 
            console.log(promise);                                                     
            promise.then(response => {
                console.log('cheguei na resposta');
                console.log(response.data);
                setUserList(response.data);
            });
            promise.catch(e => console.log(e, userList));
        } else {
            setUserList([]);
        }
    },[search]);

    console.log(userList);

    return(
        <Wrapper>
            <SearchField searchbar= {screen}>
                <Wrapper>
                    <DebounceInput
                        element={SearchInput}
                        minLength={3}
                        debounceTimeout={300}
                        type="text" 
                        placeholder="Search for people" 
                        name="search"
                        onChange={(event) => {
                            setSearch(event.target.value);
                    }} />
                    <AiOutlineSearch color='#C6C6C6' size='25' onClick={()=> {
                        setUserList([]);
                        let id = userList[0].id;
                        console.log(id);
                        navigate(`/user/${id}`);
                    }}/>
                </Wrapper>
                <AutocompleteBox suggestionBox = {showSuggestions}>
                {userList.map(({id, username, imageUrl}) => {
                        return (
                            <Suggestion onClick={() => {
                                setUserList([]);
                                navigate(`/user/${id}`);
                            }}>
                                <Image src={imageUrl}/>
                                <p>{username}</p> 
                            </Suggestion>
                        )
                    })}
                </AutocompleteBox>
            </SearchField>
        </Wrapper>
    )
}


export default SearchBar
