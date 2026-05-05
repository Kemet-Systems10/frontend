import { FaSearch } from "react-icons/fa";
import Cart from "../../components/Pos/Cart";
import Categories from "../../components/Pos/Categories";
import Navbar from "../../components/shared/Navbar/Navbar";
import ProductsGrid from "../../components/Pos/ProductsGrid";
import styles from "./POS.module.css";

const POS = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder="Search products..."
            />
          </div>
          <Categories />
          <ProductsGrid />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default POS;
