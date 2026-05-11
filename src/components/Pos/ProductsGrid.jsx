import { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import ProductCard from './ProductCard';
import styles from './ProductsGrid.module.css';

const ProductsGrid = ({ onAddToCart, searchTerm = '' }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get('/products');
        setProducts(res.data?.products || []);
      } catch (err) {
        console.error(err.message || 'Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = searchTerm.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : products;

  return (
    <div className={styles.grid}>
      {filteredProducts.map((p, i) => (
        <ProductCard key={i} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductsGrid;
