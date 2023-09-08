import { FC } from 'react';
import HeroBanner from './../Components/contact/HeroBanner';
import WorkingHrs from '../Components/contact/WorkingHrs';

const ContactUs: FC = () => {
  return (
    <div>
      <HeroBanner />
      <WorkingHrs />
    </div>
  );
};

export default ContactUs;
