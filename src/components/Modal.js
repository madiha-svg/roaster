import React from "react";

function Modal ({ isOpen, closeModal, address }) {
    return(
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}></span>
                    <p>{address}</p>
                </div>
            </div>
        )
    )
}

export default Modal;