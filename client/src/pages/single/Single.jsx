import { useLocation } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'

export default function Single() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = React.useState({})
    const [title, setTitle] = React.useState("")
    const [desc, setDesc] = React.useState("")

    React.useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    return (
        <div className='single'>
            <SinglePost
                post={post}
                path={path}
                title={title}
                desc={desc}
                setTitle={setTitle}
                setDesc={setDesc}
            />
            <Sidebar />
        </div>
    )
}
