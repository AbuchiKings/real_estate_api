import bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common';

import env from 'src/config';

import { UsersService, newUser } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { };

    async signUp(data: newUser) {
        const hashedPassword = await bcrypt.hash(data.password, env.SALT);
        return this.userService.createUser({ ...data, password: hashedPassword });
    }
}
