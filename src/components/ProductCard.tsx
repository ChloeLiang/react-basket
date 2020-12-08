import React, { FC } from 'react';
import Button from './Button';
import { Product } from '../types/interface';

interface Props {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: FC<Props> = (props) => {
  const { product, onSelectProduct } = props;
  return (
    <div className="ProductCard">
      <img
        className="ProductCard__image"
        src={product.image}
        alt={product.title}
      />
      <h2 className="ProductCard__title">{product.title}</h2>
      <p className="ProductCard__description">{product.description}</p>
      <Button onClick={() => onSelectProduct(product)}>Add to Order</Button>
    </div>
  );
};

export default ProductCard;
