import { useEffect, useState } from "react"

export const useSeller = email => {
    const [isSeller, setSeller] = useState(false)
    const [useSellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://phone-reseller-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, useSellerLoading]
}