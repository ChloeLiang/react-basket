import React, { FC, useState } from 'react';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import { Product, Order } from '../types/interface';
import Basket from '../components/Basket';

const MenuContainer: FC = (props) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToOrder = (data: Order) => {
    setOrders(orders.concat(data));
    setSelectedProduct(null);
  };

  return (
    <div className="MenuContainer">
      <section className="MenuContainer__left">
        <Heading>Restaurant App</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          provident dicta rerum, vel ipsum molestias eveniet blanditiis optio
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          provident dicta rerum, vel ipsum molestias eveniet blanditiis optio
        </Paragraph>
        <ProductList onSelectProduct={handleSelectProduct} />
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onFormSubmit={handleAddToOrder}
            onCancel={closeProductDetail}
          />
        )}
      </section>
      <section className="MenuContainer__right">
        <Basket orders={orders} />
      </section>
    </div>
  );
};

export default MenuContainer;
