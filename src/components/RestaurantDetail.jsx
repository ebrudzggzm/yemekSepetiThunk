import { FaStar } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
const RestaurantDetail = ({ data }) => {
  return (
    <div>
      <div className="flex gap-5">
        <img className="rounded-md w-[150px] max-md:w-[100px]" src={data.photo} alt="" />
        <div className="flex flex-col justify-between">
          <p>
          <span className="flex items-center gap-2">
            <FaArrowDown className="text-red-500" /> min. {data.minPrice} TL
          </span>

          <span className="flex items-center gap-2">
            <FaRegClock className="text-red-500" />
            {data.estimatedDelivery} dak.
          </span>
          </p>
          <h1 className="text-3xl font-semibold max-md:text-2xl">{data.name}</h1>
          <p className="flex items-center gap-2">
            <FaStar /> {data.rating}
            <a
              className="text-red-500 font-semibold p-1 hover:bg-red-100 transition"
              href="#"
            >
              Yorumları Gör
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
