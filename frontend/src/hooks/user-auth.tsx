import React, { FC, ReactNode, createContext, useContext, useState } from "react";
import { LoginFormInfo, SignUpFormInfo, UserInformation } from "../types/userAuth";
import { loginUser, signUpUser } from "../utils/fetch";

export interface IUserStore {
    state: {
        user: UserInformation
    }
    methods: {
        login: (u: UserInformation) => void,
        logout: () => void,
        signUpAndLogin: (u: SignUpFormInfo) => void,
    }
}

const context = createContext<IUserStore | null>(null)

export const UserStoreProvider: FC<{
    children: ReactNode;
    value: IUserStore;
}> = ({ children, value }) => <context.Provider value={value}>{children}</context.Provider>

export const useUserStore = (): IUserStore => {
    const container = useContext(context);
    if (container === undefined) {
        throw new Error(
            'Error in User store: No context found. Did you forget to initialize a provider?'
        )
    }
    const [user, setUser] = useState<UserInformation | null>(null)

    const login = async (userInfo: LoginFormInfo) => {
        try {
            const newUserInfo: UserInformation = await loginUser(userInfo);
            setUser(newUserInfo);
        } catch (e) {
            console.log(e)
            //TODO add notifications if api call fails
        }
    }
    const signUpAndLogin = async (userInfo: SignUpFormInfo) => {
        try {
            await signUpUser(userInfo);
            login(userInfo);
        } catch (e) {
            console.log(e)
            //TODO add notifications if api call fails
        }
    }
    const logout = async () => {
        logout();
        setUser(null)
    }
    return {
        state: {
            user
        },
        methods: {
            login,
            logout,
            signUpAndLogin
        }
    }
}