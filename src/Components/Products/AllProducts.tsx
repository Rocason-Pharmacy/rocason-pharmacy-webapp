import productData from '../../data/productData';
import '../../styles/products/products.css';
import ProductCard from './ProductCard';
// import ProductItems from './ProductItems';
const AllProducts = () => {
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

        <div className="product-items">
          <h3>MULTIVITAMIN & SUPPLEMENT</h3>
          <div className="products-card">
            {productData.multivitamin.map((item, index) => (
              <ProductCard
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
