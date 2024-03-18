import { DATA_DEU } from "@/service/data";
import ho2 from "../img/ho2.png";
import bionator from "../img/bionator.png"
import bionator3 from "../img/bionator-3.png"
import bionator5 from "../img/bionator-5.png"
import bionator6 from "../img/bionator-6.png"
const HOList = () => {
  const lang = DATA_DEU;
  return (
    <>
      {lang.hoList}
      {lang.hoL1}
      <p className="mb-6 mt-6 text-gray-800">{lang.hoBio2}</p>
      <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.hoTitle2}</h4>
      <p className="mb-6 mt-6 font-semibold">{lang.hoTitlebjorn3}</p>
      <img src={bionator} alt="" />
      <p className="mb-6 mt-6 text-gray-800">{lang.hoBio3}</p>
      {lang.hoL2}
      <img src={bionator3} alt="" />
      <img className="rounded-lg" src={ho2} alt="" />
      <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.hoTitle3}</h4>
      <p className="mb-6 mt-6 font-semibold">{lang.hoTitle4}</p>
      {lang.hoL3}
      <img src={bionator5} alt="" />
      <img src={bionator6} alt="" />
    </>
  );
};

export default HOList;
