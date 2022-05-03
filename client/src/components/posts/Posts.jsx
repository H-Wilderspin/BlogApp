import React from 'react'
import Post from '../post/Post'
import './posts.css'

export default function Posts({ posts }) {
    const postElements = posts.map((data) => (<Post key={data._id} props={data} />))
    return (
        <div className='posts'>
            {postElements}
        </div>
    )
}
