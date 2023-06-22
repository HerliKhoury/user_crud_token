import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TUser, TUserUpdate } from "../../interfaces/user/user.interface";
import { userSchema } from "../../schemas/user/user.schemas";

export const updateUserByIdService = async (
    userId: number,
    userData: TUserUpdate 
): Promise<any>/* Promise<TUser> */ => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData: User | null = await userRepo.findOneBy({
        id: userId
    });

    const newUserData: User = userRepo.create({
        ...oldUserData,
        ...userData
    });

    await userRepo.save(newUserData);

    const parsedUser: TUser = userSchema.parse(newUserData);

    return parsedUser;
};