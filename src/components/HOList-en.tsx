import { DATA_EN } from "@/service/data";
import ho2 from "../img/ho2.png";

const HOList = () => {
  const lang = DATA_EN;
  return (
    <>
      {lang.hoList}
      {lang.hoL1}
      <p className="mb-6 mt-6 text-gray-800">{lang.hoBio2}</p>
      <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.hoTitle2}</h4>
      <p className="mb-6 mt-6 font-semibold">{lang.hoTitlebjorn3}</p>
      <p className="mb-6 mt-6 text-gray-800">{lang.hoBio3}</p>
      {lang.hoL2}
      <img className="rounded-lg" src={ho2} alt="" />
      <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.hoTitle3}</h4>
      <p className="mb-6 mt-6 font-semibold">{lang.hoTitle4}</p>
      {lang.hoL3}
    </>
  );
};

export default HOList;
