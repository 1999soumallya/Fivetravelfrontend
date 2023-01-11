import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { Image } from 'react-bootstrap'
import { UserLogout, UserValidation } from '../../Redux/Action/CommonAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightFromBracket, faGear, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProfileImage from '../../Images/avatar/avatar-s.png'
import 'react-toastify/dist/ReactToastify.css';

export default function AdminTopNavbar() {
    const [name, setname] = useState("")

    const userLogin = useSelector((state) => state.userLogin)
    const validateuser = useSelector((state) => state.validateuser)

    const { success, userInfo } = userLogin
    const { validuserError } = validateuser


    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if (userInfo) {
            setname(userInfo.name)
            if (success) {
                toast.success(`${userInfo.name} Login Success`, { theme: 'dark', position: 'top-center', draggable: true, pauseOnHover: true })
            }
        } else {
            navigate('/login')
        }

        dispatch(UserValidation())
        if (validuserError) {
            dispatch(UserLogout())
        }

    }, [dispatch, navigate, success, userInfo, validuserError])

    const logoutHandaler = () => {
        dispatch(UserLogout())
    }


    return (
        <>
            <div id="main">
                <nav className="navbar navbar-header navbar-expand navbar-light">
                    <Link className="sidebar-toggler" href="#"><span className="navbar-toggler-icon"></span></Link>
                    <button className="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
                            <li className="dropdown nav-icon">
                                <Link href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div className="d-lg-inline-block">
                                        <FontAwesomeIcon icon={faBell} />
                                    </div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
                                    <h6 className='py-2 px-4'>Notifications</h6>
                                    <ul className="list-group rounded-none">
                                        <li className="list-group-item border-0 align-items-start">
                                            <div className="avatar bg-success me-3">
                                                <span className="avatar-content"><FontAwesomeIcon icon={faShoppingCart} /></span>
                                            </div>
                                            <div>
                                                <h6 className='text-bold'>New Order</h6>
                                                <p className='text-xs'> An order made by Ahmad Saugi for product Samsung Galaxy S69 </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown nav-icon">
                                <Link href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div className="d-lg-inline-block">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
                                    <h6 className='py-2 px-4'>Mail Box</h6>
                                    <ul className="list-group rounded-none">
                                        <li className="list-group-item border-0 align-items-start">
                                            <div className="avatar bg-success me-3">
                                                <span className="avatar-content"><FontAwesomeIcon icon={faShoppingCart} /></span>
                                            </div>
                                            <div>
                                                <h6 className='text-bold'>New Order</h6>
                                                <p className='text-xs'> An order made by Ahmad Saugi for product Samsung Galaxy S69 </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown">
                                <Link href="#" data-bs-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div className="avatar me-1">
                                        <Image src={ProfileImage} alt="" srcSet="" />
                                    </div>
                                    <div className="d-none d-md-block
                                        d-lg-inline-block">Hi, {name}</div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end gap-2">
                                    <Link className="dropdown-item" to={"/admin/profile/"}><FontAwesomeIcon icon={faUser} /><span className='ms-2'> Account </span></Link>
                                    <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faMessage} /><span className='ms-2'>Messages</span></Link>
                                    <Link className="dropdown-item" href="#"><FontAwesomeIcon icon={faGear} /><span className='ms-2'>Settings</span></Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={logoutHandaler}><FontAwesomeIcon icon={faArrowRightFromBracket} color="red" /><span className='ms-2'>Logout</span></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </>
    )
}
