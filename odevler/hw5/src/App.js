import { suppliers } from "./suppliers.js";
import SuppliersList from "./SuppliersList";
import { useState } from "react";

const App = () => {
  const [supplierList, setSupplierList] = useState(suppliers);

  const clearHandler = () => setSupplierList([]);

  const addHandler = () => {
    const obj = {
      id: 1006,
      companyName: "Doe Company",
      contactName: "Jane Doe",
      contactTitle: "Developer",
      address: {
        city: "NY",
      },
    };

    if (!supplierList.some((supplier) => supplier.id === obj.id)) {
      setSupplierList([...supplierList, obj]);
    }
  };

  return (
    <>
      {supplierList.length > 0 ? <SuppliersList suppliers={supplierList}/> : <h1>Data Bulunmamaktadir!</h1>}
      <button onClick={addHandler}>Add</button>
      <button onClick={clearHandler}>Clear</button>
    </>
  );
};

export default App;
