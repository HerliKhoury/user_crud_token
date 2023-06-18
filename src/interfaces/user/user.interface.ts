import { z } from "zod";
import { userSchema, userSchemaArr, userSchemaReq } from "../../schemas/user/user.schemas";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;
export type TUserArr = z.infer<typeof userSchemaArr>;
export type TUserReq = z.infer<typeof userSchemaReq>;
export type TUserUpdate = DeepPartial<TUserReq>;