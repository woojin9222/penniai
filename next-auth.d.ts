// types/next-auth.d.ts
import { DefaultUser, DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User extends DefaultUser {
        token?: string
    }

    interface Session extends DefaultSession {
        accessToken?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
    }
}
