import axios from "axios";
import { Service, ServiceIEnumerableReturnModel, ServiceReturnModel } from "../types/types";
const apiUrl =  `${process.env.REACT_APP_DEFAULT_URL_API}/v1/service`;

if (!apiUrl) {
    throw new Error('REACT_APP_DEFAULT_URL_API is not defined');
}


export async function GetListService(userId: number) : Promise<ServiceIEnumerableReturnModel>
{
    const response = await axios(`${apiUrl}/list?userId=${userId}`);
    return response.data;
}

export async function RemoveService(service: Service) : Promise<ServiceIEnumerableReturnModel>
{
    const response = await axios.delete(`${apiUrl}/`,
        {
            data:service
        });
    return response.data;
}

export async function AddService(service: Service) : Promise<ServiceReturnModel>
{
    const response = await axios.post(`${apiUrl}/create`, service);
    return response.data;
}
