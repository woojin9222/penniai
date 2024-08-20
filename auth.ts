import NextAuth, {NextAuthConfig} from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials:{
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null

                const res = await fetch("http://ai.penni.kr/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                if (res.ok && user) {
                    return { ...user, id: user.id.toString() }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token
            }
            return token
        },
        async session({ session, token }) {
            if (token.accessToken) {
                session.accessToken = token.accessToken as string
            }
            return session
        }
    }
};
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }