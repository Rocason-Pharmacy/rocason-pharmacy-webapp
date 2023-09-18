import '../../styles/home/order.css';
import orderDrugs from '../../assets/home/orderDrugs.png';
import { Link } from 'react-router-dom';

const Order = () => {
  return (
    <div className="ordercontainer">
      <div className="order">
        <div className="order-text">
          <h1>Order Your Drugs</h1>
          <p>Send us a message for your medications</p>
        </div>
        <Link to="/contact">
          <button className="order-button">Contact Us</button>
        </Link>
      </div>
      <img src={orderDrugs} alt="pharmacy" />
    </div>
  );
};

export default Order;
