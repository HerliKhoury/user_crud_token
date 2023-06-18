import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TUser, TUserReq } from "../../interfaces/user/user.interface";
import { userSchema } from "../../schemas/user/user.schemas";

export const createUserService = async(userData: TUserReq): Promise<TUser> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const newUser = userRepo.create(userData);

    const userEntity = await userRepo.save(newUser);

    const validUser: TUser = userSchema.parse(userEntity);

    return validUser;
};