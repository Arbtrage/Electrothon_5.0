import axios from "axios";

const Axios = axios.create({
    baseURL: "localhost:5000",
});

export default Axios;

// Base URL
Axios.defaults.baseURL = "http://localhost:5000/api";

// Headers
let token = localStorage.getItem("token");
Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;