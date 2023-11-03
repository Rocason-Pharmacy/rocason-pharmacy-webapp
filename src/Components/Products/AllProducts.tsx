import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import productData from '../../data/productData';
import '../../styles/products/products.css';
import ProductCard from './ProductCard';
const AllProducts = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id'); // For query parameters

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [id]);

  return (
    <div className="all-products">
      <div className="product-hero"></div>
      <div className="product-container">
        <h1 className="all-products-title">All Products</h1>

        <div className="product-items">
          <h3>Analgesics</h3>
          <div className="products-card">
            {productData.analgesics.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items">
          <h3>Antibiotics</h3>
          <div className="products-card">
            {productData.antibiotic.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items">
          <h3>Antimalaria</h3>
          <div className="products-card">
            {productData.antimalaria.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items">
          <h3>COUGH & COLD</h3>
          <div className="products-card">
            {productData.cough.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items">
          <h3>ANTIDIABETIC</h3>
          <div className="products-card">
            {productData.antidiabetic.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items">
          <h3>ANTIHYPERTENSIVE</h3>
          <div className="products-card">
            {productData.antihypertensive.map((item, index) => (
              <ProductCard
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          <div className="product-items-line"></div>
        </div>

        <div className="product-items" id="multivitamin">
          <h3>MULTIVITAMIN & SUPPLEMENT</h3>
          <div className="products-card">
            {productData.multivitamin.map((item, index) => (
              <ProductCard
                // id="multivitamin"
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          {/* <div className="product-items-line"></div> */}
        </div>

        <div className="product-items" id="female">
          <h3>FEMALE</h3>
          <div className="products-card">
            {productData.female.map((item, index) => (
              <ProductCard
                // id="multivitamin"
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          {/* <div className="product-items-line"></div> */}
        </div>

        <div className="product-items" id="male">
          <h3>MALE</h3>
          <div className="products-card">
            {productData.male.map((item, index) => (
              <ProductCard
                // id="multivitamin"
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          {/* <div className="product-items-line"></div> */}
        </div>

        <div className="product-items" id="others">
          <h3>OTHERS</h3>
          <div className="products-card">
            {productData.others.map((item, index) => (
              <ProductCard
                // id="multivitamin"
                key={index}
                productImg={item.img}
                productTitle={item.title}
                productPrice={item.price}
              />
            ))}
          </div>
          {/* <div className="product-items-line"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
