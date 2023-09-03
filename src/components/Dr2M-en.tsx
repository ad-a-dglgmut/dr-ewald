import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";
import React from "react";

const dr1MQuery = await getDocs(
  collection(db, "DATA_EN", "doc2", "flexibleInfo")
);

let data: string | any = [""];
dr1MQuery.forEach((doc) => {
  data.push(doc.data());
});

const dr1M = () => {
  let dat: any = [];
  for (const key in data[2]) {
    dat.push(data[2][key]);
  }
  
    return (
      <>
        <ul>
          {dat.map((m: any) => (
            <li>- {m}</li>
          ))}
        </ul>
      </>
    );
   
};

export default dr1M;
