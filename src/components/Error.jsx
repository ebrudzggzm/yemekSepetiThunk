import { IoWarningOutline } from "react-icons/io5";

const Error = ({ message,retry }) => {
    console.log(message,'message')
  return (
    <>
    <div className="flex items-center gap-5 bg-red-500 p-5 text-white my-10">
      <IoWarningOutline className="text-4xl" />
      <div className=" font-semibold  ">
        <h2>Üzgünüz bir sorun oluştu.</h2>
        <p>{message}</p>
      </div>
    </div>
    <div className="flex justify-center">
    <button onClick={retry} className="border px-5 py-2 font-semibold hover:bg-gray-100">Tekrar Deneyiniz</button>
    </div>
    </>
  );
};

export default Error;
