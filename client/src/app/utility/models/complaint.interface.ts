import { STATUS } from "./status.enum";

export interface IComplaint {
    username: string;
    title: string;
    description: string;
    status: STATUS;
    creationDate: Date;
    createdBy: string;
    changeDate: Date;
    changedBy: string;
}