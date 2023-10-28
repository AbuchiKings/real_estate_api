import { Injectable } from '@nestjs/common';

import prisma from 'src/utils/prisma';
import { UserInterface } from 'src/utils/interface';

@Injectable()
export class UsersService {
    async findUserByEmail(email: string, fields?: string[]) {
        let select = formatSelectField(fields);
        return prisma.user.findFirst({ where: { email }, select });
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