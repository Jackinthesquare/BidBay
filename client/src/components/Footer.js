import React from 'react'
import './css/Navbar.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='icon-container'>
                <a href="https://www.facebook.com"><img className='footer-icon' id='fb-icon' src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" /></a>
                <a href="https://www.linkedin.com/in/jack-in-the-square/"><img className='footer-icon' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" /></a>
                <a href="https://twitter.com"><img className='footer-icon' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" /></a>
                <a href="https://instagram.com"><img className='footer-icon' id='insta-icon' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" /></a>
                <a href="https://youtube.com"><img className='footer-icon' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" /></a>
                <a href="https://github.com/Jackinthesquare"><img className='footer-icon' id='github-icon' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-128.png" /></a>
            </div>
            <div className='footer-text'>
            <span>Copyright © 1995-2022 BidBay Inc. All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;