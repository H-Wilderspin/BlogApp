import './singlePost.css'
import img from '../imgs/butterfly.jpg'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import axios from 'axios'
import { nanoid } from 'nanoid'

export default function SinglePost({ post, path, desc, setDesc, title, setTitle }) {
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)
    const [updateMode, setUpdateMode] = useState(false)
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${path}`, {
                data: { username: user.username }
            })
            window.location.replace("/")
        } catch (err) { }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title: title,
                desc: desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">

                {post.photo &&
                    <img
                        className='singlePostImg'
                        src={PF + post.photo}
                    />}

                {!post.photo &&
                    <img
                        className='singlePostImg'
                        src={img}
                    />}

                {updateMode ? (
                    <input
                        type="text"
                        className='singlePostTitleInput'
                        autoFocus
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className='singlePostTitle'>
                        {title}

                        {post.username === user?.username &&
                            <div className='singlePostEdit'>
                                <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        }
                    </h1>
                )
                }

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author:
                        <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ?
                    (<textarea
                        className='singlePostDescInput'
                        placeholder='Content'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)} />

                    ) : (
                        <p className='singlePostDescription'>{desc}</p>
                    )
                }
                {updateMode && <button className="singlePostBtn" onClick={handleUpdate}>Update</button>}
                {!updateMode && <div className='singlePostCats'>
                    {post.categories &&
                        post.categories.map((c) =>
                            (<span className='singlePostCat'>{c}</span>))
                    }
                </div>}
            </div>
        </div>
    )
}
