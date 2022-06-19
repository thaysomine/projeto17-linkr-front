import axios from "axios"
 import { useEffect, useState } from "react"
 import { SnippetBody, HorizontalStack, VerticalStack, SnippetImage, SnippetTitle, SnippetDescription, SnippetUrl } from "./styles"

 function LinkSnippet(props) {

     const [snippetInfo, setSnippetInfo] = useState({ title: '', description: '', image: '' })

     function getMetaData() {
         const postUrl = "http://localhost:5000/getMetadata"
         const promise = axios.post(postUrl, { "url": props.url })
         promise.then((response) => setSnippetInfo(response.data))
     }

     useEffect(getMetaData, [])

     return (
         <SnippetBody onClick={()=> window.open(props.url)}>
             <VerticalStack width={100}>
                 <HorizontalStack padding={'10px 0 0 30px'} margin={10}>
                     <SnippetTitle>{snippetInfo.title}</SnippetTitle>
                 </HorizontalStack>
                 <HorizontalStack padding={'0 0 0 30px'}>
                     <SnippetDescription>{snippetInfo.description}</SnippetDescription>
                 </HorizontalStack>
                 <HorizontalStack padding={'0 0 0 30px'} margin={8}>
                     <SnippetUrl>{props.url}</SnippetUrl>
                 </HorizontalStack>
             </VerticalStack>
             <VerticalStack width={40}>
                 <SnippetImage src={snippetInfo.image} />
             </VerticalStack>
         </SnippetBody>
     )
 }



 export default LinkSnippet