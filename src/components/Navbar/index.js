import { Header, Logo, ProfPic, Image, DropDownContent, DropDownItem } from './styles'
import SearchBar from './SearchBar'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false)
    
    const redirectUser = useNavigate()
    function signout() {
        localStorage.removeItem('linkr-user-token')
        redirectUser("/")
    }

    function verifyUser(){
        const token = localStorage.getItem('linkr-user-token')
        //FUTURO: verificar se a sessão expirou 
        if (!token) redirectUser('/')
    }

    useEffect(verifyUser, [])

    return (
        <Header>
            <Logo>linkr</Logo>
            <SearchBar />
            <ProfPic>
            <ion-icon name={`chevron-${menuToggle ? 'down': 'up'}-outline`}
                       onClick={()=> setMenuToggle(!menuToggle)} />
                <Image />
            </ProfPic>
            <DropDownContent isShowing = {menuToggle}>
                <DropDownItem onClick={() => signout()}>Log Out</DropDownItem>
            </DropDownContent>
        </Header>
    )
}

export default Navbar