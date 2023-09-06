import { FC } from 'react';
import HeroBanner from '../Components/about/HeroBanner';
import Welcome from '../Components/about/Welcome';
import MissionVision from '../Components/about/MissionVision';

const AboutUs: FC = () => {
  return (
    <div>
      <HeroBanner />
      <Welcome />
      <MissionVision />
    </div>
  );
};

export default AboutUs;
