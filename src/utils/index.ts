import { Order } from '../types/interface';

const getTotalPrice = (orders: Order[]) => {
  return orders.reduce((total, order) => {
    return total + order.price * order.quantity;
  }, 0);
};

export { getTotalPrice };
