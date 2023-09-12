import "../../styles/home/prorec.css";
import pharmacist from "../../assets/home/pharmacistHm.png";
import fidson from "../../assets/home/fidson.png";
import juhel from "../../assets/home/juhel.png";
import emzor from "../../assets/home/emzor.png";
import gsk from "../../assets/home/gsk.png";
import dgf from "../../assets/home/dgf.png";

const ProRec = () => {
  return (
    <>
      <div className="prorec-container">
        <h1 className="title-prorec">
          Product <br />
          Recommendation
        </h1>
        <div className="product-rec">
          <div className="female-prorec">
            <h1>Female Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
          </div>
          <div className="female-prorec male-prorec">
            <h1>Male Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
          </div>
          <div className="female-prorec sexual-prorec">
            <h1>Sexual Health</h1>
            <div className="img-and-btn">
              <button className="pro-rec-button">View</button>
            </div>
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
          rel="noopener noreferrer">
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
