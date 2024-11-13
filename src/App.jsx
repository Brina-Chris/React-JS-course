import { useEffect, useState } from 'react';
import './App.css'
// import Counter from './components/counter/Counter'
import Header from './components/header/header'
// import Hero from './components/hero/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Moviespage from './pages/Moviespage';
import Layout from './components/layout/Layout';
import PageNotFound from './pages/notfound/page-not-found';
import ElectronicsPage from './pages/ElectronicsPage';
import ClothingsPage from './pages/ClothingsPage';
import Randompage from './pages/randompage';
import ProductDetail from './pages/ProductDetail';
import MoviePage from './pages/MoviePage';



function App() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF8333', 'green', 'yellow', 'white']; 
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <section className='home' style={{ backgroundColor: bgColor }}>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/movies" element={<Moviespage />} />
          <Route path="/movies/:movieId" element={<MoviePage />} />
          <Route path="/:pageId" element={<Randompage />} />
          <Route path="/404" element={<PageNotFound/>} />
          

          <Route path='shop' element={<Layout/>}>
            <Route index element={<h1>Thsi is my Shop page</h1>} />
            <Route path="electronics" element={<ElectronicsPage/>} />
            <Route path="clothing" element={<ClothingsPage/>} />
            <Route path="product/:productId" element={<ProductDetail/>} />            
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        
       
       {/* <Counter/> */}
       {/* <Hero/>      */}
      </section>
    </BrowserRouter>
  )
}

export default App
