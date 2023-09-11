import { Link } from 'react-router-dom';
import Pills from '../../assets/home/pills.png';
import Wellman from '../../assets/home/wellman.png';
import '../../styles/home/productCategory.css';
const ProductCategory = () => {
  return (
    <div>
      <div className="product-header">
        <h2>Product Category</h2>
        <hr />
      </div>
      <div className="product-container">
        <div className="medic-section">
          <h2>Prescription Medicines</h2>
          <p>
            Your Choice For Quality and <br />
            Affordable Drugs.
          </p>
          <Link to="/">
            <button className="buynow-btn">Buy Now</button>
          </Link>
          <div className="img-container">
            <img src={Pills} alt="" />
          </div>
        </div>
        <div className="medic-section-b">
          <div className="medic-bg">
            <h2>OTC</h2>
            <Link to="">
              <button className="buynow-btn-b">Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="medic-section-c">
          <div className="medic-bg-c">
            <h2>Cold/Flu</h2>
            <Link to="">
              <button className="buynow-btn-c">Buy Now</button>
            </Link>
          </div>
        </div>
        <div className="medic-section-d">
          <h2>Supplements</h2>
          <Link to="">
            <button className="buynow-btn-d">Buy Now</button>
          </Link>
          <div className="img-container-d">
            <img src={Wellman} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
