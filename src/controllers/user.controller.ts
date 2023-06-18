import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TUser, TUserReq } from "../interfaces/user/user.interface";

export const createUserController = async (
    req: Request,
    res: Response
): Promise<Response>=> {
    const newUserData:TUserReq = req.body;

    const newUser:TUser = await createUserService(newUserData);
    
    return res.status(201).json(newUser)
};