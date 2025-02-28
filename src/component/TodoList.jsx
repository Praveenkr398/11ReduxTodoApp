import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function TodoList() {
  const todoz = useSelector((state) => state.todos);
  const dispatch = useDispatch(removeTodo);

  return (
    <div>
      <ul
      >
        {todoz.map((todo) => (
          <li key={todo.id}
          className="bg-white text-2xl flex  justify-between items-center shadow-lg shadow-gray-500 mx-1 my-3 px-3 ">
            {todo.text}
            <button
              className="bg-gray-300 justify-end items-center m-2 text-white rounded-2xl p-2 active:bg-[red] hover:rotate-45 hover:transition-all hover:scale-70"
              onClick={() => 
              dispatch(removeTodo(todo.id))
              }
            >
              ❌
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
