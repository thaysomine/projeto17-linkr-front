import { Main, Posts, LargeTitle } from "./styles"
import Navbar from "../Navbar"
import Post from "../Post"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../../contexts/UserContext"
import { LineWave } from "react-loader-spinner"

function Timeline() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const {token} = useContext(UserContext)
    function getPosts() {
        const config = { headers: { Authorization: `Bearer ${token}` },
                         params: {limit: 10}}
       const promise = axios.get('http://localhost:5000/timeline', config)
       promise.then((response) => {
            setLoading(false)
            setPosts(response.data)
            console.log(response.data)
       })
       promise.catch((error)=>{
        const confirm = window.confirm('An error occured while trying to fetch the posts, please refresh the page')
        if(confirm) window.location.reload()
       })
    }

    useEffect(getPosts, [])

    return (
        <Main>
            <Navbar />
            <Posts>
                {
                    loading && <LineWave color="white"/>
                }
                {
                    (posts.length === 0 && !loading) && <LargeTitle>There are no posts yet</LargeTitle>
                }

                {
                    posts && posts.map((post, index) => {
                        const { username, description, link, likesCount, imageUrl, hashtag } = post
                        return <Post key={index}
                                     username  = {username}
                                     description = {description}
                                     link = {link}
                                     likesCount = {likesCount}
                                     imageUrl = {imageUrl}
                                     hashtag = {hashtag}/>
                    })
                }

            </Posts>
        </Main>
    )
}

export default Timeline