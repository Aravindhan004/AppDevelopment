import axios from "axios";


const BOOKSTAGRAM_API_BASE_URL = "http://localhost:8080/api/v1";
// http://localhost:8080/api/v1/auth/login

class UserService {

    loginUser(user)
    {
        console.log(user);
        return axios.post(BOOKSTAGRAM_API_BASE_URL + '/auth/login', user).then(res => res.data);
    }

    registerUser(user)
    {
        return axios.post(BOOKSTAGRAM_API_BASE_URL + '/auth/register' , user).then(res => res.data);
    }
}

export default new UserService;