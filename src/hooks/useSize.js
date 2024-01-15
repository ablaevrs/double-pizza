import { useState, useEffect } from 'react'

export default function useSize () {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    useEffect(() => {
        const sizeHandler = (event) => {
            setWidthScreen(event.target.innerWidth)
        }
        window.addEventListener('resize', sizeHandler)
        return () => {
            window.removeEventListener('resize', sizeHandler)
        }
    }, [])

    return {
        widthScreen
    }
}