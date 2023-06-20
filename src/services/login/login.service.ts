import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login/login.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { MyError } from "../../errors/myError.error";


export const loginService = async (
    loginData: TLoginRequest
): Promise<string> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOne({
        where: {
            email: loginData.email
        },
    });

    if (!user) {
        throw new MyError("Invalid credentials", 401);
    };

    const passwordMatch = await compare(loginData.password, user.password);

    if (!passwordMatch) {
        throw new MyError("Invalid credentials", 401)
    };
    
    const token: string = jwt.sign(
        {
            admin: user.id,
        },
        "tovalhalla",
        {
            expiresIn: "1d",
            subject: user.id.toString()
        }
    );

    return token;
};