import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./pages/mainView/Header";
import { MainView } from "./pages/mainView/mainView";

const Componente2 = () => <h1>hola</h1>;

const Home = () => (
  <div className="h-100">
    <MainView />
  </div>
);

function App() {
  return (
    <div className="h-100">
      <Header />
      <Routes>
        <Route path="/componente-2" element={<Componente2 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
