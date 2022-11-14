import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoPage from "./TodoPage";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      return;
    }
    const getedTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(getedTodos);
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    const revTodos = newTodos.reverse();
    setTodos(revTodos);
    // console.log(...todos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    localStorage.setItem("todos", JSON.stringify(removeArr));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Que piensas hacer hoy ???</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoPage
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
