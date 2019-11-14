import { AddressModel } from './address';

export class UserModel
{
    id:number;
    firstName:string;
    lastName:string;
    userName:string;
    email:string;
    mobileNo:number;
    displayAddress:string;
    status:boolean;
    address:AddressModel;
    dateOfBirth:string;
}