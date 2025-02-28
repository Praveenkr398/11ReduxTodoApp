import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {
  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    console.log(task);
    setTask("");
  };


  return (
    <form onSubmit={submitHandle} id="addTodo" className="flex outline-1 outline-amber-50 shadow-2xl shadow-indigo-700 my-5 justify-center w-full">
      <input
        type="text"
        placeholder="add your task"
        value={task}
        autoFocus
        spellCheck={false}
        onChange={(e) => setTask(e.target.value)}
        className="bg-white font-normal text-2xl flex-auto px-4 py-2 m-1 capitalize outline-0 "
      />
      <button type="submit" className="bg-[#2d37f9] hover:rounded-lg hover:bg-[#642cdc] flex-1 text-white px-3 text-2xl">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
