import React from 'react'
import { Container, Navbar, Image, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../Images/logo.png'
import "../../Css/Header.css"

export default function UserTopNavBar() {
    return (
        <>
            <Navbar className='userNavBar'>
                <Container>
                    <Navbar.Brand><Link> <Image src={Logo} alt='Logo' height={"50px"} /> </Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Row>
                            <Col sm={12} className="">
                                <Row className='justify-content-end'>
                                    <Col sm={5}>
                                        <div className="social_listing">
                                            <span>Follow us at:	</span>
                                            <ul className='social_item'>
                                                <li><Link to={"https://www.facebook.com/5travellerss"} className="nav_item">Facebook</Link></li>
                                                <li><Link to={"https://www.twitter.com/5travellerss"} className="nav_item">Twitter</Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col sm={5}>
                                        <b className='enquiry_tag'>Enquire @ + 91 9250 40 38 44</b>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <ul className='nav_listing'>
                                    <li><Link to={'/about'} className="nav_item"> About Us </Link></li>
                                    <li><Link to={'/brandstore'} className="nav_item"> Brand Story </Link></li>
                                    <li><Link to={'/corporatetours'} className="nav_item"> Corporate Tours </Link></li>
                                    <li><Link to={'/destinationfacts'} className="nav_item"> Destination Facts </Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
