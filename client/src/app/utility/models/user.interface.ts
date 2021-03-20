import { IUserRole } from "./role.enum";

export interface IUser {
    username: string,
    email: string,
    password: string,
    role: IUserRole,
    gender: 'male' | 'female',
    id: string;
}