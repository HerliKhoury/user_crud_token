import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TUser, TUserReq } from "../interfaces/user/user.interface";
import { catchUserByIdService } from "../services/users/catchUserById.service";

export const createUserController = async (
    req: Request,
    res: Response
): Promise<Response>=> {
    const newUserData:TUserReq = req.body;

    const newUser:TUser = await createUserService(newUserData);
    
    return res.status(201).json(newUser)
};

export const getUserByIdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);

    const user:TUser = await catchUserByIdService(userId);

    return res.status(200).json(user);
};