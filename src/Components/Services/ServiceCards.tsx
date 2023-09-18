import CustomServiceCards from '../CustomCards/CustomServiceCards';
import Vector from '../../assets/services/Vector.svg';
import Svg from '../../assets/services/Ellipse 1.svg';
import Svg2 from '../../assets/services/Ellipse 2.svg';
import '../../styles/services/serviceCard.css';
import serviceData from '../../data/serviceData';
import { Fade } from 'react-reveal';

const ServiceCards = () => {
  return (
    <div className="service-container">
      <div className="service-card-header">
        <div>
          <Fade duration={2000}>
            <h2>Our services include:</h2>
          </Fade>
          <hr />
        </div>
      </div>
      <div className="service-cards-container">
        {serviceData.map((data, index) => (
          <div key={index}>
            <CustomServiceCards
              img={data.img}
              title={data.title}
              desc={data.desc}
            />
          </div>
        ))}
      </div>
      <div className="svg-container">
        <img src={Vector} alt="" className="svg-top"/>
        <img src={Svg} alt="" className="svg-bottom"/>
        <img src={Svg2} alt="" className="svg-middle"/>
      </div>
    </div>
  );
};

export default ServiceCards;
