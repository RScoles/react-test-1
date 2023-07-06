import React from 'react'
import Header from '../components/Header'

export default function LoginForm() {

    return (
        <>
        <Header />
        <div className="cover">
            <h1>Login</h1>
            <input type = "text" placeholder = "username" />
            <input type = "password" placeholder = "password" />
            
        </div>
        </>
    )
}