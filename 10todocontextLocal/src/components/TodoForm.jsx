import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

    const [todo, setTodo] = useState("")//todo msg actually yeh h 
    const{addTodo}=useTodo()

    const add = (e) => {
        e.preventDefault()
        
        if (!todo) return
        // addTodo(todo)//hum addtodo me object ko spread ker rhe hain aur basically humare array me objects he to hain to isko object do n bhai aese string kyu de rhe ho

        // addTodo({id:Date.now(),todo:todo,completed:false})//wha humne date.now as a id de hui h to yha aese kuch khas dene ki need nhi hain

        // addTodo({todo:todo,completed:false})//key and value same h to aese bhi ler sakte hain

        addTodo({ todo, completed: false })
        setTodo("")//cleanup kerlo thoda sa
}

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
