import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";
import UserContext from "./UserContext";

const TrendingContext = createContext();

const TrendingProvider = ({ children }) => {
    const [trending, setTrending] = useState();
    const { userInfo } = useContext(UserContext);
    const { token } = userInfo
    //const token = 'qoasda342wf45iu36eq25iwueoqiwue';


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = api.get("/trending", config);
        request.then((response) => {
            console.log(response)
            setTrending(response.data);
        });
        request.catch((err) => {
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
