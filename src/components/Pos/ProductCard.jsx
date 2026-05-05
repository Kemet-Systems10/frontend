import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <span className={styles.emoji}>{product.emoji}</span>
      <p className={styles.name}>{product.name}</p>
      <span className={styles.price}>${product.price.toFixed(2)}</span>
    </div>
  );
};

export default ProductCard;
