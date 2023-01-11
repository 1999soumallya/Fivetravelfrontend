import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faHome, faPlaneCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../Images/logo.png'
import { UserLogout, UserValidation } from '../../Redux/Action/CommonAction'

export default function AdminSideNavbar() {

    const userLogin = useSelector((state) => state.userLogin)
    const validateuser = useSelector((state) => state.validateuser)

    const { userInfo } = userLogin
    const { validuserError } = validateuser

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        dispatch(UserValidation())

        if (validuserError) {
            dispatch(UserLogout())
        }
    }, [dispatch, navigate, userInfo, validuserError])

    return (
        <>
            <div id="sidebar" className='active'>
                <div className="sidebar-wrapper active">
                    <div className="sidebar-header">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className='sidebar-title'>Main Menu</li>
                            <li className="sidebar-item" id='dashboard'>
                                <Link to="/admin" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faHome} />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item has-sub" id='fileupload'>
                                <Link to="/admin/fileupload" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span> File Upload </span>
                                </Link>
                            </li>
                            <li className="sidebar-item has-sub" id='addsubadmin'>
                                <Link to="/admin/addsubadmin" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <span> Add Sub Admin </span>
                                </Link>
                            </li>
                            <li className="sidebar-item has-sub" id='addsubadmin'>
                                <Link to="/admin/airportlist" className='sidebar-link'>
                                    <FontAwesomeIcon icon={faPlaneCircleCheck} />
                                    <span> Airlines List </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
