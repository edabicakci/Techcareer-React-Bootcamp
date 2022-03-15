import React from "react";

const Supplier = ({ supplier }) => {
  return (
    <>
      <td className="td">{supplier.id}</td>
      <td className="td">{supplier.companyName}</td>
      <td className="td">{supplier.contactName}</td>
      <td className="td">{supplier.address?.city}</td>
    </>
  );
};

export default Supplier;
