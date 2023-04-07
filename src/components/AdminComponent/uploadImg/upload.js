import React from 'react'

const UploadImage = () => {
    const [imgUpload, setImgUpload] = useState
    const [downloadURL, setDownloadURL] = useState('')
    const [progressUpload, setProgressUpload] = useState(0)
    const onChangeImg = () => {
        setImgUpload(e.file.originFileObj);
        if (imgUpload) {
            const image = imgUpload?.name
            const storageRef = ref(storage, `image/${image}`)
            const uploadTask = uploadBytesResumable(storageRef, imgUpload)
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgressUpload(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    message.error(error.message)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setDownloadURL(url)
                    });
                }
            );
        }
    }
  return (
    <div>
        input
    </div>
  )
}

export default UploadImage