import "../../styles/home/order.css";
import orderDrugs from '../../assets/home/orderDrugs.png'

const Order = () => {
    return (
      <div className="ordercontainer">
        <div className="order">
          <div className="background-gradient"></div>
          <div className="order-text">
            <h1>Order Your Drugs</h1>
            <p>Send us a message for your medications</p>
          </div>
          <button className="order-button">Contact Us</button>
        </div>
            <img src={orderDrugs} alt="" width="100%"/>
      </div>
    );
};

export default Order;
