import React from "react";
import { Header } from "./pages/mainView/Header";
import { MainView } from "./pages/mainView/mainView";

function App() {
  return (
    <div className="h-100">
      <Header/>
      <div className="h-100">
        <MainView />
      </div>
    </div>
  );
}

export default App;
