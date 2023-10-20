import { useState } from "react";
import axios from 'axios';

function Uploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<any>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data);
    formData.append("name", file.data.name);

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/basics/contract/`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })

    console.log(response);
  };
  const handleFileChange = (e: any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Uploader;