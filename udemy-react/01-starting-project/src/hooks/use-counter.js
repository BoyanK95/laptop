import { useEffect, useState } from "react"


const useCounter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timestamp = setInterval(() => {
            setCounter(prevCount => prevCount + 1)
        }, 1000)

        return () => clearInterval(timestamp)
    }, [])

    return counter
}

export default useCounter