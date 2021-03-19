import { STATUS } from "./status.enum";

export interface IComplaint {
    id: string;
    username: string;
    title: string;
    description: string;
    status: STATUS;
    creationDate: Date;
    createdBy: string;
    changeDate: Date;
    changedBy: string;
}