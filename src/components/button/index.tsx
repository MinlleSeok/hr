import React from "react";
import "./button.scss";

const Button = ({ content, color }: { content: String, color?: String }) => {
    return (
        <div className="Button" style={color && { backgroundColor: `${color}`}}>
            {content}
        </div>
    );
}
export default Button;