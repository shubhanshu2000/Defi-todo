import Closing from "../assets/icons/closing.svg";
import Home from "../assets/icons/home.svg";
import Section1 from "../assets/icons/section1.svg";
import Section2 from "../assets/icons/section2.svg";
import share from "../assets/icons/share.svg";
import globe from "../assets/icons/globe.svg";
import darkMode from "../assets/icons/dark-mode.svg";

const Sidenav = () => {
  return (
    <>
      <aside className="w-1/6 min-h-screen relative border-r-2 border-[#242731]  px-4">
        <div className="flex justify-between items-center">
          <div className="text-white flex  items-center w-3/5 my-6">
            <p className="bg-blue-500 px-[0.9rem] mr-4  py-2 rounded-[50%] ">
              N
            </p>
            <p>Name</p>
          </div>
          <img src={Closing} alt="closing icon" />
        </div>
        <div className="flex">
          <nav>
            <ul className="text-[#808191] font-semibold">
              <li className="my-4">
                <img className="inline mr-4" src={Home} alt="Home Icon" />{" "}
                <span>Home</span>
              </li>
              <li className="my-4">
                <img
                  className="inline mr-4"
                  src={Section1}
                  alt="Section 1 Icon"
                />{" "}
                <span>Section 1</span>
              </li>
              <li className="my-4">
                <img
                  className="inline mr-4"
                  src={Section2}
                  alt="Section 2 Icon"
                />{" "}
                <span>Section 2</span>
              </li>
              <li className="my-4">
                <img className="inline mr-4" src={share} alt="Section 8 Icon" />{" "}
                <span>Section 8</span>
              </li>
              <li className="my-4">
                <img
                  className="inline mr-4"
                  src={share}
                  alt="Section 8  Icon"
                />{" "}
                <span>Section 8</span>
              </li>
            </ul>
          </nav>
          <section className="text-white absolute bottom-0 text-xs font-medium my-4">
            <div className="flex items-center  w-full">
              <div className="flex  items-center  bg-[#353945] py-1.5 px-2 rounded-lg">
                <p className="bg-blue-500 px-[0.4rem] mr-4  py-[0.18rem] rounded-[50%]">
                  N
                </p>
                <p>$0.90</p>
              </div>
              <p className="py-2 ml-4 px-3 rounded-lg bg-[#A3E3FF] text-[#3772FF]">
                Buy $XYZ
              </p>
            </div>
            <div className="flex items-center mt-6 ">
              <img src={globe} alt="Internet" />
              <div className="flex ml-4 bg-[#353945] py-1.5 px-2 rounded-2xl items-center">
                <img src={darkMode} alt="Dark Mode" />
                <div className="h-[14px] w-[14px] bg-[#3772FF] rounded-[50%] ml-3"></div>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
