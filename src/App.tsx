import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Authors from './pages/Authors'
import Journal from './pages/Journal'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
