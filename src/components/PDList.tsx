import { DATA_DEU } from "@/service/data";

const PDList = () => {
  const lang = DATA_DEU;
  return (
    <>
      {lang.pList1}
      {lang.pList2}
      <p className=" font-semibold ">{lang.pBio2}</p>
      {lang.pList3}
      {lang.pList4}
    </>
  );
};

export default PDList;
