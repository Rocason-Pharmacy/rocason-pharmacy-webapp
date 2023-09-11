import '../../styles/home/ourProduct.css';
import ProductCard from '../Products/ProductCard';
import nurofen from '../../assets/products/analgesics/nurofen.png';
import panadol from '../../assets/products/analgesics/panadol.png';
import emcap from '../../assets/products/analgesics/emcap.png';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../../styles/home/ourProduct.css';

const OurProducts = () => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <div className="product-header">
          <div className="border-line"></div>
          <h2>Our Products</h2>
          <div className="border-line"></div>
        </div>
        <div className="products-card">
          <ProductCard
            productImg={nurofen}
            productTitle={'Nurofen Drug'}
            productPrice={2500}
          />
          <ProductCard
            productImg={emcap}
            productTitle={'Wellwoman'}
            productPrice={1500}
          />
          <ProductCard
            productImg={nurofen}
            productTitle={'Nurofen Drug'}
            productPrice={500}
          />
          <ProductCard
            productImg={nurofen}
            productTitle={'Nurofen Drug'}
            productPrice={2500}
          />
          <ProductCard
            productImg={panadol}
            productTitle={'Painkiller Drug'}
            productPrice={2000}
          />
          <ProductCard
            productImg={nurofen}
            productTitle={'Nurofen Drug'}
            productPrice={2100}
          />
        </div>
        <div className="all-product-link">
          <Link to="/products">
            <span>View all</span>
            <HiOutlineArrowSmRight color="#000" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
