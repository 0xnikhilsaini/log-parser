import {useState} from 'react';
import axios from "axios";
import { saveAs } from "file-saver";

 const useFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setisloading] = useState(false);
  
    const handleSubmit = async (event) => {
      setisloading(true);
      event.preventDefault();
      const formData = new FormData();
      formData.append("uploaded_file", selectedFile);
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:4001/parselogs",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        let blob = new Blob([JSON.stringify(response.data)], {
          type: "application/json",
        });
        saveAs(blob, "logs.json");
        setisloading(false);
        setSelectedFile(null);
      } catch (error) {
        setisloading(false);
        setSelectedFile(null);
        alert("Something went wrong");
      }
    };
  
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    return {isLoading,handleSubmit,handleFileSelect,selectedFile};
}  

export default useFileUpload;