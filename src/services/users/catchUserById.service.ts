import { Repository } from "typeorm";
import { TUser } from "../../interfaces/user/user.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";


export const catchUserByIdService = async (
    userId: number
): Promise<TUser> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOneBy({
        id: userId
    });

    if(!user){
        throw new MyError("User not found", 404)
    }else{
        return user!;
    }
};