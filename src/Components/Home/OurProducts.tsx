import ProductCard from '../Products/ProductCard';
import tuxilD from '../../assets/cough/tuxil-d-a.png';
import panadol from '../../assets/analgesics/panadol.png';
import fertiMen from '../../assets/male/fertimen.png';
import clofenac from '../../assets/analgesics/CLOFENAC-SR-100MG.png';
import lonart from '../../assets/antimalaria/lonart.png';
import wellwoman from '../../assets/female/wellwoman-plus.png';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../../styles/home/ourProduct.css';
import { Fade } from 'react-reveal';

const OurProducts = () => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <div className="product-header">
          <div className="border-line"></div>
          <Fade duration={2000}>
            <h2>Our Products</h2>
          </Fade>
          <div className="border-line"></div>
        </div>
        <div className="products-card">
          <ProductCard
            productImg={tuxilD}
            productTitle={'Tuxil D (Adult) '}
            productPrice={500}
          />
          <ProductCard
            productImg={panadol}
            productTitle={'Panadol Extra x100'}
            productPrice={2800}
          />
          <ProductCard
            productImg={clofenac}
            productTitle={'Clofenac SR 100mg x100'}
            productPrice={5800}
          />
          <ProductCard
            productImg={lonart}
            productTitle={'Lonart DS x6'}
            productPrice={5400}
          />
          <ProductCard
            productImg={fertiMen}
            productTitle={'FertiMEN'}
            productPrice={30000}
          />
          <ProductCard
            productImg={wellwoman}
            productTitle={'Wellwoman Plus'}
            productPrice={13500}
          />
        </div>
        <div className="all-product-link">
          <Fade duration={1500}>
            <Link to="/products">
              <span>View all</span>
              <HiOutlineArrowSmRight color="#000" />
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
