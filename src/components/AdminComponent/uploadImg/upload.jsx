import React, { useState } from "react";
import Controls from "../controls/Controls";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../api/firebase";
import { useEffect } from "react";

const UploadImage = () => {
  const [imgUpload, setImgUpload] = useState(null);
  const [url, setUrl] = useState(null);
  const [progressUpload, setProgressUpload] = useState(0);

  const onChangeImg = (e) => {
    if (e.target.files[0]) {
      setImgUpload(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (imgUpload) {
      const image = imgUpload.name;
      const storageRef = ref(storage, `niki/${image}`);
      const uploadTask = uploadBytesResumable(storageRef, imgUpload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressUpload(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload stop");
              break;
            case "running":
              console.log("Upload run");
              break;
          }
        },
        (error) => {
          Message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url);
          });
        }
      );
    } else {
      console.log("lmao");
    }
  }, [imgUpload]);

  return (
    <div>
      <input type="file" onChange={onChangeImg} />
      <img src={url} alt="" />
    </div>
  );
};

export default UploadImage;
