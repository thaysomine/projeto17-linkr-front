import { Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import { useState } from "react"
import LinkSnippet from "./LinkSnippet"

function Post(props) {

    const { userName, postContent, link, likesCount, imageUrl } = props
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [editing, SetEditing] = useState(false)
    function handleLike(like) { setIsLiked(!like) }
    function performEdit() { SetEditing(!editing) }
    function performDelete() { }

    return (
        <Body>
            <VerticalStack margin={8}>
                <ProfPic>
                    <Image />
                </ProfPic>
                <Likes isLiked={isLiked}>
                    <ion-icon name={`heart${isLiked ? '' : '-outline'}`}
                        onClick={() => handleLike(isLiked)} />
                    {`${likes} likes`}
                </Likes>
            </VerticalStack>


            <VerticalStack width={100}>
                <HorizontalStack alignment="space-between">
                    Username
                    <ChangeArea>
                        <ion-icon name="create-outline" onClick={() => performEdit()} />
                        <ion-icon name="trash-bin-outline" onClick={() => performDelete()} />
                    </ChangeArea>
                </HorizontalStack>

                <HorizontalStack>
                    <PostForm>
                        <Content type="text"
                            placeholder="User text here"
                            name="post"
                            editing={editing}
                        />
                    </PostForm>
                </HorizontalStack>

                <HorizontalStack>
                    <LinkSnippet url = {"https://www.npmjs.com/package/metadata-scraper"}/>
                </HorizontalStack>
            </VerticalStack>

        </Body>
    )
}

export default Post