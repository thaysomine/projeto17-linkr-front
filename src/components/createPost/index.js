import { useState } from "react";
import axios from "axios";
import { ProfPic, Image } from "../Navbar/styles";
import { Body, Form, H2, Input, Content, Button} from "./styles";


export default function CreatePost() {

    /*const userJSON = window.localStorage.getItem('linkr-user-token');
    const {token} = JSON.parse(userJSON);
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }*/

    const [disabled, setDisabled] = useState(false);
    const [link, setLink] = useState(""); 
    const [description, setDescription] = useState(""); 

    function  handleSubmit(event) {
        event.preventDefault();
        setDisabled(true);

        /*api.post('/post', {
            link,
            description
        }, config)
        .then(response => {
            setLink("");
            setDescription("");
            setDisabled(false);
            window.location.reload();
        })
        .catch(err => {
            console.log(err.response.data);
            alert("Houve um erro ao publicar seu link");
            setDisabled(false);
        });*/

        setTimeout(() => {
            setLink("");
            setDescription("");
            setDisabled(false);
            window.location.reload();
        }, 3000);
    }


    return (
        <Body>
            <ProfPic>
                <Image />
            </ProfPic>

            <Form onSubmit={handleSubmit}>
                <H2>What are you going to share today?</H2>
                {disabled?
                    <Input type="text" placeholder="http://..." 
                        value={link}
                        onChange={ e => setLink(e.target.value)}
                        disabled
                    />:
                    <Input
                        type="text" placeholder="http://..." 
                        value={link}
                        onChange={ e => setLink(e.target.value)} 
                    />
                }
                {disabled?
                    <Content 
                        placeholder="Awesome article about #javascript" 
                        value={description}
                        onChange={ e => setDescription(e.target.value)} 
                        disabled
                    />:
                    <Content
                        value={description}
                        placeholder="Awesome article about #javascript" 
                        onChange={ e => setDescription(e.target.value)} 
                    />
                }
                {disabled?
                    <Button type="submit" disabled>Publishing...</Button>:
                    <Button type="submit">Publish</Button>
                }
            </Form>
        </Body>
    );
}