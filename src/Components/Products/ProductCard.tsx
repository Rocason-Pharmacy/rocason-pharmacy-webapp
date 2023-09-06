import {FC} from 'react';
import './products.css';
interface Props {
  productImg: string;
  productTitle: string;
  productPrice: number;
}

const ProductCard: FC<Props> = ({ productImg, productTitle, productPrice }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImg} alt="" />
      </div>
      <div>
        <p className="product-title">{productTitle}</p>
        <p className="product-price">{productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
