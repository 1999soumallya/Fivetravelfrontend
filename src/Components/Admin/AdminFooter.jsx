import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'

export default function AdminFooter() {
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }

    }, [navigate, userInfo])

    return (
        <>
            <footer>
                <div className="footer clearfix mb-0 text-muted">
                    <div className="float-start">
                        <p>Copyright © 2018 5travellers.com. </p>
                    </div>
                    <div className="float-end">
                        <p>Crafted with <span className='text-danger'><FontAwesomeIcon icon={faHeart} /></span> by <Link to="https://saugi.me">Soumallya</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
