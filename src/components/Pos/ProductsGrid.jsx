import ProductCard from "./ProductCard";
import styles from "./ProductsGrid.module.css";

const products = [
  { name: "Classic Burger", price: 8.99, emoji: "🍔" },
  { name: "Cheeseburger", price: 9.99, emoji: "🍔" },
  { name: "Cola", price: 2.99, emoji: "🥤" },
  { name: "Coffee", price: 3.49, emoji: "☕" },
  { name: "Fries", price: 3.99, emoji: "🍟" },
  { name: "Onion Rings", price: 4.49, emoji: "🧅" },
  { name: "Milkshake", price: 4.99, emoji: "🥛" },
  { name: "Ice Cream", price: 3.49, emoji: "🍦" },
  { name: "Hot Dog", price: 5.99, emoji: "🌭" },
  { name: "Pizza Slice", price: 6.99, emoji: "🍕" },
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
