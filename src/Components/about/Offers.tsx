import quality from '../../assets/about/quality.svg';
import delivery from '../../assets/about/delivery.svg';
import pickup from '../../assets/about/pickup.svg';
import pharmacyHrs from '../../assets/about/pharmacy-hrs.svg';
import healthCheck from '../../assets/about/health-check.svg';
import customerSupport from '../../assets/about/customer-support.svg';
import '../../styles/about/offers.css';
import { Bounce, Fade } from 'react-reveal';

const Offers = () => {
  return (
    <section className="offer-wrapper">
      <div className="offer-container">
        <Bounce>
          <h2>We offer</h2>
        </Bounce>
        <div className="offer-row1 flex-btw">
          <div className="offer-quality column mobile-center">
            <div>
              <img src={quality} alt="Quality Products" />
            </div>
            <Fade duration={2000}>
              <h4>Quality Products</h4>
            </Fade>
            <p>We provide, quality medication of the highest standard.</p>
          </div>
          <div className="offer-hrs column mobile-center">
            <div>
              <img src={pharmacyHrs} alt="pharmacy-hrs" />
            </div>
            <Fade duration={2500}>
              <h4>24hrs Pharmacist</h4>
            </Fade>
            <p>Consult with our pharmacist, available online every day.</p>
          </div>
          <div className="offer-delivery column mobile-center">
            <img src={delivery} alt="delivery" />
            <Fade duration={3000}>
              <h4>Nationwide Delivery</h4>
            </Fade>
            <p>
              With our logistic & distribution system we get these life-saving
              medications wherever they are needed in Nigeria.
            </p>
          </div>
        </div>
        <div className="offer-row2 flex-btw">
          <div className="health-check column mobile-center">
            <img src={healthCheck} alt="health check" />
            <Fade duration={2000}>
              <h4>Health Check</h4>
            </Fade>
            <p>
              Take advantage of some of our free routine check that we offer.
            </p>
          </div>
          <div className="pickup column mobile-center">
            <img src={pickup} alt="pick up" />
            <Fade duration={2500}>
              <h4>Free Pickup</h4>
            </Fade>
            <p>
              The option to come to any of our branch to pick up your medication
              is also available.
            </p>
          </div>
          <div className="customer-support column mobile-center">
            <img src={customerSupport} alt="customer support" />
            <Fade duration={3000}>
              <h4>Customer Support</h4>
            </Fade>
            <p>
              We provide superb customer support to provide every support you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
