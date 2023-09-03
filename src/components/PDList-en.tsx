import { DATA_EN } from "@/service/data";

const PDList = () => {
  const lang = DATA_EN;
  return (
    <>
      {lang.pList1}
      {lang.pList2}
      <p className=" font-semibold ml-6">{lang.pBio2}</p>
      {lang.pList3}
      {lang.pList4}
    </>
  );
};

export default PDList;
