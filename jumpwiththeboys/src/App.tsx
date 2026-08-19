import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { BrandStory } from './components/BrandStory';
import { SubBrands } from './components/SubBrands';
import { Shop } from './components/Shop';
import { ContactFooter } from './components/ContactFooter';
import { CartDrawer } from './components/CartDrawer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { initialProducts } from './data/products';
import { Product } from './types';

export default function App() {
  const [loadingApp, setLoadingApp] = useState(true);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoadingApp(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
          }
        }
      } catch {
        // Silently fallback to initialProducts
      }
    };
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <div className="grain" />
      {loadingApp && <Loader />}
      <div className={loadingApp ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        <Navbar />
        <main className="bg-[#0a0a0a]">
          <Hero />
          <Marquee />
          <BrandStory />
          <SubBrands />
          <Shop products={products} loading={loadingProducts} error={error} />
          <ContactFooter />
        </main>
        <CartDrawer />
        <BackToTop />
        <FloatingWhatsApp />
        <MobileQuickBar />
      </div>
    </CartProvider>
  );
}