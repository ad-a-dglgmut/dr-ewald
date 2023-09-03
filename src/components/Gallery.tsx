import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {app} from "../firebase/client"
import { useEffect } from "react";
const storage = getStorage(app);
const listRef = ref(storage, "gallery/");

let arr: any = [];
let num: number = 0;
let imageURLs: any = [];
await listAll(listRef).then((res) => {
  res.items.forEach((itemRef) => {
    arr.push(itemRef);
  });
});
for (let i: number = 1; i <= arr.length; i++) {
        await getDownloadURL(ref(storage, `gallery/${i}.jpg`)).then((url) => {
          imageURLs.push(url);
        });
      }
const Gallery = () => {

  return (
    <>
      {imageURLs.map((i: any) => (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={i}
            className="absolute block md:w-auto w-full object-cover h-96 md:h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      ))}
    </>
  );
};

export default Gallery;
