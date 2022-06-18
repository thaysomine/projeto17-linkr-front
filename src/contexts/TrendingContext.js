import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";
import UserContext from "./UserContext";

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState();
    const { token } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.get("/trending", config);
        request.then((response) => {
            console.log("O que tá acontecendo?");
            console.log(response.data);
            setTrending(response.data);
        });
        request.catch((err) => {
            console.log("Alguma coisa deu errada!");
            console.log(err);
        });
    }, [token]);

    return (
        <TrendingContext.Provider value={{ trending, setTrending }}>
            {children}
        </TrendingContext.Provider>
    );
};

export { TrendingProvider, TrendingContext };
