import React from "react";

function Header(props) {
    return (
        <div
            className="rounded-pill"
            style={{
                backgroundColor: props.backgroundColor,
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    color: props.color,
                    paddingTop: '10px',
                    paddingBottom: '10px'
                }}
            >
                {props.children}
            </h1>
        </div>
    )
}

export default Header;