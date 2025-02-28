import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {
  
  return (
    <div className="flex flex-col  w-full justify-start items-center pt-32 h-screen  font-normal bg-amber-300 p-5 text-red-800">
      <div className="bg-emerald-200 p-5 min-w-60 w-lg shadow-2xl shadow-amber-900">
        <h1 className="text-3xl text-red-700 m-3 underline underline-offset-10">
          Todo App / Redux
        </h1>
        <AddTodo />
        <div className="overflow-x-auto max-h-[400px]">
        <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
