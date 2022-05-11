import React from 'react';
import  { createRoot } from 'react-dom/client';
import Contact from './components/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailValidate from './components/Email';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EmailValidate />)