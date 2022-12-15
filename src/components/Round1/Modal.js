import React from 'react'

export default function Modal(props) {
    function handleCloseHandler() {
        props.onCancel();
    }
    function handleConfirmHandler() {
        props.onConfirm();
    }


    return (
        <div className='modal'>
            <p>Are you sure</p>
            <button className='btn btn--alt' onClick={handleCloseHandler}>Cancel</button>
            <button className='btn' onClick={handleConfirmHandler}>Confirm</button>
        </div>
    )
}
