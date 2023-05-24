import todoHead from "../assets/icons/todoHeading.svg";
import addTodo from "../assets/icons/addTodo.svg";

const TodoList = () => {
  return (
    <>
      <section className="w-[18.5rem] m-4">
        <h4 className="text-white bg-[#242731] px-3 py-3 rounded-md">
          List: Things to Buy
        </h4>
        <div className="text-white mt-2 mb-4 bg-[#191B20] px-2 py-3 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={todoHead} alt="Todo Heading" />
              <h2 className="text-[#6E6E6E] ml-1 font-semibold ">Add Todo</h2>
            </div>
            <img src={addTodo} alt="Add Todo" />
          </div>
          <textarea
            className="resize-none no-scrollbar  bg-transparent outline-none  mt-2 text-[#808191] w-full"
            placeholder="Add Todo Description"
          />
        </div>
        <div className="text-white mt-2 mb-4 bg-[#191B20] px-2 py-3 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={todoHead} alt="Todo Heading" />
              <h2 className="text-[#6E6E6E] ml-1 font-semibold ">Add Todo</h2>
            </div>
            <img src={addTodo} alt="Add Todo" />
          </div>
          <textarea
            className="resize-none no-scrollbar  bg-transparent outline-none overflow-hidden mt-2 text-[#808191] w-full"
            placeholder="Add Todo Description"
          />
        </div>
        <div className="text-white mt-2 mb-4 bg-[#191B20] px-2 py-3 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={todoHead} alt="Todo Heading" />
              <h2 className="text-[#6E6E6E] ml-1 font-semibold ">Add Todo</h2>
            </div>
            <img src={addTodo} alt="Add Todo" />
          </div>
          <textarea
            className="resize-none no-scrollbar  bg-transparent outline-none overflow-hidden mt-2 text-[#808191] w-full"
            placeholder="Add Todo Description"
          />
        </div>
      </section>
    </>
  );
};

export default TodoList;
