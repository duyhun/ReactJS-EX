import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import CheckKeyPress from './components/CheckKeyPress';
import 'bootstrap/dist/css/bootstrap.css';
import LogOut from './components/CheckLogOut';
import Expand from './components/Expand';
import ToDoList from './components/Todolist';
import Student from './components/StudentList';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Student />);

