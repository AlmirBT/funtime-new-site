import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import About from './pages/About'
import Stats from './pages/Stats'
import HowItWorks from './pages/HowItWorks'
import Rules from './pages/Rules'
import Community from './pages/Community'
import News from './pages/News'
import Account from './pages/Account'
import Support from './pages/Support'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
          <Route path="/account" element={<Account />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
