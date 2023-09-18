import { FC } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { MdOutlineLocationOn } from 'react-icons/md';
import '../../styles/contact/WorkingHrs.css';
import { Fade } from 'react-reveal';
const WorkingHrs: FC = () => {
  return (
    <div className="working-wrapper">
      <div className="working-container">
        <Fade duration={2000}>
          <h4>Rocason Pharmacy Hours</h4>
        </Fade>
        <div className="working-hrs-table">
          <div className="working-days">
            <div className="working-day grey">
              <p>Monday - Friday</p>
            </div>
            <div className="working-day">
              <p>Saturday</p>
            </div>
            <div className="working-day grey">
              <p>Sunday</p>
            </div>
          </div>
          <div className="working-time">
            <div className="working-time grey">
              <p>8am - 9pm</p>
            </div>
            <div className="working-time">
              <p>8am - 9pm</p>
            </div>
            <div className="working-time grey">
              <p>11am - 9pm</p>
            </div>
          </div>
        </div>

        <div className="contact-address">
          <div className="contact-call">
            <div>
              <AiOutlinePhone className="contact-icon" />
            </div>
            <p>+234 803 856 9395</p>
          </div>
          <div className="contact-call">
            <div>
              <RxEnvelopeClosed className="contact-icon" />
            </div>
            <p>rocasonpharmacy@yahoo.com</p>
          </div>
          <div className="contact-call">
            <div>
              <MdOutlineLocationOn className="contact-icon" />
            </div>
            <p>
              Onifade Junction, 8 Akintan Street, Luth Rd, Idi Oro 100253, Lagos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHrs;
