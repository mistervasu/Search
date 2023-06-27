import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbaar } from './Components/Navbaar';
function App() {
  return (
    <>
    <Navbaar/>
      <Main/>
    </>
  );
}

export default App;
