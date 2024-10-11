import * as jspb from 'google-protobuf'



export class MessageService extends jspb.Message {
  getId(): string;
  setId(value: string): MessageService;

  getUserid(): number;
  setUserid(value: number): MessageService;

  getTitle(): string;
  setTitle(value: string): MessageService;

  getDescription(): string;
  setDescription(value: string): MessageService;

  getTimeProgress(): number;
  setTimeProgress(value: number): MessageService;

  getPrice(): number;
  setPrice(value: number): MessageService;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageService.AsObject;
  static toObject(includeInstance: boolean, msg: MessageService): MessageService.AsObject;
  static serializeBinaryToWriter(message: MessageService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageService;
  static deserializeBinaryFromReader(message: MessageService, reader: jspb.BinaryReader): MessageService;
}

export namespace MessageService {
  export type AsObject = {
    id: string,
    userid: number,
    title: string,
    description: string,
    timeProgress: number,
    price: number,
  }
}

export class MessageUserId extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): MessageUserId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageUserId.AsObject;
  static toObject(includeInstance: boolean, msg: MessageUserId): MessageUserId.AsObject;
  static serializeBinaryToWriter(message: MessageUserId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageUserId;
  static deserializeBinaryFromReader(message: MessageUserId, reader: jspb.BinaryReader): MessageUserId;
}

export namespace MessageUserId {
  export type AsObject = {
    userid: number,
  }
}

export class MessageReplyService extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): MessageReplyService;

  getMultipleuserserviceList(): Array<MessageService>;
  setMultipleuserserviceList(value: Array<MessageService>): MessageReplyService;
  clearMultipleuserserviceList(): MessageReplyService;
  addMultipleuserservice(value?: MessageService, index?: number): MessageService;

  getSingleuserservice(): MessageService | undefined;
  setSingleuserservice(value?: MessageService): MessageReplyService;
  hasSingleuserservice(): boolean;
  clearSingleuserservice(): MessageReplyService;

  getMessage(): string;
  setMessage(value: string): MessageReplyService;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageReplyService.AsObject;
  static toObject(includeInstance: boolean, msg: MessageReplyService): MessageReplyService.AsObject;
  static serializeBinaryToWriter(message: MessageReplyService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageReplyService;
  static deserializeBinaryFromReader(message: MessageReplyService, reader: jspb.BinaryReader): MessageReplyService;
}

export namespace MessageReplyService {
  export type AsObject = {
    error: boolean,
    multipleuserserviceList: Array<MessageService.AsObject>,
    singleuserservice?: MessageService.AsObject,
    message: string,
  }
}

