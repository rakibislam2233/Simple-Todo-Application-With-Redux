import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden ">
      <Navbar />
      <div className="px-5">
        <div className="w-full max-w-4xl mx-auto mt-32  bg-white rounded-xl p-5">
          <TodoHeader />
          <Todo />
          <TodoFooter />
        </div>
      </div>
    </div>
  );
};

export default App;
