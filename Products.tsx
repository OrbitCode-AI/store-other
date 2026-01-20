import './Products.css';
import { useVar } from 'orbitcode';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  color: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductsProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  { id: '1', name: 'Product One', price: 29.99, description: 'A great product for everyday use', color: '#74b9ff' },
  { id: '2', name: 'Product Two', price: 49.99, description: 'Premium quality at a great price', color: '#a29bfe' },
  { id: '3', name: 'Product Three', price: 19.99, description: 'Simple and effective solution', color: '#55efc4' },
  { id: '4', name: 'Product Four', price: 39.99, description: 'Best seller in this category', color: '#ffeaa7' },
  { id: '5', name: 'Product Five', price: 59.99, description: 'Top rated by customers', color: '#fab1a0' },
  { id: '6', name: 'Product Six', price: 24.99, description: 'Compact and portable design', color: '#fd79a8' }
];

function ProductCard({ product }: { product: Product }) {
  const [cartItems, setCartItems] = useVar<CartItem[]>('cartItems', []);

  const addToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price, quantity: 1 }]);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image" style={{ background: product.color }}>
        <span className="product-icon">📦</span>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function Products({ products = defaultProducts }: ProductsProps) {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function ProductsPreview() {
  return <Products />;
}

export { Products, ProductCard };
