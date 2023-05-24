import Add from "../assets/icons/addTodo.svg";

const AddTodo = () => {
  return (
    <>
      <section className="flex w-[18.5rem] m-4 bg-[#242731] px-3 py-3 rounded-md justify-between items-center">
        <h4 className="text-white ">Add Todo</h4>
        <img src={Add} alt="Add Todo" />
      </section>
    </>
  );
};

export default AddTodo;
