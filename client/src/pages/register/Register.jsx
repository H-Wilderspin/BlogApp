import './register.css'
import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            })
            res.data && window.location.replace("/login")
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>

                <label>Username</label>
                <input
                    className='registerInput'
                    type='text'
                    placeholder='Create Username'
                    onChange={e => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input
                    className='registerInput'
                    type='email'
                    placeholder='Enter email...'
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    className='registerInput'
                    type='password'
                    placeholder='Create Password...'
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="registerButton">Register</button>
                {error && <span style={{ color: "red", textAlign: "center" }}>
                    Something went wrong, please try again</span>}
            </form>

            <Link className='link' to="/login"><button className="registerLoginButton">Login</button></Link>
        </div>
    )
}
