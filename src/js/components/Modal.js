import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => props.onDismiss()}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()} // to prevent event bubbling
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.renderContent}</div>
        <div className="actions">{props.renderActions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
