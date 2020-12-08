import React, { FC, FormEvent } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';
import { Product, Order } from '../types/interface';

interface Props {
  product: Product;
  onFormSubmit: (data: Order) => void;
  onCancel: () => void;
}

const ProductDetail: FC<Props> = (props) => {
  const { product, onFormSubmit, onCancel } = props;
  const { title, image, description, options } = product;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const inputs = (e.target as HTMLFormElement).elements;
    const quantity = parseInt(
      (inputs.namedItem('quantity') as HTMLSelectElement).value,
      10
    );
    const selectedOptions = product.options.filter((option) => {
      const isOptionSelected = (inputs.namedItem(option.id) as HTMLInputElement)
        .checked;
      return isOptionSelected;
    });

    const data = {
      quantity,
      id: product.id,
      title: product.title,
      price: product.price,
      options: selectedOptions,
    };

    onFormSubmit(data);
  };

  return (
    <div className="ProductDetail">
      <div className="ProductDetail__container">
        <img className="ProductDetail__image" src={image} alt={title} />
        <h2 className="ProductDetail__title">{title}</h2>
        <p className="ProductDetail__description">{description}</p>
        <form onSubmit={handleFormSubmit}>
          <Select id="quantity" options={[1, 2, 3, 4, 5]} />
          {options.map((option) => (
            <Checkbox key={option.id} id={option.id} label={option.name} />
          ))}
          <div className="ProductDetail__btnGroup">
            <Button type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Add to Order</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
