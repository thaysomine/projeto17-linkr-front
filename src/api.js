import axios from "axios";

const api = axios.create({
    baseURL: "https://driven-linkr.herokuapp.com/",
});

export default api;
