
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";
import React from "react";

const dr1MQuery = await getDocs(
  collection(db, "DATA_EN", "dec1", "flexibleInfo")
);

let data: string | any = [""];
dr1MQuery.forEach((doc) => {
  data.push(doc.data());
});

const dr1M = () => {
  let dat = new Map<number, string>();
  let nums: any = [];
  for (let key in data[1]) {
    nums.push(parseInt(data[1][key][0], 10))  
    dat.set(parseInt(data[1][key][0]), data[1][key].slice(2))
  }
  nums.sort((a: number, b:number)=>{return a-b});

  return (
    <>
      <ul>
        {nums.map((m:any)=>(
          <li>- {dat.get(m)}</li>
        ))} 
      </ul>
    </>
  );
};

export default dr1M;
