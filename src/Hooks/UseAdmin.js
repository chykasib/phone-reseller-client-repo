import { useEffect, useState } from "react"

export const useAdmin = email => {
    const [isAdmin, setAdmin] = useState(false)
    const [useAdminLoading, setUseAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://phone-reseller-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin)
                    setUseAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, useAdminLoading]
}