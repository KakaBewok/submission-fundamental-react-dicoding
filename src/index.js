import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './components/NotesApp';
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>
);
