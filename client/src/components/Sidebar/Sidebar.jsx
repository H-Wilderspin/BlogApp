import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import path from '../imgs/trowel.jpg'
import axios from 'axios'
import { nanoid } from 'nanoid'

export default function Sidebar() {
    const [cats, setCats] = React.useState([])

    React.useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className='sidebarTitle'>About Us</span>
                <span className='sidebarSummary'>Gardening Services & Domestic Assistance <br /> West Oxfordshire</span>
                <img alt='garden' src={path} />
                <p>We might be small but we pack a punch and you will definitlly get your moneys worth! Check out our clear and affordable pricing structure on the services page for more info! </p>

            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>Categories</span>
                <ul className="sidebarList">
                    <Link to="/" className='link sidebarListItem'>All posts</Link>
                    {cats.map((c) => (
                        <Link className='link' to={`/?cat=${c.name}`} key={nanoid()} >
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Contact Us</span>
                <div className="sidebarSocial">
                    <span className='sidebarContactEl' >To Call or Text:</span>
                    <span className='sidebarContactEl' >07000 000000</span>


                    {/* <i className='sidebarIcon fab fa-facebook-square'></i>
                    <i className='sidebarIcon fab fa-github-square'></i>
                    <i className='sidebarIcon fab fa-linkedin'></i> */}
                </div>
            </div>

        </div>
    )
}
