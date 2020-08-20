import axios from "axios";

export const axiosAuth = () => {
    const token = window.localStorage.getItem("token");
    
    // need to come back and change baseURL call
    return axios.create({
        baseURL: "http://localhost:3333/api/",
        headers: {
            Authorization: token
        }
    })
}