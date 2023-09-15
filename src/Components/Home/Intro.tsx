import { Link } from 'react-router-dom';
import '../../styles/home/intro.css';
import Drugs from '../../assets/home/overviewImg.png';
import quality from '../../assets/about/quality.svg';
import delivery from '../../assets/about/delivery.svg';
import pickup from '../../assets/about/pickup.svg';
import pharmacyHrs from '../../assets/about/pharmacy-hrs.svg';
import healthCheck from '../../assets/about/health-check.svg';
import customerSupport from '../../assets/about/customer-support.svg';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade, Zoom } from 'react-reveal';

const Intro = () => {
  const [workingHrsText] = useTypewriter({
    words: ['Mon - Sun : 08:00 AM - 9:30 PM'],
    loop: 1,
    typeSpeed: 70,
    delaySpeed: 3000,
  });
  return (
    <div>
      <div className="hero">
        <p className="hero-top-text">
          Working Hours <br /> <span>{workingHrsText}</span>
        </p>
        <h1>
          Welcome to <br />
          <span className="hero-rich-text">Rocason Pharmacy</span>
        </h1>
        <p className="hero-bottom-text">
          Your Choice For Quality{' '}
          <span className="hero-span">and Affordable Drugs.</span>
        </p>
      </div>
      <div className="offers-container">
        <div className="offers">
          <div>
            <img src={quality} alt="Quality Products" className="offer-img" />
            <h4>Quality Products</h4>
          </div>
          <div>
            <img src={pharmacyHrs} alt="pharmacy-hrs" className="offer-img" />
            <h4>24hrs Pharmacist</h4>
          </div>
          <div>
            <img src={delivery} alt="delivery" className="offer-img" />
            <h4>Nationwide Delivery</h4>
          </div>
          <div>
            <img src={healthCheck} alt="health check" className="offer-img" />
            <h4>Health Check</h4>
          </div>
          <div>
            <img src={pickup} alt="pick up" className="offer-img" />
            <h4>Free Pickup</h4>
          </div>
          <div>
            <img
              src={customerSupport}
              alt="customer support"
              className="offer-img"
            />
            <h4>Customer Support</h4>
          </div>
        </div>
      </div>
      <div className="overview-container">
        <div className="overview-text-container">
          <h2 className="overview-header">
            At{' '}
            <Fade duration={2000}>
              <span className="hero-rich-text">Rocason Pharmacy</span>
            </Fade>
            , we supply all range of medications & we bring health & wellness to
            your doorstep.
          </h2>
          <p className="overview-text">
            Rocason Pharmacy is a pharmaceutical company that specialises in
            providing access to orphan drugs, ethical products, and rare
            medications in various therapeutic areas.
            <br /> Also, we offer high quality food supplements for overall
            well-being meeting the highest standard for safety, potency and
            efficacy. Additionally, We offer quick delivery service to your
            doorstep nationwide.
          </p>
          <Link to="/contact">
            <button className="overview-btn">Contact Us</button>
          </Link>
        </div>

        <Zoom duration={1500}>
          <div className="overview-img-container">
            <img src={Drugs} alt="medicine" className="overview-img" />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Intro;
