import React from "react";
import "./halfButton.scss";

const HalfButton = ({ content, color }: { content: String, color: String }) => {
    return (
        <div className="HalfButton" style={{backgroundColor: `${color}`}}>
            {content}
        </div>
    );
}

export default HalfButton;