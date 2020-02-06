import React from "react";
import "./button.scss";

const Button = ({ content }: { content: String }) => {
    return (
        <div className="Button">
            {content}
        </div>
    );
}
export default Button;