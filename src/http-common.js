import axios from 'axios';

export default axios.create({
    baseURL: "https://tutorial-posting-api.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json"
    }
});