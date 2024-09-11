import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App';
import About from './components/About'; // Import the About page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      {/* Wrap the app in BrowserRouter for routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} /> {/* Main app route */}
          <Route path="/about" element={<About />} /> {/* About page route */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
