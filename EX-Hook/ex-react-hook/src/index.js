import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import Login from './components/Login';
import Selector from './components/CarSelection';
import Timer from './components/Timer';
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)