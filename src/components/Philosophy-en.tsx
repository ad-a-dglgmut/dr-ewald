
import { DATA_EN} from "@/service/data";
import pimg from "../img/pimg.jpg";

const Philosophy = () => {
  const lang = DATA_EN;
  return (
    <div
      className={
        "mx-auto" 
      }
    >
      <div className=" h-48"></div>
      <div className=" bg-orange-500 p-2 text-white font-semibold w-full mb-20 text-2xl">
        <h2>{lang.title1}</h2>
      </div>
      {lang.philosophy1}
      <div className="w-full flex justify-center">
        <img className="my-7 rounded-lg" src={pimg}></img>
      </div>
      <p className="text-center text-gray-800">{lang.philosophy2}</p>
    </div>
  );
};

export default Philosophy;
