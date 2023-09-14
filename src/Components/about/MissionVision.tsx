import { FC } from 'react';
import nurse from '../../assets/about/nurse.png';
import doctor from '../../assets/about/doctor.png';
import '../../styles/about/MissionVision.css';

const MissionVision: FC = () => {
  return (
    <section className="mission-vision-wrapper">
      <div className="mission-vision-container">
        <div className="mission flex-btw">
          <div className="mission-image">
            <img src={nurse} alt="pharmacist" />
          </div>
          <div className="mission-context">
            <h4>Our mission</h4>
            <p>
              Our mission is to provide great and efficient services in the
              pharmaceutical supply chain through innovation, professionalism,
              and integrity.
            </p>
          </div>
        </div>
        <div className="vision flex-btw">
          <div className="vision-context">
            <h4>Our vision</h4>
            <p>
              Our vision is to become Africa's leading healthcare provider and
              pharmacy. We aim to improve the quality of life for people and
              patients, helping them live healthier lives through our
              professional services and the provision of safe, high-quality, and
              effective pharmaceutical products and services.
            </p>
          </div>
          <div className="vision-image">
            <img src={doctor} alt="pharmacist" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
