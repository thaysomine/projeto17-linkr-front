import {
    Header,
    Logo,
    ProfPic,
    Image,
    DropDownContent,
    DropDownItem,
} from "./styles";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);

    const redirectUser = useNavigate();
    function signout() {
        localStorage.removeItem("linkr-user-credentials");
        redirectUser("/");
    }

    function verifyUser() {
        const tokenObject = localStorage.getItem("linkr-user-credentials");
        const { token } = JSON.parse(tokenObject);
        //FUTURO: verificar se a sessão expirou
        if (!token) redirectUser("/");
    }

    useEffect(verifyUser, []);

    return (
        <Header>
            <Logo>
                <Link to="/timeline"> linkr </Link>
            </Logo>
            <SearchBar screen="desktop" />
            <ProfPic>
                <ion-icon
                    name={`chevron-${menuToggle ? "down" : "up"}-outline`}
                    onClick={() => setMenuToggle(!menuToggle)}
                />
                <Image />
            </ProfPic>
            <DropDownContent isShowing={menuToggle}>
                <DropDownItem onClick={() => signout()}>Log Out</DropDownItem>
            </DropDownContent>
        </Header>
    );
}

export default Navbar;
