import logo from './logo.svg';
import './App.css';
import MyChart from './Echarts/MyChart';
import React, { useState } from 'react';

function App() {
  const [chartVisible, setChartVisible] = useState(false);

  const handleChartToggle = () => {
    setChartVisible(!chartVisible);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" onClick={handleChartToggle}>
        Mở Biểu Đồ
      </a>
      {chartVisible && <MyChart />}
      </header>
    </div>
  );
}

export default App;
