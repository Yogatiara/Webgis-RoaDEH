// eslint-disable-next-line react/prop-types
const RefreshButton = ({ refresh }) => {
  return (
    <>
      <div className="static">
        <button onClick={refresh} type="button" className="absolute bottom-7 right-6 bg-white rounded-full shadow-2xl">

          <img className="w-16 p-2 " src="/icon/refresh.png" alt="" />
        </button>
      </div>
    </>
  )

}

export default RefreshButton;