import "./prorec.css";
import femaleHealth from "../../assets/home/femaleHealth.png";
const ProRec = () => {
  return (
    <div className="prorec-container">
      <h1 className="title-prorec">
        Product <br />
        Recommendation
      </h1>
      <div className="female-prorec">
        <h1>Female Health</h1>
        <div className="img-and-btn">
          <button className="pro-rec-button">View</button>
          <img src={femaleHealth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProRec;
