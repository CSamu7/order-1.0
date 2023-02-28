import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Task from "./components/Task";
import Header from "./components/Header";
import SectionTask from "./components/SectionTask";

function App() {
  return (
    <>
      <Header title="Order v 1.0"></Header>
      <main className="wrapper">
        <SectionTask title="Mis tareas:"></SectionTask>
      </main>
    </>
  );
}

export default App;
