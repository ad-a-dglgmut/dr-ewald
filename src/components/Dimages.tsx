import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import {app } from "../firebase/client"
const storage = getStorage( app );
const listRef = ref(storage, "diplomas/");

let arr: any = [];
let num: number = 0;
let imageURLs: any = [];
await listAll(listRef).then((res) => {
  res.items.forEach((itemRef) => {
    arr.push(itemRef);
  });
});
for (let i: number = 1; i <= arr.length; i++) {
  await getDownloadURL(ref(storage, `diplomas/${i}.jpg`)).then((url) => {
    imageURLs.push(url);
  });
}
const Diplomas = () => {
  return (
    <>
      {imageURLs.map((i:any) => (
        <img className=" mb-10" src={i}/>
      ))}
    </>
  );
};

export default Diplomas;
