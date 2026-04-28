import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  LogIn, 
  User, 
  Search, 
  Gamepad2, 
  Smartphone, 
  Watch, 
  Headphones, 
  Shirt, 
  Heart, 
  Plus, 
  LogOut,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  icon: React.ReactNode;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Pro Smartphone X', 
    price: 999, 
    category: 'Electronics', 
    rating: 4.8, 
    image: '', 
    icon: <Smartphone className="w-8 h-8 text-blue-500" /> 
  },
  { 
    id: '2', 
    name: 'Elite Series Watch', 
    price: 349, 
    category: 'Accessories', 
    rating: 4.9, 
    image: '', 
    icon: <Watch className="w-8 h-8 text-purple-500" /> 
  },
  { 
    id: '3', 
    name: 'Sonic Headphones', 
    price: 199, 
    category: 'Electronics', 
    rating: 4.5, 
    image: '', 
    icon: <Headphones className="w-8 h-8 text-indigo-500" /> 
  },
  { 
    id: '4', 
    name: 'Console Elite G2', 
    price: 499, 
    category: 'Gaming', 
    rating: 4.7, 
    image: '', 
    icon: <Gamepad2 className="w-8 h-8 text-rose-500" /> 
  },
  { 
    id: '5', 
    name: 'Essential Cotton Tee', 
    price: 29, 
    category: 'Apparel', 
    rating: 4.2, 
    image: '', 
    icon: <Shirt className="w-8 h-8 text-emerald-500" /> 
  },
  { 
    id: '6', 
    name: 'Designer Sunglasses', 
    price: 159, 
    category: 'Accessories', 
    rating: 4.6, 
    image: '', 
    icon: <Search className="w-8 h-8 text-amber-500" /> 
  },
];

// --- Components ---

interface ProductCardProps {
  product: Product;
  onAdd: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="group space-y-4"
  >
    <div className="aspect-square bg-white border border-slate-100 flex items-center justify-center relative overflow-hidden">
      <div className="group-hover:scale-110 transition-transform duration-700 opacity-80">
        {product.icon}
      </div>
      <button 
        onClick={() => onAdd(product.name)}
        className="absolute inset-0 bg-black/0 group-hover:bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <span className="bg-white px-4 py-2 text-[10px] uppercase tracking-widest font-bold shadow-sm">Quick Add</span>
      </button>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-tight text-ink">{product.name}</p>
        <p className="text-[10px] italic font-serif text-muted">${product.price}</p>
      </div>
      <button className="text-muted hover:text-ink transition-colors">
        <Heart className="w-3.5 h-3.5" />
      </button>
    </div>
  </motion.div>
);

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Section: Hero Feature */}
      <section className="w-[60%] border-r border-slate-100 flex flex-col bg-white">
        <div className="p-16 flex-1 flex flex-col justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-label block mb-6">Featured Piece — 001</span>
            <h1 className="text-7xl sm:text-8xl leading-[0.85] font-light mb-8 italic">
              Ethereal<br /><span className="not-italic">Vision</span> Phone
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 mb-12">
              Redefining the digital interface with tactile titanium and ceramic optics. A synthesis of high-performance engineering and sculptural form.
            </p>
            <div className="flex items-center gap-8">
              <button className="editorial-btn">Discover Phone</button>
              <span className="text-3xl font-light italic font-serif">$1,200</span>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-10 -right-20 w-80 h-96 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 rotate-12 group">
            <Smartphone className="w-32 h-32 text-slate-200 group-hover:text-blue-200 transition-colors duration-700" />
          </div>
        </div>
        
        <div className="border-t border-slate-100 py-6 px-12 bg-slate-50 flex items-center overflow-hidden h-16">
          <div className="text-[10px] uppercase tracking-[0.5em] text-slate-400 whitespace-nowrap animate-marquee flex gap-12">
            <span>Global Shipping Available</span>
            <span>•</span>
            <span>Curated for Modernity</span>
            <span>•</span>
            <span>The Crown Standard</span>
            <span>•</span>
            <span>Limited Release 2026</span>
          </div>
        </div>
      </section>

      {/* Right Section: Login & Small Catalog */}
      <section className="w-[40%] flex flex-col bg-white">
        <div className="p-16 border-b border-slate-100">
          <h2 className="editorial-label mb-10">Member Entrance</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="editorial-label font-medium">Identification</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email or Username" 
                className="editorial-input"
              />
            </div>
            <div className="space-y-1 pb-4">
              <label className="editorial-label font-medium">Security Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="editorial-input"
              />
            </div>
            {error && <p className="text-rose-500 text-[10px] uppercase tracking-widest font-bold">{error}</p>}
            <button type="submit" className="w-full editorial-btn-outline mt-4">
              Enter Storefront
            </button>
          </form>
        </div>

        <div className="flex-1 p-16 bg-slate-50 overflow-y-auto">
          <h2 className="editorial-label mb-10">Essentials</h2>
          <div className="grid grid-cols-2 gap-10">
            {PRODUCTS.slice(0, 3).map(product => (
              <div key={product.id} className="space-y-3">
                <div className="aspect-square bg-white border border-slate-100 flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all duration-500">
                  {product.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-tight">{product.name}</p>
                  <p className="text-[10px] italic font-serif text-muted">${product.price}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center border border-dashed border-slate-300 aspect-square group cursor-pointer hover:border-ink transition-colors">
              <span className="editorial-label group-hover:text-ink">View All</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomePage = ({ onLogout, onAddToCart, cartCount }: { onLogout: () => void; onAddToCart: (name: string) => void; cartCount: number }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Electronics', 'Gaming', 'Apparel', 'Accessories'];
  
  const filteredProducts = PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Top Controls */}
      <div className="border-b border-slate-100 px-12 py-6 flex justify-between items-center bg-white">
        <div className="flex gap-10 overflow-x-auto scrollbar-none py-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                activeCategory === cat ? 'text-ink font-bold border-b border-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button 
          onClick={onLogout}
          className="editorial-label text-ink hover:text-muted transition-colors flex items-center gap-2"
        >
          <LogOut className="w-3 h-3" />
          Logout
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="editorial-label block mb-2">Curated Selection</span>
              <h2 className="text-4xl font-light italic">Storefront</h2>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted">{filteredProducts.length} Items found</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={(name) => onAddToCart(name)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('isLoggedIn');
    if (saved === 'true') setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col font-sans text-ink bg-white">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-slate-100 flex-shrink-0">
        <div className="text-3xl font-serif font-bold tracking-tighter uppercase italic text-black">Crown</div>
        <div className="hidden lg:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-muted transition-colors">Collection</a>
          <a href="#" className="hover:text-muted transition-colors">Archive</a>
          <a href="#" className="hover:text-muted transition-colors">Sustainability</a>
          <a href="#" className="text-black font-bold border-b border-black">Store</a>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-4 h-4 text-slate-400 stroke-[3px] hover:text-ink cursor-pointer transition-colors" />
          <div className="text-xs uppercase tracking-widest font-bold underline underline-offset-4 cursor-pointer hover:opacity-70 transition-opacity">
            Cart ({cartCount})
          </div>
        </div>
      </nav>

      <main className="flex-1 flex overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoggedIn ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex"
            >
              <HomePage onLogout={handleLogout} onAddToCart={handleAddToCart} cartCount={cartCount} />
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex"
            >
              <LoginPage onLogin={handleLogin} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Details */}
      <footer className="px-12 py-6 border-t border-slate-100 flex justify-between items-center bg-white flex-shrink-0">
        <div className="text-[9px] uppercase tracking-widest text-slate-400 italic">© 2026 Crown E-Commerce — All rights reserved</div>
        <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold text-ink">
          <span className="hover:text-muted cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-muted cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-muted cursor-pointer transition-colors">Contact</span>
        </div>
      </footer>
    </div>
  );
}

