import React, { useState, useEffect } from 'react';

const Install = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/install')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            })
    }, [])

    return (
        <div>
            <div>
                설치 페이지
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}

export default Install;