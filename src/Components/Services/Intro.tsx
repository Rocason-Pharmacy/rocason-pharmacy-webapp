import '../../styles/services/intro.css';
import HeroImg from '../../assets/services/serviceHeroImg.png';
import { useTypewriter } from 'react-simple-typewriter';
const Intro = () => {
  const [workingHrsText] = useTypewriter({
    words: ['Mon - Sun : 08:00 AM - 9:30 PM'],
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });
  return (
    <div>
      <div className="service-hero">
        <p className="service-hero-top-text">
          Working Hours <br /> <span>{workingHrsText}</span>
        </p>
        <div className="service-hero-container">
          <h1>Our Services </h1>
          <img src={HeroImg} alt="services image" className="service-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
