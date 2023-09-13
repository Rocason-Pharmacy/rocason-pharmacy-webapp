import '../../styles/home/prorec.css';
// import { Link } from 'react-router-dom';
import pharmacist from '../../assets/home/pharmacistHm.png';
import fidson from '../../assets/home/fidson.png';
import juhel from '../../assets/home/juhel.png';
import emzor from '../../assets/home/emzor.png';
import gsk from '../../assets/home/gsk.png';
import dgf from '../../assets/home/dgf.png';
import femaleSex from '../../assets/home/female-sex.png';
import healthSex from '../../assets/home/health-sex.png';
import maleSex from '../../assets/home/male-sex.png';
import { Link } from 'react-router-dom';

const ProRec = () => {
  return (
    <>
      <div className="recommendation-wrapper">
        <h1>Product Recommendation</h1>
        <div className="recommendation-container">
          <div className="female-health">
            <div className="health-container flex-around">
              <h2>Female Health</h2>
              <div className="female-hlt-btn">
                <Link to="/products#multivitamin" className="health-btn">
                  view
                </Link>
              </div>
            </div>
            <img src={femaleSex} alt="female-sex" />
          </div>
          <div className="male-health">
            <div className="health-container flex-around">
              <h2>Male Health</h2>
              <div className="male-hlt-btn">
                <Link to="/products#multivitamin" className="health-btn">
                  view
                </Link>
              </div>
            </div>
            <img src={maleSex} alt="male-sex" />
          </div>
          <div className="sex-health">
            <div className="health-container flex-around">
              <h2>Sexual Health</h2>
              <div className="sex-hlt-btn">
                <Link to="/products#multivitamin" className="health-btn">
                  view
                </Link>
              </div>
            </div>
            <img src={healthSex} alt="health-sex" />
          </div>
        </div>
      </div>

      <div className="start-chat-container">
        <div>
          <div className="start-chat">
            <h2>Speak to a Pharmacist</h2>
            <p>
              Ask your Pharmacist, not the internet. Consult with our
              Pharmacist, available online everyday
            </p>
          </div>
          <div className="start-chat-btn">
            <a
              href="https://wa.me/+2348038569395"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="overview-btn">Start Chat</button>
            </a>
          </div>
        </div>
        <div className="pharm-div">
          <img src={pharmacist} alt="" />
        </div>
      </div>
      <div className="brands">
        <h1>Over 1000+ brands</h1>
        <div className="mobile-brands">
          <div className="brand-seg1">
            <img src={fidson} alt="" />
            <img src={juhel} alt="" />
            <img src={emzor} alt="" />
          </div>
          <div className="brand-seg2">
            <img src={gsk} alt="" />
            <img src={dgf} alt="" className="dgf-img" />
          </div>
        </div>
        <div className="dektop-brands">
          <img src={fidson} alt="" />
          <img src={juhel} alt="" />
          <img src={emzor} alt="" />
          <img src={gsk} alt="" />
          <img src={dgf} alt="" className="dgf-img" />
        </div>
      </div>
    </>
  );
};

export default ProRec;
