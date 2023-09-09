export type LoginFormInfo = {
    username: string,
    password: string,
}

export type SignUpFormInfo = {
    username: string,
    password: string,
}

export type UserInformation = {
    username: string;
}

export type LoginResponse = {
    user: UserInformation,
    token: string
}