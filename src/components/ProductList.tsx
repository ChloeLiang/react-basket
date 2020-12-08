import React, { FC } from 'react';
import menu from '../data/menu';
import ProductCard from './ProductCard';
import { Product } from '../types/interface';

interface Props {
  onSelectProduct: (product: Product) => void;
}

const ProductList: FC<Props> = (props) => {
  const { onSelectProduct } = props;

  return (
    <div className="ProductList">
      {menu.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
