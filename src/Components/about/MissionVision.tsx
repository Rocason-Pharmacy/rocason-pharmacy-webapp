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
              Our mission is to provide great and efficient services in
              pharmaceutical supply chain through innovation, professionalism
              and integrity.
            </p>
          </div>
        </div>
        <div className="vision flex-btw">
          <div className="vision-context">
            <h4>Our vision</h4>
            <p>
              Our vision is to become africa's leading healthcare provider and
              pharmacy. To improve the quality of life of people and patients,
              making people live healthy life through our professional service,
              safe, quality and effective pharmacautical products and services.
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
