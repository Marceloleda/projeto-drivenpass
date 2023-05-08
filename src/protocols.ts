import { User } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
};

export type GetUserOrFailResult = Pick<User, 'id' | 'email' | 'password'>;
