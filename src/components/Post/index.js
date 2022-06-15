import { Body, VerticalStack, HorizontalStack, Likes, ChangeArea, PostForm, Content } from "./styles"
import { ProfPic, Image } from "../Navbar/styles"
import { useState } from "react"
import { ReactTinyLink } from 'react-tiny-link'

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
            <VerticalStack>
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
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={2}
                        minLine={1}
                        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
                    />
                </HorizontalStack>
            </VerticalStack>

        </Body>
    )
}

export default Post