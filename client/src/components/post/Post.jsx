import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'
import defaultimg from '../imgs/butterfly.jpg'
import { nanoid } from 'nanoid'

export default function Post({ props: post }) {
    const PF = "http://localhost:5000/images/"
    return (
        <div className='post'>
            {post.photo && (
                <img
                    className='postImg'
                    src={PF + post.photo} />
            )}
            {!post.photo && (
                <img
                    className='postImg'
                    src={defaultimg} />
            )}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span key={nanoid()} className="postCat">{c}</span>
                    ))}
                </div>

                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">{post.title}</span>
                </Link>

                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>

            </div>
            <p className='postDescription'>{post.desc}</p>

        </div>
    )
}
