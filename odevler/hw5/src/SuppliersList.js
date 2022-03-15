import React from "react";
import "./suppliersList.css";
import Supplier from "./Supplier";

const SuppliersList = ({ suppliers }) => {
  return (
    <table className="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="th">ID</th>
          <th className="th">Company Name</th>
          <th className="th">Contact Name</th>
          <th className="th">City</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier, key) => {
          return (
            <tr key = {key}>
             <Supplier supplier = {supplier}/>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SuppliersList;
