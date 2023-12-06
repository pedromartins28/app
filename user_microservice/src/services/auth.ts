import { password } from "bun";
import { login } from "../dtos/auth";
import { getUserByEmail } from "../respositories/users";

export async function login(login:login){
    const user = await getUserByEmail(login.email)
    if(!user){
        throw new Error('login falhou')
    }
    const result = await Bun.password.verify(login.password, user.password)
    if(!result){
        throw new Error('login falhou')
    }
    return user
}
