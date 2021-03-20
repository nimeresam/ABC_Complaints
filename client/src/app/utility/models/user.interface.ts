import { IUserRole } from "./role.enum";

export interface IUser {
    name: string,
    email: string,
    password: string,
    role: IUserRole,
    gender: 'male' | 'female',
    id: string;
}