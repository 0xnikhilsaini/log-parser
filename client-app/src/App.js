import React from "react";
import useFileUpload from "./hooks/useFileUpload";
import "./App.css";

function App() {
  const { handleSubmit, handleFileSelect, isLoading, selectedFile } =
    useFileUpload();
  return (
    <>
      <div className="header">
        <h1>Log parser app</h1>
      </div>
      <div className="Container">
        <div>
          <form onSubmit={handleSubmit}>
            {!isLoading && <input type="file" onChange={handleFileSelect} />}
            <input
              type="submit"
              value={isLoading ? "...loading" : "Upload File"}
              disabled={!selectedFile || isLoading}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
