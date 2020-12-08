import React, { FC } from 'react';
import Button from './Button';
import Paragraph from './Paragraph';
import { Order } from '../types/interface';
import { getTotalPrice } from '../utils';

interface Props {
  orders: Order[];
}

const Basket: FC<Props> = (props) => {
  const { orders } = props;

  const renderOrders = () => {
    return (
      <>
        <div className="Basket__orders">
          {orders.map((order) => (
            <div className="Basket__order" key={order.id}>
              <p>
                {order.quantity} x {order.title} HK${order.price}
              </p>
              <p>
                {order.options.map((option) => (
                  <span key={option.id} className="Basket__option">
                    {option.name}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <p className="Basket__total">
          <strong>Total: </strong>
          <span>HK${getTotalPrice(orders)}</span>
        </p>
      </>
    );
  };

  const renderEmpty = () => {
    return <Paragraph>Your basket is empty...</Paragraph>;
  };

  return (
    <div className="Basket">
      <h3 className="Basket__title">Your Basket</h3>
      {orders.length > 0 ? renderOrders() : renderEmpty()}
      <Button disabled={orders.length === 0}>Checkout</Button>
    </div>
  );
};

export default Basket;
