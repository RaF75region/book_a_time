import { MessageReplyService, MessageService } from "../models/service_pb";
import { ServesRequestsClient } from "../models/ServiceServiceClientPb";

const client = new ServesRequestsClient("https://localhost:7163");

export function addService(obj: MessageService.AsObject):Promise<MessageReplyService.AsObject>{
    const message = new MessageService();
    message.setDescription(obj.description);
    message.setTitle(obj.title);
    message.setTimeProgress(obj.timeProgress);
    message.setPrice(obj.price);
    message.setUserid(obj.userid);
    return new Promise( async (resolve) => {
        const t = await client.addOrUpdateUserService(message);
        resolve(t.toObject(false))
    })
}

