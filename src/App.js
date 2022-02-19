import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import MySignUp from './pages/MySignUp';
import Cart from './pages/Cart';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';



function App() {
  return (
    <Container>
      <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Link to="/">
          Home
        </Link>
        <Link to="/MySignUp">
          MySignUp
        </Link>
        <Link to="/Cart">
          Cart
        </Link>
      </Stack>
      <Routes>
        <Route path="/MySignUp" element={<MySignUp />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}

export default App;
