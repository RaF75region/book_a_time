import * as jspb from 'google-protobuf'



export class GetUser extends jspb.Message {
  getId(): number;
  setId(value: number): GetUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUser.AsObject;
  static toObject(includeInstance: boolean, msg: GetUser): GetUser.AsObject;
  static serializeBinaryToWriter(message: GetUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUser;
  static deserializeBinaryFromReader(message: GetUser, reader: jspb.BinaryReader): GetUser;
}

export namespace GetUser {
  export type AsObject = {
    id: number,
  }
}

export class ChangeUserType extends jspb.Message {
  getNewtype(): UserType;
  setNewtype(value: UserType): ChangeUserType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeUserType.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeUserType): ChangeUserType.AsObject;
  static serializeBinaryToWriter(message: ChangeUserType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeUserType;
  static deserializeBinaryFromReader(message: ChangeUserType, reader: jspb.BinaryReader): ChangeUserType;
}

export namespace ChangeUserType {
  export type AsObject = {
    newtype: UserType,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getName(): string;
  setName(value: string): User;

  getType(): UserType;
  setType(value: UserType): User;

  getUrlphoto(): string;
  setUrlphoto(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getFullname(): string;
  setFullname(value: string): User;

  getRating(): number;
  setRating(value: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    type: UserType,
    urlphoto: string,
    email: string,
    fullname: string,
    rating: number,
  }
}

export class Reply extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): Reply;

  getUser(): User | undefined;
  setUser(value?: User): Reply;
  hasUser(): boolean;
  clearUser(): Reply;

  getMesssage(): string;
  setMesssage(value: string): Reply;

  getObjectCase(): Reply.ObjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reply.AsObject;
  static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
  static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reply;
  static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
  export type AsObject = {
    error: boolean,
    user?: User.AsObject,
    messsage: string,
  }

  export enum ObjectCase { 
    OBJECT_NOT_SET = 0,
    USER = 2,
  }
}

export enum UserType { 
  USER = 0,
  SPECIALIST = 1,
}
