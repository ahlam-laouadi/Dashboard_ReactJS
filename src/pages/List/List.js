import React, { useContext } from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/DataTable/DataTable";
import { ResponsiveContext } from "../../contexts/responsiveContext";

const List = () => {
  const { dispatch, responsive } = useContext(ResponsiveContext);

  return (
    <div className="list">
      <Sidebar responsive={responsive} />
      <div className="list-container">
        <Navbar responsive={responsive} resDispatch={dispatch} />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
