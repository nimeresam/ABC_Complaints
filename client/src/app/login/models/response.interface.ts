import { IUser } from "../../utility/models/user.interface";

export interface ILoginResponse {
    token: string;
    user: IUser
}

export interface ILoginError {
    control: string;
    message: string;
}