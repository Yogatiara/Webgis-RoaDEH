

// eslint-disable-next-line react/prop-types
const Modal = ({modalBehavior, showData, coordinate}) => {

  

  return(
    <>
    <div className="static">
        <div className={` ${modalBehavior} absolute z-1  w-[550px] h-[425px] ml-16  mt-[11px] bg-white shadow-xl rounded-2xl`}>
          <img className="h-[350px] border-b-2 border-black rounded-t-2xl  " src={showData} alt="" />
          <div className="flex text-lg pt-6 p-2.5 ml-3 font-semibold">
            <div>
              <h1>Koordinat : </h1>
            </div>
            <div className="ml-3 mt-0.5">
              {coordinate}
            </div>
           
          </div>
        
        
        </div>
    
    </div>
    </>
  );
};

export default Modal;
