import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Container from "./components/Container";
import TodoItem from "./components/ToDoItem";
import "./App.css";
import ErrorMess from "./components/ErrorMess";
import TodoItemsProvider from "./store/provider";

function App() {

  return (
    <TodoItemsProvider>
    <center>
      <Header></Header>
      <Container ></Container>
      <ErrorMess ></ErrorMess>
      <TodoItem ></TodoItem>
    </center>
    </TodoItemsProvider>
  );
}

export default App;
