import React from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/Footer.css'
import { Link } from 'react-router-dom'

export default function UserFooter() {
    return (
        <Container>
            <table width="100%" height="98" border="0" align="center" cellPadding="0" cellSpacing="0" id="footer">
                <tbody>
                    <tr>
                        <td height="19" align="center" bgcolor="#FFFFFF">&nbsp;</td>
                    </tr>
                    <tr>
                        <td height="39" className="footer_style">
                            <table width="95%" border="0" align="center" cellPadding="0" cellSpacing="0">
                                <tbody><tr>
                                    <td width="8%" height="32" align="left"><Link to="default.html" className="footer_style">Home</Link></td>
                                    <td width="8%" align="center"><Link to={"aboutus.html"} className="footer_style">About Us</Link></td>
                                    <td width="17%" align="center"><Link to={"services.html"} className="footer_style">Services</Link></td>
                                    <td width="15%" align="center"><Link to={"tandc.html"} className="footer_style">Terms &amp; Conditions</Link></td>
                                    <td width="17%" align="center"><Link to={"cancelpolicy.html"} className="footer_style">Cancellation Policy</Link></td>
                                    <td width="12%" align="center"><Link to={"faqs.html"} className="footer_style">FAQs</Link></td>
                                    <td width="12%" align="center"><Link to={"contactus.html"} className="footer_style">Contact Us</Link></td>
                                    <td width="11%" align="right"><Link to={"privacypolicy.html"} className="footer_style">Privacy Policy</Link></td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td height="40" align="center" bgcolor="#FFFFFF" className="footer_head">Copyright © 2018 5travellers.com. All rights reserved</td>
                    </tr>
                </tbody></table>
        </Container>
    )
}
