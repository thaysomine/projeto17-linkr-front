import { SearchField, SearchInput } from "./styles";


function SearchBar(props){

    return(
        <SearchField>
             <SearchInput type="text" placeholder="Search for people" name="search"></SearchInput>
        </SearchField>
    )
}


export default SearchBar