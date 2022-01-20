import React from "react";
import search_popup from "../../Resources/Images/Menu/search_popup.svg";
import { Modal } from "react-bootstrap";
function SearchModal({ setSmShow, smShow }) {
  return (
    <div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        centered
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body className="menu_search_modal">
          <div className="search_modal_boday_input d-flex ">
            <input type="text" placeholder="Search..." />
            <span className="search_popup_imagea d-flex justify-content-center align-items-center">
              <img src={search_popup} alt="..." />
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SearchModal;
