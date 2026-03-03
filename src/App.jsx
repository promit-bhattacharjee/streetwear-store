import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import ProductGrid from './components/products/ProductGrid'
import CartSidebar from './components/cart/CartSidebar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
      <CartSidebar />
    </div>
  )
}

export default App
