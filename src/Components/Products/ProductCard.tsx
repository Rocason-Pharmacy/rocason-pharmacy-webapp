import { FC } from 'react';
// import '../../styles/products/products.css';
import '../../styles/products/ProductCard.css';
interface Props {
  productImg: string;
  productTitle: string;
  productPrice: number;
}
import { IoLogoWhatsapp } from 'react-icons/io';

const ProductCard: FC<Props> = ({ productImg, productTitle, productPrice }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImg} alt="" />
      </div>
      <div className="product-details">
        <p className="product-title">{productTitle}</p>
        <div className="product-sales flex-btw">
          <p>₦{productPrice}.00</p>
          <a
            href="https://wa.me/+2348109970175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp color="green" fontSize="24px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
