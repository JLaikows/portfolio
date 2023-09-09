import axios from "axios"
import { LoginFormInfo, LoginResponse, SignUpFormInfo, UserInformation } from "../types/userAuth"

/*///////////////////////////////////////////////////
   NEED TO UPDATE URL TO SWITCH FOR PROD AND LOCAL
///////////////////////////////////////////////////*/

const setAuthToken = async (token: string | null) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const loginUser = async (loginForm: LoginFormInfo) => {

    const res = await axios.post('http://localhost:8081/api/users/login', loginForm)
    const loginRes: LoginResponse = res.data;

    setAuthToken(loginRes.token);
    return loginRes.user
}

export const logOutUser = async (loginForm: LoginFormInfo) => {
    setAuthToken(null);
}

export const signUpUser = async (signUpForm: SignUpFormInfo) => {
    await axios.post('http://localhost:8081/api/users/register', signUpForm)

    return;
}

