'use client'
import {useEffect, useState} from "react";

export default function DisplayRoutResponse() {

    const [response, setResponse] = useState('')

    useEffect(() => {

        const request = new Request('/api/hello', {
            method: 'GET',
        })

        fetch(request).then((res) => {
            return res.text()
        }).then((text) => {
            setResponse(text)
        }).catch(() => {
            setResponse('Failed to load response')
        })
    }, [])


    return (
            <div>
                {response ? (
                        <pre>{response}</pre>
                ) : (
                        <p>Loading...</p>
                )}
            </div>
    )
}
