import React from 'react';
import { CardGama } from "./components/CardGama";
import "./styles/global.css"

function App() {
  return (
  <div
   style ={{
    width: 1200,
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
   }}
   >
    <CardGama />
    <CardGama />
    <CardGama />
  </div>
  );
}

export default App;
