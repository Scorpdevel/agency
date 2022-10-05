import React from 'react'
import Logo from '../../assets/Logo-2-min.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='container_footer_top'>
        <div className='foot_box'>
        <div className='inner_box'>
            <img src={Logo} alt=""  />
            <p style={{"color":"#4f00c1"}}>WE CREATE IDEAS</p>
            </div>
        </div>
        <div className='foot_box'>
            <div className='inner_box'>
        <p>LINKS</p>
            <ul>
                <li>Services</li>
                <li>Kontakt</li>
            </ul>
            </div>
        </div>
        <div className='foot_box'>
            <div className='inner_box'>
            <p>WICHTIGE LINKS</p>
            <ul>
                <li>Datenschutz</li>
                <li>Impressum</li>
            </ul>
            </div>
        </div>
        </div>
        <div className='container_footer_bottom'>
            <p>www.scorpmedia.de © 2022 Alle Rechte vorbehalten.</p>
        </div>
    </div>
  )
}

export default Footer