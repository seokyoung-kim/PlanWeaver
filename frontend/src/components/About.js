import React, { useState, useEffect } from 'react';

const About = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/about')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            })
    }, [])

    return (
        <div>
            <div>
                <h1>리액트에서 보이는 상세페이지</h1>
            </div>
            <div>
                <h2>{message}</h2>
            </div>
        </div>
    )
}

export default About;