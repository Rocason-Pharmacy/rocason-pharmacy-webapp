import { FC } from 'react';
import '../../styles/contact/HeroBanner.css';
import heroImg from '../../assets/about/hero-contact.png';

const HeroBanner: FC = () => {
  return (
    <section className="contact-hero-banner">
      <div className="contact-hero-container">
        <div className="contact-working-hour">
          <p>
            Working Hours
            <br /> Mon – Sun : 08 AM – 09:30 PM
          </p>
        </div>
        <div className="contact-hero-detail flex-btw">
          <div className="contact-hero-context">
            <h1>Your Feedback Matters</h1>
            <p>
              At Rocason Pharmacy, Your Feedback Fuels Our Journey of Progress.
              Although an Instant Reply May Not Always Be Possible, Know That
              Your Insights Will Shape Our Path Forward. For Personalized
              Inquiries, Don't Hesitate to Connect with Our Dedicated Customer
              Care Team.
            </p>
          </div>

          <div className="contact-hero-image">
            <img src={heroImg} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
