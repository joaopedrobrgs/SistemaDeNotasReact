import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';

function EditModal(props) {
    return (
        <div id='editModal' className={props.editModal ? "modalContainer" : "modalContainer hide"}>
            <div className="modalCard">
                <CloseButton onClick={props.hideEditModal} className="float-end" />
                {props.children}
            </div>
        </div>
    )
}

export default EditModal;