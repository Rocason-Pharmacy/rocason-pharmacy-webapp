import { FC } from 'react';
import '../../styles/about/Welcome.css';
import pharmacyImg from '../../assets/about/pharmacy-img.png';
import bubble from '../../assets/about/bubble.svg';
import smBubble from '../../assets/about/sm-bubble.svg';

const Welcome: FC = () => {
  return (
    <section className="welcome-wrapper">
      <div className="welcome-container flex-btw">
        <div className="welcome-context">
          <h4>Welcome to</h4>
          <h2>Rocason Pharmacy</h2>
          <div className="welcome-border"></div>
          <p>
            We specialize in providing access to orphan drugs, ethical Products,
            rare medications in various therapeutic areas. Also, we offer high
            quality food supplements for overall well-being meeting the highest
            standard for safety, potency and efficacy. Additionally, We offer
            quick delivery service to your doorstep nationwide.
            <br /> Our drive as an organisation is to ensure that quality and
            effective pharmaceutical products and services gets to the right
            individuals across the nation eliciting the purpose of helping
            people live a healthy life. Our drive as an organisation is to ensure
            that quality and effective pharmaceutical products and services gets
            to the right individuals across the nation eliciting the purpose of
            helping people live a healthy life.
          </p>
        </div>
        <div className="pharmacy-image">
          <img src={pharmacyImg} alt="pharmacy-image" />
          <div className="pharmacy-hrs-card">
            <p className="hours-text">HOURS</p>
            <div className="pharmacy-hrs">
              <div className="flex-btw">
                <p> Monday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p> Tuesday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p> Wednesday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p> Thursday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p>Friday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p>Saturday</p>
                <p> 8am - 9pm</p>
              </div>
              <div className="flex-btw">
                <p>Sunday</p>
                <p> 8am - 9pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-bubble">
        <div className="top-bubble absolute">
          <img src={bubble} alt="pharmacy-design" />
        </div>
        <div className="top-smbubble absolute">
          <img src={smBubble} alt="pharmacy-design" />
        </div>
        <div className="left-bubble absolute">
          <img src={bubble} alt="pharmacy-design" />
        </div>
        <div className="left-smbubble absolute">
          <img src={smBubble} alt="pharmacy-design" />
        </div>
        <div className="bottom-bubble absolute">
          <img src={bubble} alt="pharmacy-design" />
        </div>
        <div className="bottom-smbubble absolute">
          <img src={smBubble} alt="pharmacy-design" />
        </div>
        <div className="middle-bubble absolute">
          <img src={bubble} alt="pharmacy-design" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
