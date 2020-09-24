import React from "react";

import './modal.css';

const Modal = ({
                   title, isOpen, onCancel, children,
               }) => {

    const closeOnOverlay = (event) => {
        if (event.target === document.querySelector('.modalOverlay')) onCancel()
    };

    return (
        <>
            {isOpen &&
            <div className="modalOverlay" onClick={closeOnOverlay}>
                <div className="modalWindow">
                    <div className="modalHeader">
                        <div className="modalTitle">{title}</div>
                        <div className="times" onClick={onCancel}>&times;</div>
                    </div>
                    <div className="modalBody">
                        {children}
                    </div>
                    <div className="modalFooter">
                    </div>
                </div>
            </div>

            }
        </>
    );
};

export default Modal
