import axios from "axios";
import React, { useState } from "react";

//multer
//formidable
//coversion of files to base64 String
const FileUpload = () => {
    let url = "http://localhost:5000/upload"
    const [myfile, setmyfile] = useState("")
    const changeFile = (e) =>{
        // console.log(e.target.files[0])
        let myImage = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload  = () =>{
            console.log(reader.result)
            setmyfile(reader.result)
        }
    }

    const handleUpload = () =>{
        axios.post(url, {myfile})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return <>
        <input type="file" onChange={(e)=>changeFile(e)}/>
        <button onClick={handleUpload}>Upload File</button>
  </>;
};

export default FileUpload;
