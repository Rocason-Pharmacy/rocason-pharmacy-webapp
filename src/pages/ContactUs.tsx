import { FC } from 'react';
import HeroBanner from './../Components/contact/HeroBanner';
import WorkingHrs from '../Components/contact/WorkingHrs';
import ContactMap from '../Components/contact/Map';

const ContactUs: FC = () => {
  return (
    <div>
      <HeroBanner />
      <WorkingHrs />
      <ContactMap />
    </div>
  );
};

export default ContactUs;
