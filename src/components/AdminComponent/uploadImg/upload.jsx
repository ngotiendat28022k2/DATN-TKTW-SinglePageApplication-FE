import React, { useState } from "react";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../api/firebase";
import { useEffect } from "react";
import { v4 } from "uuid";

const UploadImage = ({name, imageUrls, setImageUrls }) => {
  console.log("upload", name)
  console.log("imageUrls", imageUrls)
  const imgListRef = ref(storage, "images/");
  const changImg = (item) => {
    const imgUploads = item.target.files[0];
    if (!imgUploads) {
      setImageUrls(name, []);
    }
    const imgRef = ref(storage, `images/${imgUploads.name + v4()}`);
    uploadBytesResumable(imgRef, imgUploads).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        {
          setImageUrls(name,  [...imageUrls, url]);
        }
      });
    });
    useEffect(() => {
      listAll(imgListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls(name, [...imageUrls, url]);
          });
        });
      });
    }, imageUrls);
  };

  function RemomeImg(url) {
    const newArrImg = imageUrls.filter((item) => item !== url);
    setImageUrls(name, newArrImg);
  }

  
  return (
    <div className="flex justify-start items-start flex-wrap gap-[25px] w-full bg-white p-5 rounded-md">
      <div class="flex w-full max-w-[150px]">
        <label
          htmlFor="dropzone-file"
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
      {imageUrls.map((url) => {
        return (
          <div
            style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", width:"100%", maxWidth:"150px", height:"150px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer flex justify-items-end text-gray-500 bg-white rounded-[50%] shadow-xl hover:bg-[#ececec] transition-all"
              onClick={() => RemomeImg(url)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default UploadImage;
