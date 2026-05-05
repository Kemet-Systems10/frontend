import ProductCard from './ProductCard';
import styles from './ProductsGrid.module.css';

const products = [
  { name: 'Classic Burger', price: 8.99 },
  { name: 'Cheeseburger', price: 9.99 },
  { name: 'Cola', price: 2.99 },
  { name: 'Coffee', price: 3.49 },
  { name: 'Fries', price: 3.99 },
  { name: 'Onion Rings', price: 4.49 },
  { name: 'Milkshake', price: 4.99 },
  { name: 'Ice Cream', price: 3.49 },
  { name: 'Hot Dog', price: 5.99 },
  { name: 'Pizza Slice', price: 6.99 },
];

const ProductsGrid = () => {
  return (
    <div className={styles.grid}>
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
};

export default ProductsGrid;
