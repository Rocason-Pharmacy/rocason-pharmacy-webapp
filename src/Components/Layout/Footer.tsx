import { NavLink } from 'react-router-dom';

import '../Layout/footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="desktop-footer hidden">
        <div className="footer-nav">
          <div>
            <h1>
              ROCASON
              <br />
              <span className="footer-text">PHARMACY</span>
            </h1>
            <p className='footer-subtext'>
            Your favourite online pharmacy store, your health is our priority." 

            </p>
          </div>

          <hr className="footer-hr" />
   
      
      <div className="footer-info">
        <ul className="links">
          <li className="footer-header">Quick Links</li>
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
      </div>
      
      {/* footer services */}
      <div className="footer-info">
        <ul className="links">
          <li className="footer-header">Services</li>
          <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Delivery</li>
            </a>
          <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Purchase</li>
            </a>
          <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Consult Specialist</li>
            </a>
        </ul>
      </div>
   
   
       </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023. Rocason Pharmacy. All Rights Reserved.{" "}
            <br/>Web design by Phasecurve Technologies
           
          </p>

          {/* <p className="terms ">Privacy Policy</p>
            <p className="terms">Terms & Conditions</p> */}
        </div>
      </div>

      {/* mobile-footer */}
      <div className="mobile-footer ">
        <div className="footer-nav">
          <div>
            <h1>
              ROCASON
              <br />
              <span className="footer-text">PHARMACY</span>
            </h1>
            <p className='footer-subtext'>
            Your favourite online pharmacy store, your health is our priority. 
            </p>
          </div>
       </div>
       <hr className="footer-hr" />
       <div className="footer-nav">
        <div className="footer-info">
          <ul className="links">
            <li className="footer-header">Quick Links</li>
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
        </div>
      
        {/* footer services */}
        <div className="footer-info">
          <ul className="links">
            <li className="footer-header">Services</li>
            <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Delivery</li>
            </a>
           
            <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Purchase</li>
            </a>
           
            <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
            >
              <li className="links-nav">Consult Specialist</li>
            </a>
            
          </ul>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023. Rocason Pharmacy. All Rights Reserved.{" "}
            <br/>Web design by Phasecurve Technologies
            
          </p>
          {/* <p className="copyright">Privacy Policy</p>
            <p className="copyright">Terms & Conditions</p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
