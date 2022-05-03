// import Sidebar from '../../components/Sidebar/Sidebar'
import img from '../../components/imgs/write.jpg'
import './settings.css'
import { Context } from '../../context/context'
import { useContext, useState } from 'react'
import axios from 'axios'

export default function Settings() {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const { user, dispatch } = useContext(Context)

    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    return (
        <div className='settings'>
            <div className="settingsWrapper">

                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>

                <form className="settingsForm" onSubmit={handleSubmit}>

                    <label>Profile Picture</label>

                    <div className='settingsPP'>

                        <img
                            src={file ? URL.createObjectURL(file) : (user.profilePic ? PF + user.profilePic : img)}
                            alt="Author" />

                        <label htmlFor='fileInput'>
                            <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input
                            type='file'
                            id='fileInput'
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <label>Username</label>
                    <input
                        type='text'
                        placeholder="..."
                        onChange={e => setUsername(e.target.value)}
                        autoFocus />

                    {/* <label>Email</label>
                    <input type='email' placeholder="..."
                        onChange={e => setEmail(e.target.value)} /> */}

                    <label>Password</label>
                    <input type='password'
                        onChange={e => setPassword(e.target.value)} />

                    <button className="settingsSubmit">Update</button>
                    {success && <span style={{ color: "green", marginTop: "5px", textAlign: "center" }}>Profile updated!</span>}

                </form>
            </div>
            {/* <Sidebar /> */}
        </div>
    )
}
