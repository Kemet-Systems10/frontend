import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <p className={styles.name}>{product.name}</p>
      <span className={styles.price}>${product.price}</span>
    </div>
  );
};

export default ProductCard;
