import { FC } from 'react';
import HeroBanner from '../Components/about/HeroBanner';
import Welcome from '../Components/about/Welcome';
import MissionVision from '../Components/about/MissionVision';
import Offers from '../Components/about/Offers';

const AboutUs: FC = () => {
  return (
    <div>
      <HeroBanner />
      <Welcome />
      <MissionVision />
      <Offers />
    </div>
  );
};

export default AboutUs;
