import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <FaShoppingCart className={styles.headerIcon} />
        Current Order
      </div>

      <div className={styles.empty}>
        <FaShoppingCart size={40} />
        <p className={styles.emptyText}>No items in cart</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span>$0.00</span>
        </div>
        <div className={styles.row}>
          <span>Tax (8%)</span>
          <span>$0.00</span>
        </div>
        <hr className={styles.divider} />
        <div className={styles.totalRow}>
          <span>Total</span>
          <span>$0.00</span>
        </div>
        <button className={styles.btn}>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
