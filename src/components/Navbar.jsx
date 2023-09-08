
// eslint-disable-next-line react/prop-types
const Navbar = ({ showCanvas }) => {


  return (
    <>
      <nav className="bg-[#526D82] z-1 shadow-2xl border-black">
        <div className=" flex justify-between items-center p-4">
          <div href="#" className="flex items-center">
            <span className="self-center text-4xl mb-1   font-extrabold whitespace-nowrap text-[#DDE6ED]">RoaDEH</span>
          </div>
          <div>
            <button type="button" onClick={showCanvas} >
              <h5>About Us</h5>
            </button>
          </div>
        </div>
      </nav>

    </>

  );
};

export default Navbar;