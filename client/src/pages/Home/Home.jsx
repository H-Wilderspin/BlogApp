import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.css'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = React.useState([])
    const { search } = useLocation()

    React.useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`posts${search}`)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
