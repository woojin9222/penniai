import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import DashboardClient from './dashboard-client'

export default async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin')
    }

    return <DashboardClient />
}
