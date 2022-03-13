import React from "react";
import "./suppliersList.css";

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
              <td className="td">{supplier.id}</td>
              <td className="td">{supplier.companyName}</td>
              <td className="td">{supplier.contactName}</td>
              <td className="td">{supplier.address?.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SuppliersList;
