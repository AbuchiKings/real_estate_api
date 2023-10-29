import { Injectable } from '@nestjs/common';

import prisma from 'src/utils/prisma';

export type newUser = {
    email: string,
    password: string,
    username: string
}

@Injectable()
export class UsersService {
    async findUserByEmail(email: string, fields?: string[]) {
        let select = formatSelectField(fields);
        return prisma.user.findFirst({ where: { email }, select });
    }

    async createUser(data: newUser) {
        return prisma.user.create({ data });
    }

    async findUserById(id: string, fields?: string[]) {
        let select = formatSelectField(fields);
        return prisma.user.findFirst({ where: { id }, select });
    }
}

function formatSelectField(fields?: string[]) {
    let select: Record<string, boolean> = {};

    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            select[fields[i]] = true
        }
    }
    return select;
}