import back from "../assets/icons/back.svg";

const EditTodo = () => {
  return (
    <>
      <section className="w-1/4 border-l-2 px-4 py-4  border-[#242731]">
        <div className="flex items-center">
          <img src={back} alt="back button" />
          <h1 className="text-white ml-2">Edit Todo</h1>
        </div>
        <div className="w-full">
          <input
            className="w-full bg-[#242731] font-bold px-3 text-lg rounded-md py-2 text-[#A6A6A6]  mt-2"
            type="text"
            placeholder="Enter heading"
          />
          <textarea
            className="w-full  text-[#808191] resize-none no-scrollbar rounded-md px-2 py-1 outline-none bg-[#242731] mt-4"
            name=""
            rows={4}
            id=""></textarea>
        </div>
      </section>
    </>
  );
};

export default EditTodo;
