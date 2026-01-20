import './Footer.css';

interface FooterProps {
  storeName?: string;
}

function Footer({ storeName = 'My Store' }: FooterProps) {
  return (
    <footer className="store-footer-other">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>{storeName}</h3>
            <p>Quality products, exceptional service.</p>
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {storeName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return <Footer storeName="Demo Store" />;
}

export { Footer };
