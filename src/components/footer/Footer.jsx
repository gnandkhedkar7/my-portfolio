import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.svg';
import { User } from 'lucide-react';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='footer-logo-image' src={logo} alt="logo" />
                <p>Frontend developer specializing in building modern web application with React</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <User />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 Gauri Nandkhedkar. All rights reserved</p>
<div className="footer-bottom-right">
    <p>Term of services</p>
    <p>Privacy policy</p>
    <p>Connect with me</p>
</div>
<div className="footer-social">
            {/* Social Media Links */}
            <a href="https://github.com/gnandkhedkar7" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.07 8.1 7.25 9.44.53.1.73-.23.73-.51v-2.01c-2.95.64-3.57-1.42-3.57-1.42-.48-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.04.07 1.57 1.07 1.57 1.07 1.84 3.14 4.8 2.23 5.95 1.68.18-.92.72-1.69 1.33-2.08-2.62-.3-5.38-1.31-5.38-5.84 0-1.29.46-2.35 1.22-3.17-.12-.3-.53-.88-1.25-.88-.92 0-1.34 1.04-1.34 1.04-.74 1.31-.38 2.43-.38 2.43-.04 1.57 1.01 2.76 2.4 2.76 2.87 0 5.03 1.82 5.03 4.99v2.02c0 .28.2.61.73.51 4.19-1.34 7.25-5.02 7.25-9.44 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/gnandkhedkar7" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-9 18H7v-8h4v8zm-2-9.11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 9.11h-4v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-4v-8h4v2h.03c.26-.48.81-.88 1.46-.88 1.15 0 2.08.93 2.08 2.08v6.08z" />
              </svg>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer
