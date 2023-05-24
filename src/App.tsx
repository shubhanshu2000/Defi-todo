import Sidenav from "./components/Sidenav";
import Topbar from "./components/Topbar";
import Index from "./pages/section8";

function App() {
  return (
    <>
      <Topbar />
      <div className="bg-black flex h-full">
        <Sidenav />
        <Index />
      </div>
    </>
  );
}

export default App;
