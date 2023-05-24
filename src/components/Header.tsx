import wallet from "../assets/icons/Wallet.svg";

const Header = () => {
  return (
    <>
      <section className="border-b-[#242731] border-b-2 text-white py-4 px-6 flex justify-between w-full items-center">
        <h4 className="border-b-[#3772FF] border-b-2 ">Section</h4>
        <div className="flex items-center bg-[#191B20] px-3 py-1.5 rounded-lg">
          <img src={wallet} alt="Wallet Icon" />
          <p className=" mr-4 ml-2.5">0.2 $XYZ</p>
          <p className="text-xs bg-[#A3E3FF] text-[#3772FF] px-2 py-0.5 rounded-md font-semibold">
            Tier 1
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
