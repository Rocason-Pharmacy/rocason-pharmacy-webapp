import { FC } from 'react';
import '../../styles/about/HeroBanner.css';

const HeroBanner: FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="working-hour">
          <p>
            Working Hours
            <br /> Mon – Sun : 08:00AM – 09:30 PM
          </p>
        </div>
        <div className="hero-detail">
          <h1>ABOUT US</h1>
          <div className="hero-border-line"></div>
          <p>Your Trusted Community Pharmacy, Delivering Care and Wellness</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
