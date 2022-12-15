import React from "react";

export const Todo = (props) => {
    const deletehandler = () => {
        console.log("deletehandler");
        console.log(props.text);
    };
    return (
        <div className="card">
            <h2 style={{ color: 'black' }}>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deletehandler}>
                    Delete
                </button>
            </div>
        </div>
    );
};
