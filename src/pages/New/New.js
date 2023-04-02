import React, { useState, useContext } from "react";
import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { ResponsiveContext } from "../../contexts/responsiveContext";

const New = ({ title, inputs }) => {
  const [file, setFile] = useState("");
  const { dispatch, responsive } = useContext(ResponsiveContext);

  return (
    <div className="new">
      <Sidebar responsive={responsive} />
      <div className="new-container">
        <Navbar responsive={responsive} resDispatch={dispatch} />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
