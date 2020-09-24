import React from "react";

import './modal.css';

const Modal = ({
                   title, isOpen, onCancel, onSubmit, children,
               }) => {

    const closeOnOverlay = (event) => {
        if (event.target === document.querySelector('.modalOverlay') ) onCancel()
    }

    return (
        <>
            {isOpen &&
            <div className="modalOverlay" onClick={closeOnOverlay}>
                <div className="modalWindow">
                    <div className="modalHeader">
                        <div className="modalTitle">{title}</div>
                        <div className="times" onClick={onCancel}/>
                    </div>
                    <div className="modalBody">
                        {children}
                    </div>
                    <div className="modalFooter">
                        <button onClick={onCancel}>Cancel</button>
                        <button onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </div>

            }
        </>
    );
};

export default Modal
