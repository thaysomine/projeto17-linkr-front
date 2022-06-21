import {
    AuthSection,
    Banner,
    Main,
    AuthForm,
    FormLabel,
    FormInput,
    RoundedButton,
    UnderlineLink,
    LargeTitle,
    Title,
} from "./styles";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";

function Signup() {
    const url = "signup";
    const [signupData, setSignupData] = useState({
        email: "",
        username: "",
        password: "",
        imageUrl: "",
    });
    const [loading, setLoading] = useState(false);
    const redirectUser = useNavigate();

    function signUp(event) {
        setLoading(true);
        event.preventDefault();
        const promise = api.post(url, {
            email: signupData.email,
            username: signupData.username,
            password: signupData.password,
            imageUrl: signupData.imageUrl,
        });
        promise
            .then(() => {
                alert("Cadastro realizado. Faça login para continuar.");
                setLoading(false);
                redirectUser("/");
            })
            .catch((err) => {
                alert(err.response.data);
                setLoading(false);
            });
    }

    return (
        <Main>
            <Banner>
                <LargeTitle>linkr</LargeTitle>
                <Title>
                    save, share an discover the bests links on the web
                </Title>
            </Banner>
            <AuthSection>
                <AuthForm onSubmit={signUp}>
                    <FormLabel>
                        <FormInput
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={signupData.username}
                            onChange={(e) =>
                                setSignupData({
                                    ...signupData,
                                    username: e.target.value,
                                })
                            }
                            required
                            disabled={loading}
                        />
                    </FormLabel>

                    <FormLabel>
                        <FormInput
                            type="e-mail"
                            name="e-mail"
                            placeholder="E-mail"
                            value={signupData.email}
                            onChange={(e) =>
                                setSignupData({
                                    ...signupData,
                                    email: e.target.value,
                                })
                            }
                            required
                            disabled={loading}
                        />
                    </FormLabel>

                    <FormLabel>
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) =>
                                setSignupData({
                                    ...signupData,
                                    password: e.target.value,
                                })
                            }
                            required
                            disabled={loading}
                        />
                    </FormLabel>

                    <FormLabel>
                        <FormInput
                            type="url"
                            name="password"
                            placeholder="Photo URL"
                            value={signupData.imageUrl}
                            onChange={(e) =>
                                setSignupData({
                                    ...signupData,
                                    imageUrl: e.target.value,
                                })
                            }
                            required
                            disabled={loading}
                        />
                    </FormLabel>

                    <RoundedButton>
                        {" "}
                        {loading ? (
                            <ThreeDots color="white" height={80} width={80} />
                        ) : (
                            "Sign Up"
                        )}
                    </RoundedButton>
                </AuthForm>

                <Link to={"/"}>
                    <UnderlineLink>Switch back to log in</UnderlineLink>
                </Link>
            </AuthSection>
        </Main>
    );
}

export default Signup;
