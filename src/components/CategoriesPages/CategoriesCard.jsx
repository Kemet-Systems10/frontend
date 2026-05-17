import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './CategoryCard.module.css';

const CategoriesCard = ({ category }) => {
  const getImageUrl = (img) => {
    if (!img) return null;
    if (typeof img === 'object') return img.url || img.secure_url;
    if (img.startsWith('http')) return img;
    // Try category (singular) first, if it fails maybe they can see the error
    return `http://localhost:3000/uploads/categories/${img}`;
  };

  const imageSrc = getImageUrl(category.image) || getImageUrl(category.photo) || getImageUrl(category.imageUrl);

  return (
    <div className={styles.card}>
      {/* top */}
      <div className={styles.top}>
        <div className={styles.iconBox}>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={category.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              onError={(e) => { 
                // If categories plural fails, try category singular
                if (e.target.src.includes('/categories/')) {
                  e.target.src = e.target.src.replace('/categories/', '/category/');
                } else {
                  e.target.style.display = 'none'; 
                  if(e.target.nextSibling) e.target.nextSibling.style.display = 'block'; 
                }
              }}
            />
          ) : null}
          <span style={{ display: imageSrc ? 'none' : 'block' }}>🍔</span>
        </div>

        <div className={styles.actions}>
          <FaEdit className={`${styles.icon} ${styles.edit}`} />
          <FaTrash className={`${styles.icon} ${styles.delete}`} />
        </div>
      </div>

      {/* content */}
      <div className={styles.content}>
        <h5 className={styles.title}>{category.name}</h5>
        <p className={styles.subtitle}>{category.productsCount || 0} products</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
