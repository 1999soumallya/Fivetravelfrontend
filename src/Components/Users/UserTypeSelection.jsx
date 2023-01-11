import React from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/TypeSelection.css'
import { Link } from 'react-router-dom'

export default function UserTypeSelection() {
  return (
    <Container>
      <table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="menu_style">
            <td className="menu_style"><Link to="destinations.html" className="menu_style">Leisure</Link></td>
            <td className="menu_style"><Link to="honeymoon_main.html" className="menu_style">Honeymoon</Link></td>
            <td className="menu_style"><Link to="luxury.html" className="menu_style">Luxury Trips</Link></td>
            <td className="menu_style"><Link to="adventure.html" className="menu_style">Adventure</Link></td>
            <td className="menu_style"><Link to="departure.html" className="menu_style">Departure</Link></td>
            <td className="menu_style"><Link to="packagelist3f58.html?Category=Weekend%20Getaways&amp;Zone=North" className="menu_style">Gateways</Link></td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
