import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';

function AddModal(props) {
    return (
        <div id='addModal'className={props.addModal ? "modalContainer" : "modalContainer hide"}>
            <div className="modalCard">
                <CloseButton onClick={props.hideAddModal} className="float-end" />
                {props.children}
            </div>
        </div>
    )
}

export default AddModal;