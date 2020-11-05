import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <div style={{textAlign:"right"}}>
        <a  href="javascript:;" className="modal-close onClick" onClick={handleClose}>
        <i style={{color:"red"}} class="fa fa-times-circle fa-2x"></i>
        </a>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
