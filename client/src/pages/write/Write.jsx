import './write.css'
import img from '../../components/imgs/butterfly.jpg'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/context'

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleChange = (e) => {
        const newState = categories.filter((i) =>
            i !== e.target.name

        )
        e.target.checked ?
            setCategories(state => [...state, e.target.name]) :
            setCategories(newState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace(`/post/${res.data._id}`);
        } catch (err) { }
        axios.post("/posts", newPost)
    }

    return (
        <div className='write'>
            {!file && <img
                className='writeImg'
                src={img}
                alt="gardening project"
            />}
            {file &&
                <img
                    className='writeImg'
                    src={URL.createObjectURL(file)}
                    alt="gardening project"
                />}


            <form className='writeForm' onSubmit={handleSubmit}>

                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>

                    <input
                        type="file"
                        id='fileInput'
                        style={{ display: "none" }}
                        onChange={e => setFile(e.target.files[0])} />

                    <input
                        type="text"
                        placeholder='Title'
                        className='writeInput'
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        placeholder='Your story'
                        type='text'
                        className='writeInput writeText'
                        onChange={e => setDesc(e.target.value)} />
                </div>

                <div className='"writeFormGroup writeFormCheckboxes'>

                    <label htmlFor="clearing">Clearing</label>
                    <input
                        className='writeFormCheckbox'
                        htmlFor="clearing"
                        type="checkbox"
                        name='Clearing'
                        onChange={handleChange} />

                    <label htmlFor="planting">Planting</label>
                    <input
                        className='writeFormCheckbox'
                        htmlFor="planting"
                        type="checkbox"
                        name="Planting"
                        onChange={handleChange} />

                    <label htmlFor="sprucing">Sprucing</label>
                    <input
                        className='writeFormCheckbox'
                        htmlFor="sprucing"
                        type="checkbox"
                        name='Sprucing'
                        onChange={handleChange} />

                    <label htmlFor="maintenance">Maintenance</label>
                    <input
                        className='writeFormCheckbox'
                        htmlFor="maintenance"
                        type="checkbox"
                        name='Maintenance'
                        onChange={handleChange} />
                </div>

                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
