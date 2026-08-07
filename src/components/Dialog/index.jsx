import React, { Children, useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // não deveríamos fazer buscas no DOM desse jeito!
  //const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("Deveríamos mostrar a modal", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrepper">
          <button 
          autoFocus 
          onClick={onClose}
          className="btn-close"
          >
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </React.Fragment>
  );
}
