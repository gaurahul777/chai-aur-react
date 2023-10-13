import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todos: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  // theme:dark,
});

export const useTodo = () => {
  return useContext(TodoContext);
};

//yeh line bar bar wha na likhne pade isliye yahi ker lete hain

export const TodoProvider = TodoContext.Provider;
