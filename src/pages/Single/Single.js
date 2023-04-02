import React, { useContext } from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";
import { ResponsiveContext } from "../../contexts/responsiveContext";

const Single = () => {
  const { dispatch, responsive } = useContext(ResponsiveContext);

  return (
    <div className="single">
      <Sidebar responsive={responsive} />
      <div className="single-container">
        <Navbar responsive={responsive} resDispatch={dispatch} />
        <div className="top">
          <div className="left">
            <div className="edit-btn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                className="item-image"
                alt=""
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              />
              <div className="details">
                <h1 className="item-title">Amr Mustafa</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-key">amrmostafa@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-key">+201062708063</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-key">39 St - Mansoura</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-key">Egypt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2.5 / 1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
