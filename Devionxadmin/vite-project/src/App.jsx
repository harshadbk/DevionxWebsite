import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/navbar/sidebar';
import ListProduct from './components/listproduct/Listproduct';
import GetQuote from './components/getquote/getquote';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
             <Route path='/getquote' element={<GetQuote/>}></Route>
            <Route path="/listproduct" element={<ListProduct />} />
            <Route path="/" element={<h1>Welcome to Admin Dashboard</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
