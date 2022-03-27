import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-builder-594fc-default-rtdb.firebaseio.com/'
})

export default instance;