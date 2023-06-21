import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";

export const deleteUserByIdService = async (
    userId: number
): Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOneBy({
        id: userId
    });
    
    if(!user){
        throw new MyError("User not found", 404);
    }else{
        userRepo.remove(user);
    } 
};


