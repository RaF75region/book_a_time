import { getUserForId } from "../api/user.api";
import { ChangeUserType, Reply } from "../models/user_pb";
import { UserRequestsClient } from "../models/UserServiceClientPb";
import { UserReturnModel } from "../types/types";

const client = new UserRequestsClient("https://localhost:7163");

export async function getUser(idUser:number): Promise<UserReturnModel> {
    return new Promise( async (resolve) => {
        const data = await getUserForId(idUser);
        resolve(data)
    })
}

export function changeDataUser(id:number,newType:ChangeUserType):Promise<Reply.AsObject>{
    const metadata = { 'userId': id.toString() };
    return new Promise( async (resolve) => {
        const t = await client.updateUserType(newType,metadata);
        resolve(t.toObject(false))
    })
}