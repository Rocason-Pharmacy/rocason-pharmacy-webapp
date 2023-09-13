import '../../styles/home/productCategory.css';

const ProductCategory = () => {
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <div className="category-header">
          <div className="border-line"></div>
          <h2>Popular Category</h2>
          <div className="border-line"></div>
        </div>
        <div className="category-cards flex-btw">
          <div className="prescription-card">
            <div className="prescription-context">
              <h3>Prescription Medicines</h3>
              <p>Your Choice For Quality and Affordable Drugs.</p>
            </div>
            <div>
              <a
                href="https://wa.me/+2348038569395"
                target="_blank"
                className="prescription-btn"
              >
                Buy Now
              </a>
            </div>
          </div>

          <div className="right-cards">
            <div className="double-cards flex-btw">
              <div className="double-card otc-card">
                <div className="double-context otc-context">
                  <h3>OTC</h3>
                </div>
                <div>
                  <a
                    href="https://wa.me/+2348038569395"
                    target="_blank"
                    className="double-btn otc-btn"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              <div className="double-card cold-card">
                <div className="double-context cold-context">
                  <h3>Cold/Flu</h3>
                </div>
                <div>
                  <a href="#" className="double-btn cold-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="supplement-card">
              <div className="supplement-context">
                <h3>Supplements</h3>
              </div>
              <div>
                <a
                  href="https://wa.me/+2348038569395"
                  target="_blank"
                  className="supplement-btn"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
