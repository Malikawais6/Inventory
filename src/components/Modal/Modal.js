// lib
import React from "react";

import "./style.css";

const Modal = (props) => {
  const { handleClose, show, handleAddItem } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="header">
          <h2>Add items here</h2>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <form onSubmit={handleAddItem} id="form-item" className="fields">
          <input
            type="text"
            required
            placeholder="Name..."
            name="productName"
          />
          <input type="text" placeholder="Description..." name="description" />
          <input
            type="number"
            data-testid="input-number"
            required
            placeholder="Price..."
            min={0}
            name="price"
          />
          <input type="submit" value="Submit" className="submitBtn" />
        </form>
      </section>
    </div>
  );
};
export default Modal;
