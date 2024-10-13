import axios from "axios";
import { User, UserReturnModel, UserType } from "../types/types";
const apiUrl =  `${process.env.REACT_APP_DEFAULT_URL_API}/v1/user`;

if (!apiUrl) {
    throw new Error('REACT_APP_DEFAULT_URL_API is not defined');
}

export async function getUserForId(idUser: number) : Promise<UserReturnModel>
{
    const response = await axios(`${apiUrl}?idUser=${idUser}`);
    return response.data;
}

export async function changeUserTypeForId(idUser: number, newType: UserType)
{
    await axios.patch(`${apiUrl}/update-type?idUser=${idUser}&newType=${newType}`);
}

export async function GetSpecialists(type: UserType)
{
    return (await axios.get(`${apiUrl}/get-spicialists?type=${type}`)).data;
}

export async function Update(user: User)
{
    return (await axios.put(`${apiUrl}/update`, user)).data;
}