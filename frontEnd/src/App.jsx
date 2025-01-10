import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Student from './Student';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
