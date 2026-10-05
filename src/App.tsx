import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Industries } from './pages/Industries';
import { IndustryDetail } from './pages/IndustryDetail';
import { About } from './pages/About';
import { Quality } from './pages/Quality';
import { Resources } from './pages/Resources';
import { ArticleDetail } from './pages/ArticleDetail';
import { Locations } from './pages/Locations';
import { LocationDetail } from './pages/LocationDetail';
import { Contact } from './pages/Contact';
import { RequestQuote } from './pages/RequestQuote';
import { PrivacyPolicy, Terms } from './pages/Legal';
import { Sitemap } from './pages/Sitemap';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-[#F5F7F9] text-[#17212B] pb-14 md:pb-0">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ArticleDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-a-quote" element={<RequestQuote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
