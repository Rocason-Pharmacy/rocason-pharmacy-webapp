import { FC } from 'react';
import '../../styles/about/HeroBanner.css';
import { useTypewriter } from 'react-simple-typewriter';

const HeroBanner: FC = () => {
  const [workingHrsText] = useTypewriter({
    words: ['Mon - Sun : 08:00 AM - 9:30 PM'],
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });
  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="working-hour">
          <p>
            Working Hours
            <br /> <span>{workingHrsText}</span>
          </p>
        </div>
        <div className="hero-detail">
          <h1>ABOUT US</h1>
          <div className="hero-border-line"></div>
          <p>Your trusted community pharmacy, delivering care and wellness</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
