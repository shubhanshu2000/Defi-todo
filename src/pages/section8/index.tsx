import AddTodo from "../../components/AddTodo";
import EditTodo from "../../components/EditTodo";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";

const Index = () => {
  return (
    <>
      <section className="w-full ">
        <Header />
        <div className="flex w-full h-screen ">
          <div className="flex w-4/5 flex-wrap items-start">
            <TodoList />
            <TodoList />
            <TodoList />
            <AddTodo />
          </div>
          <EditTodo />
        </div>
      </section>
    </>
  );
};

export default Index;
