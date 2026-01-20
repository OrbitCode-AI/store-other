import './Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

function Hero({
  title = 'Welcome to Our Store',
  subtitle = 'Discover amazing products curated just for you'
}: HeroProps) {
  return (
    <section className="store-hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return <Hero />;
}

export { Hero };
