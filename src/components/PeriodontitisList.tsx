import { DATA_DEU } from "@/service/data";

const PeriodontitisList = () => {
  const lang = DATA_DEU;
  return (
    <>
      {lang.paList1}
      <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.paTitle2}</h4>
      <p className="mb-6 mt-6 text-gray-800">{lang.paBio3}</p>
      {lang.paList2}
      {lang.paList3}
    </>
  );
};

export default PeriodontitisList;
