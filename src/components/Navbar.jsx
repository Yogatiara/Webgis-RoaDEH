const Navbar = () => {
  return (
    <>
      <nav className="bg-[#526D82] z-1 shadow-2xl border-black">
        <div className="max-w-screen-xl flex items-center p-5">
          <a href="#" className="flex items-center">
            <span className="self-center text-4xl mb-1   font-extrabold whitespace-nowrap text-[#DDE6ED]">RoaDEH</span>
          </a>
          <div className="flex md:order-2">

            <button data-collapse-toggle="navbar-cta" type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between ml-10 hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul
              className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-[#526D82] md:dark:bg-gray-900 ">
              {/* <li class="bg-gray-700">
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li> */}
              {/* <li class="bg-[#526D82] ml-6">
                <a href="#"
                  class=" py-2  pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-white md:p-0  flex text-black">
                  <div>

                    <img src="/static/src/icons/home.png" alt="" class="w-6">
                  </div>

                  <h1 class="ml-2 pt-0.5">Home</h1>

                </a>
              </li>

              <li class="bg-[#526D82]">
                <a href="#"
                  class=" py-2  pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  flex hover:text-white text-black">
                  <img src="/static/src/icons/history.png" alt="" class="w-6">
                    <h1 class="ml-2   ">History</h1>

                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </>

  );
};

export default Navbar;