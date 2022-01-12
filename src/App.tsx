import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/AboutPage/About';


function App() {
  return (
    <Router basename="/">
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/Skills" element={"temp skille"} />
        <Route path="/Academics" element={"temp uczelniane"} />
        <Route path="/Projects" element={"temp projekty"} />
        <Route path="/Contact" element={"temp kontakt"} />
        <Route
        path="*"
        element={
          //TODO: Make proper error page for uknown path
          <main style={{ padding: "1rem" }}>
            <h1>404</h1>
            <h3>There's nothing here!</h3>
          </main>
        }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
