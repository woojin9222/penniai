'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function DashboardClient() {
    const { data: session } = useSession()
    const [protectedData, setProtectedData] = useState(null)

    useEffect(() => {
        async function fetchProtectedData() {
            const res = await fetch("http://192.168.0.3:8080/protected", {
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            })
            const data = await res.json()
            setProtectedData(data)
        }

        if (session?.accessToken) {
            fetchProtectedData()
        }
    }, [session])

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {session?.user?.name}</p>
            {protectedData && <pre>{JSON.stringify(protectedData, null, 2)}</pre>}
        </div>
    )
}