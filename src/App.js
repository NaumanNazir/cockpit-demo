import React from 'react';
import Navbar from './components/navbar/index';
import Sidebar from './components/sidebar/index';
import Routes from './Routes';

import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main id="content" className="p-5">
        <Routes />
      </main>
    </div>
  );
}

export default App;
