import './Cart.css';
import { useVar, useSet } from 'orbitcode';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function Cart() {
  const [cartOpen, setCartOpen] = useVar<boolean>('cartOpen', false);
  const [cartItems, setCartItems] = useVar<CartItem[]>('cartItems', []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (!cartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setCartOpen(false)}>×</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Default export renders component in isolation for preview
export default function CartPreview() {
  return (
    <div style={{ position: 'relative', height: '400px', background: '#eee' }}>
      <Cart />
    </div>
  );
}

export { Cart };
