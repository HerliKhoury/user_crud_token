import { z } from "zod";

export const userSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    age: z.union([z.string().max(5), z.number()]),
    password: z.string().max(120).nonempty()
})

export const userSchemaArr = z.array(userSchema);

export const userSchemaReq = userSchema.omit({id: true});

export const userSchemaRes = userSchema.omit({password: true});