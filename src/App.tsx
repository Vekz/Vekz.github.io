import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename="/">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={"temp główna"} />
        <Route path="/drugastrona" element={"temp druga strona"} />
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
    </Router>
  );
}

export default App;
