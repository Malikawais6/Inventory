// lib
import React from "react";

import "./style.css";

const Table = (props) => {
  const { data, handleDeleteItem } = props;

  return (
    <table className="table-wrapper">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => {
            const today = new Date(item.date);
            return (
              <tr key={index}>
                <td> {item.productName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{today.toUTCString()}</td>
                <td
                  className="remove"
                  onClick={() => handleDeleteItem(item.date)}
                >
                  &times;
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default Table;
