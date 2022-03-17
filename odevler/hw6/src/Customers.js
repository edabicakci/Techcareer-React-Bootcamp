import React from "react";

import { useState, useEffect } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [staticCustomers, setStaticCustomers] = useState([]);
  const [customer, setCustomer] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [refresh, setRefresh] = useState(false)

  const getCustomers = () => {
    fetch("https://northwind.vercel.app/api/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setStaticCustomers(data);
      });
  };

  useEffect(() => {
    getCustomers();
  }, [refresh]);

  const addCustomer = () => {
    const newCustomer = {
      companyName: customer.companyName,
      contactName: customer.companyName,
      address: {
        city: city,
        country: country
      }
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    };

    fetch("https://northwind.vercel.app/api/customers", config)
    .then((response) => response.json())
    .then((data) => {
      setRefresh(prev => !prev)
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  };

  const deleteCustomer = (id) => {

    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    };

    fetch(`https://northwind.vercel.app/api/customers ${id}`, config)
    .then((response) => response.json())
    .then((data) => {
      setRefresh(prev => !prev)
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });


  }
 
  return (
    <>
      <div>
        <label>Company Name: </label>
        <input
          type="text"
          onChange={(e) =>
            setCustomer((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
        <label>Contact Name: </label>
        <input
          type="text"
          onChange={(e) =>
            setCustomer((prev) => ({ ...prev, contactName: e.target.value }))
          }
        />
        <label>City: </label>
        <input
          type="text"
          onChange={(e) =>
            setCity(e.target.value)
          }
        />
        <label>Country: </label>
        <input
          type="text"
          onChange={(e) =>
            setCountry(e.target.value)
          }
        />
        <button onClick={addCustomer}>Add</button>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>City</th>
          <th>Country</th>
        </tr>

        {customers.map((customer, key) => (
          <tr key={key}>
            <td>{customer.id}</td>
            <td>{customer.companyName}</td>
            <td>{customer.contactName}</td>
            <td>{customer.address?.city}</td>
            <td>{customer.address?.country}</td>
            
            <td>
              <button onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Customers;
