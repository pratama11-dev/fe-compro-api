import React from "react";

export const chartContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "800px", // Increased from 300px to 600px
    height: "600px", // Increased from 300px to 600px
    margin: "50px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const centerCircleStyle: React.CSSProperties = {
    position: "absolute",
    width: "200px", // Increased from 100px to 200px
    height: "200px", // Increased from 100px to 200px
    borderRadius: "50%",
    backgroundColor: "#e0e3ea",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem", // Increased font size
    color: "#333",
    fontWeight: "bold",
};

export const centerCircleStyle2: React.CSSProperties = {
    position: "absolute",
    width: "350px", // Increased from 100px to 200px
    height: "350px", // Increased from 100px to 200px
    borderRadius: "50%",
    borderWidth: "3px",
    borderStyle: "solid", 
    borderColor: "#e0e3ea",
    backgroundColor: 'transparent',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
};

export const centerCircleStyle3: React.CSSProperties = {
    position: "absolute",
    width: "550px", // Increased from 100px to 200px
    height: "550px", // Increased from 100px to 200px
    borderRadius: "50%",
    borderWidth: "3px",
    borderStyle: "solid", 
    borderColor: "#e0e3ea",
    backgroundColor: 'transparent',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
};

export const itemStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    backgroundColor: "#f7f9fc",
    padding: "10px 20px", // Increased padding
    borderRadius: "5px",
    color: "#333",
    // width: "150px",
    fontWeight: "normal",
};

export const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
};

export const letterStyle: React.CSSProperties = {
    backgroundColor: "#2d3a87",
    color: "#fff",
    padding: "10px", // Increased padding
    borderRadius: "5px",
    fontSize: "1.5rem", // Increased font size
    fontWeight: "bold",
    marginRight: "15px", // Increased margin
};

export const labelStyle: React.CSSProperties = {
    marginTop: "5px",
    fontSize: "1rem", // Increased font size
};

// Specific positioning for each item (these stay the same for alignment)
export const accountabilityStyle: React.CSSProperties = {
    ...itemStyle,
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
};

export const yieldStyle: React.CSSProperties = {
    ...itemStyle,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
};

export const empowermentStyle: React.CSSProperties = {
    ...itemStyle,
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
};

export const safetyStyle: React.CSSProperties = {
    ...itemStyle,
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
};
