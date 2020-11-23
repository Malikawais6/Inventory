// lib
import React, { useState } from "react";

// src
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";

import "./style.css";

const Products = () => {
  const [state, setState] = useState({
    showModal: false,
    searchedValue: "",
  });

  const handleShowModal = () => {
    setState({ ...state, showModal: true });
  };

  const hideModal = () => {
    setState({ ...state, showModal: false });
  };

  let productList = JSON.parse(localStorage.getItem("productList"));
  if (productList === null) productList = [];

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      productName: event.target[0].value,
      description: event.target[1].value,
      price: event.target[2].value,
      date: Date.now(),
    };
    setState({
      ...state,
      showModal: false,
    });
    document.getElementById("form-item").reset();

    localStorage.setItem("itemsObject", JSON.stringify(newItem));
    const newData = productList.concat(newItem);
    localStorage.setItem("productList", JSON.stringify(newData));
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = productList.filter((item) => {
      return item.date !== itemId;
    });

    localStorage.setItem(
      "productList",
      JSON.stringify([].concat(updatedItems))
    );
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      searchedValue: value,
    });
  };

  const filteredData =
    productList &&
    productList.filter((dataObj) => {
      return dataObj.productName.includes(state.searchedValue);
    });

  return (
    <React.Fragment>
      <div>
        <h2>Products List</h2>
        <Modal
          show={state.showModal}
          handleClose={hideModal}
          handleAddItem={handleAddItem}
        />
        <div className="header-fields">
          <div>
            <label>Search by name </label>
            <input
              type="text"
              value={state.searchedValue}
              name="search"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <button
            type="button"
            data-testid="open-modal"
            className="add-button"
            onClick={handleShowModal}
          >
            Add Item
          </button>
        </div>
      </div>

      <Table data={filteredData} handleDeleteItem={handleDeleteItem} />
    </React.Fragment>
  );
};
export default Products;
