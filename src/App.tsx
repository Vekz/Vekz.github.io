import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename="/">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={"temp główna"} />
        <Route path="/drugastrona" element={"temp druga strona"} />
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
