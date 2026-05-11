import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className={styles.card}>
      <p className={styles.name}>{product.name}</p>
      <span className={styles.price}>${product.price}</span>
      <button className={styles.addBtn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
