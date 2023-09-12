import "../../styles/home/order.css";
import orderDrugs from '../../assets/home/orderDrugs.png'

const Order = () => {
    return (
      <div className="ordercontainer">
        <div className="order">
          <div className="order-text">
            <h1>Order Your Drugs</h1>
            <p>Send us a message for your medications</p>
          </div>
            <button className="order-button"> 
              <a href="https://wa.me/+2348038569395"
                 target="_blank"
                 rel="noopener noreferrer">
                  Contact Us
              </a>  
            </button>
          
        </div>
            <img src={orderDrugs} alt="" />
      </div>
    );
};

export default Order;
