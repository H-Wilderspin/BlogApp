import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/context'
import './topbar.css'
import defaultpic from '../imgs/write.jpg'

export default function TopBar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className='Topbar'>

            <div className='topLeft'>
                {user && <>
                    <i className='topIcon fab fa-facebook-square'></i>
                    <i className='topIcon fab fa-github-square'></i>
                    <i className='topIcon fab fa-linkedin'></i>
                </>}
            </div>

            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link to="/" className='link' >Home page</Link></li>
                    <li className='topListItem'><Link to="/services" className='link' >Services</Link></li>
                    {user && <span className='topListItem'><Link to="/write" className='link' >New Post</Link></span>}
                </ul>
            </div>

            <div className='topRight'>
                {
                    user ?
                        (<Link to="/settings" className='link' >
                            <img
                                className='topImg'
                                src={user.profilePic ? PF + user.profilePic : defaultpic}
                                alt='user'></img></Link>)
                        :
                        (<ul className='topList'><Link to="/login" className='link topListItem' ></Link></ul>)
                }

                {user &&
                    <span className='topListItem' onClick={handleLogout}>Log out</span>
                }

                {/* <i className='topSearchIcon fas fa-search' /> */}
            </div>

        </div >
    )
}
