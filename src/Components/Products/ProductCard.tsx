import { FC } from 'react';
import '../../styles/products/ProductCard.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { thousandsSeparators } from '../../utils/helpers';
interface Props {
  productImg: string;
  productTitle: string;
  productPrice: number;
  id?: string;
}

const ProductCard: FC<Props> = ({ productImg, productTitle, productPrice }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImg} alt="product image" />
      </div>
      <div className="product-details">
        <p className="product-title">{productTitle}</p>
        <div className="product-sales flex-btw">
          <p>₦{thousandsSeparators(productPrice)}.00</p>
          <a
            href="https://wa.me/+2348038569395"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp color="green" fontSize="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
