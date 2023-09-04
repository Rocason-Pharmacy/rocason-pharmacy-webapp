import { NavLink } from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import '../Layout/footer.css'
const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-nav">
      <div>
        <h1>
        ROCASON
        <br/>
        <span className='footer-text'>
        PHARMACY
        </span>
        </h1>
        <p className='footer-subtext'>
          Your favourite online pharmacy store. 
          We offer onsite delivery and your health is our priority
        </p>
      </div>
      <div className='footer-social-links'>
        <FaFacebookF/>
        <FaTwitter/>
        <FaLinkedin/>
        <BsInstagram/>
      </div>
    </div>

    <hr className="footer-hr" />
    <div className="footer-row">
    <div className="footer-info">
      <ul className="links">
        <li className="footer-header">Site Map</li>
        <NavLink to="/" className="footer-links">
          <li className="links-nav">Home</li>
        </NavLink>
        <NavLink to="/about" className="footer-links">
          <li className="links-nav">About Us</li>
        </NavLink>
        <NavLink to="/product" className="footer-links">
          <li className="links-nav">Products</li>
        </NavLink>
        <NavLink to="/contact" className="footer-links">
          <li className="links-nav">Contact Us</li>
        </NavLink>
      </ul>

      <ul className="links">
        <li className="footer-header">Services</li>
        <NavLink to="/investment" className="footer-links">
          <li className="links-nav">Delivery</li>
        </NavLink>
        <NavLink to="/support" className="footer-links">
          <li className="links-nav">Purchase</li>
        </NavLink>
        <NavLink to="/taxation" className="footer-links">
          <li className="links-nav">Consult Specialist</li>
        </NavLink>
      </ul>
    </div>
    </div>

    <hr />
    <div className="footer-bottom">
      <p className="copyright">
        &copy; 2023. Rocason Pharmacy. All Rights Reserved.{" "}
        <br/>Web design by Phasecurve Technology
      </p>
      
    </div>
  </div>
  )
}

export default Footer