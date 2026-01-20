import './Navbar.css';
import { useVar } from 'orbitcode';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface NavbarProps {
  storeName?: string;
}

function Navbar({ storeName = 'My Store' }: NavbarProps) {
  const [cartItems] = useVar<CartItem[]>('cartItems', []);
  const [cartOpen, setCartOpen] = useVar<boolean>('cartOpen', false);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="store-navbar">
      <div className="nav-container">
        <a href="#" className="store-logo">{storeName}</a>

        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="cart-toggle"
          onClick={() => setCartOpen(!cartOpen)}
          aria-label="Toggle cart"
        >
          🛒
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </nav>
  );
}

// Default export renders component in isolation for preview
export default function NavbarPreview() {
  return (
    <div className="preview-container">
      <Navbar storeName="Demo Store" />
    </div>
  );
}

export { Navbar };
