import { DATA_EN } from "@/service/data";
import b2 from "../img/b2.png";
import b3 from "../img/b3.png";
import b4 from "../img/b4.png";
import b5 from "../img/b5.png";
import b6 from "../img/b6.png";

const ProthesesList = () => {
  const lang = DATA_EN;
  return (
    <>
      {lang.bBio2}
      {lang.bBio3}
      {lang.bBio4}
      <img src={b2} alt="" />
      {lang.bBio5}
      <img src={b3} alt="" />
      {lang.bBio6}
      <img src={b4} alt="" />
      {lang.bBio7}
      <img src={b5} alt="" />
      {lang.bBio8}
      <img src={b6} alt="" />
      {lang.bBio9}
    </>
  );
};

export default ProthesesList;
