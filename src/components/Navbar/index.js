import {Header, Logo, ProfPic, Image, DropDownContent} from './styles'
import SearchBar from './SearchBar'

function Navbar(){
    return(
       <Header>
           <Logo>linkr</Logo>
           <SearchBar/>
           <ProfPic><Image/></ProfPic>
           <DropDownContent>Log Out</DropDownContent>
       </Header>
    )
}

export default Navbar