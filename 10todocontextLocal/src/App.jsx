import { TodoProvider } from "./contexts/index";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { TodoForm, TodoItem } from "./components/index.js";

function App() {
  const [todos, setTodos] = useState([]);
  // console.log(todos)

  const addTodo = (todo) => {
    // setTodos(todo)//its overright prev value that we dont want

    // setTodos((prev)=>[todo,...prev]) //aesse nhi de skta rem your todo structure

    setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    //loop lgaengye todo humara ek array hain aur woh id le lengye jisme hume update kerna hain

    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    // localStorage.getItem("todos")//gives value in string
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
