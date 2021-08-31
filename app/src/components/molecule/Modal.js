import React, { useRef, useCallback } from 'react';
import "../../css/modal.css"

const Modal = ({ text, isModalOpen, setModalOpen }) => {
  const ref = useRef();

  const closeModal = useCallback(
    () => setModalOpen(false), []
  );

  return (
    isModalOpen &&
      <div className="modal">
        <div ref={ref} className="modal-content">
          <p className="text-center">{text || "👋 Hey, I'm a modal. Click anywhere outside of me to close."}</p>
        </div>
      </div>
  );
};

export default Modal;
