import React, { useState } from "react";
// import Controls from "../controls/Controls";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../api/firebase";
import { useEffect } from "react";
import { v4 } from "uuid";
import { bg } from "date-fns/locale";

const UploadImage = () => {
  // const [imgUploads, setImgUploads] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imgListRef = ref(storage, "images/");
  const changImg = (item) => {
    const imgUploads = item.target.files[0];
    if (!imgUploads) {
      setImageUrls([]);
    }
    const imgRef = ref(storage, `images/${imgUploads.name + v4()}`);
    uploadBytesResumable(imgRef, imgUploads).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        {
          setImageUrls((prev) => [...prev, url]);
        }
      });
    });
    useEffect(() => {
      listAll(imgListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, imageUrls);
  };
  console.log(imageUrls);
  return (
    <div className="w-[580px] h-auto bg-white grid grid-cols-4 gap-3 p-5 rounded-md">
      <div class="flex w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-[140px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-300 dark:hover:border-gray-500 "
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            onChange={changImg}
            multiple="multiple"
          />
        </label>
      </div>
      {/* <input className="w-[150px] h-" type="file" onChange={changImg} /> */}
      {imageUrls.map((url) => {
        return <img src={url} alt="" />;
      })}
    </div>
  );
};

export default UploadImage;
