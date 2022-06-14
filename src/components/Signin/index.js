import { AuthSection, Banner, Main, AuthForm, FormLabel, FormInput, RoundedButton, UnderlineLink, LargeTitle, Title } from "../Signup/styles";
import { useState } from 'react'
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';



function Signin() {
    const url = 'http://localhost:5000/signin'
    const [signinData, setSigninData] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const redirectUser = useNavigate()

    function signin(event) {
        setLoading(true)  
        event.preventDefault()
        const promise = axios.post(url, 
            {
                email: signinData.email, 
                password: signinData.password
            }
        )
        promise.then(()=>{
            setLoading(false) 
            redirectUser("/timeline") 
        })
        .catch(err =>{
            alert(err.response.data)
            setLoading(false)
        })
     }

    return (
        <Main>
            <Banner>
                <LargeTitle>linkr</LargeTitle>
                <Title>save, share an discover the bests links on the web</Title>
            </Banner>
            <AuthSection>
                <AuthForm onSubmit={signin}>

                    <FormLabel>
                        <FormInput type="e-mail" name="e-mail" placeholder="E-mail" value={signinData.email} onChange={(e) => setSigninData({ ...signinData, email: e.target.value })} required disabled={loading} />
                    </FormLabel>

                    <FormLabel>
                        <FormInput type="password" name="password" placeholder="Password" value={signinData.password} onChange={(e) => setSigninData({ ...signinData, password: e.target.value })} required disabled={loading} />
                    </FormLabel>

                    <RoundedButton> {loading ? <ThreeDots color="white" height={80} width={80}/> : "Log In" }</RoundedButton>
                </AuthForm>

                <Link to={"/signup"}>
                    <UnderlineLink>First time? Create an account!</UnderlineLink>
                </Link>
            </AuthSection>


        </Main>
    )
}

export default Signin