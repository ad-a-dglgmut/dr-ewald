import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";

const dr1MQuery = await getDocs(
  collection(db, "DATA_DEU", "dec1", "flexibleInfo")
);

let data: any = [""];
dr1MQuery.forEach((doc) => {
  data.push(doc.data());
});

const dr1M = () => {
  const entries = Object.entries(data[2] || {});

  const sorted = entries.sort(([keyA], [keyB]) => {
    const numA = parseInt(keyA.replace(/\D/g, ""), 10);
    const numB = parseInt(keyB.replace(/\D/g, ""), 10);
    return numA - numB;
  });

  return (
    <ul>
      {sorted.map(([key, value]) => (

        // @ts-ignore
        <li key={key}>- {value}</li>
      ))}
    </ul>
  );
};

export default dr1M;
