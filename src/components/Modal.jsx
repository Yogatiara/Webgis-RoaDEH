

// eslint-disable-next-line react/prop-types
const Modal = ({ modalBehavior, showData, coordinate, modalClose }) => {
  return (
    <>
      <div className="static">
        <div className={` ${modalBehavior} absolute z-1 w-[500px] h-[500px]  ml-16  mt-[11px] bg-white shadow-xl rounded-md`}>
          <div className=" bg-[#829aad] flex flex-row p-3 px-8 w-full h-19 rounded-t-md">
            <div className="">
              <img className="w-12 my-auto " src="./icon/pothole.png" alt="" />
            </div>
            <div className="my-1.5 ml-4 text-2xl font-medium text-[#383c3f] ">
              Pothole
            </div>

            <button type="button" className="ml-auto my-2.5 " onClick={modalClose}>
              <div className=" p-1 rounded-md">
                <img className="w-4" src="./icon/close.png" alt="" />
              </div>
            </button>
          </div>

          <img className="h-[350px] border-b border-gray-300" src={showData} alt="" />
          <div className="flex text-md pt-6 p-2.5 mx-8 font-normal ">
            <div>
              <h1 className="font-medium">Koordinat : </h1>
            </div>
            <div className="ml-3 my-auto">
              {coordinate}
            </div>

          </div>


        </div>

      </div >
    </>
  );
};

export default Modal;
