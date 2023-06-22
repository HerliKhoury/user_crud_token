import { Repository } from "typeorm";
import { TUserRes, TUserUpdate } from "../../interfaces/user/user.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";
import { userSchemaRes } from "../../schemas/user/user.schemas";



export const updateUserService = async (
    userId: number, 
    userData: TUserUpdate,
): Promise<TUserRes> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
    
    const oldUserData: User | null = await userRepo.findOneBy({
        id: userId
    });

    if(!oldUserData){
        throw new MyError("User not found", 404);
    }

    const newUserData: User = userRepo.create({
        ...oldUserData,
        ...userData
    });

    await userRepo.save(newUserData);

    const returnUser: TUserRes = userSchemaRes.parse(newUserData);

    return returnUser;
}