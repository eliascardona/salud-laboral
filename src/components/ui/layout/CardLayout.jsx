// src/components/CardLayout.js
import React from "react";
import "./CardLayout.css";

export default function CardLayout({ children }) { 
    return (
        <div className="card-layout-container">
            <div className="card-grid">
                {children}
            </div>
        </div>
    );
}
