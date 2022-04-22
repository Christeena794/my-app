export interface IUser {
    id:number;
    first_name:string;
    last_name?:string;
    email?:string;
    gender?:string;
    designation?:string;
    phone_no?:string;
    city?: string,
    department?: string,
    date_of_birth?:string,
    language?: string,
    search?: string,
}