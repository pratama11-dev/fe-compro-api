import React from "react";

// Common reusable styles
const flexCenter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const circleBase: React.CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    ...flexCenter,
};

const itemBase: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f9fc",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#333",
    fontWeight: "normal",
};

// Main styles
export const chartContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "80%", // Make width responsive
    maxWidth: "800px", // Limit max width
    height: "600px",
    margin: "50px auto",
    ...flexCenter,
};

export const centerCircleStyle: React.CSSProperties = {
    ...circleBase,
    width: "200px",
    height: "200px",
    backgroundColor: "#e0e3ea",
    fontSize: "2.5rem",
    color: "#333",
    fontWeight: "bold",
};

export const centerCircleStyle2: React.CSSProperties = {
    ...circleBase,
    width: "350px",
    height: "350px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "#e0e3ea",
    backgroundColor: "transparent",
};

export const centerCircleStyle3: React.CSSProperties = {
    ...circleBase,
    width: "550px",
    height: "550px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: "#e0e3ea",
    backgroundColor: "transparent",
};

export const itemStyle: React.CSSProperties = {
    ...itemBase,
};

export const rowStyle: React.CSSProperties = {
    ...flexCenter,
    flexDirection: "row",
};

export const letterStyle: React.CSSProperties = {
    backgroundColor: "#2d3a87",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginRight: "15px",
};

export const labelStyle: React.CSSProperties = {
    marginTop: "5px",
    fontSize: "1rem",
};

// Specific positioning for each item
export const accountabilityStyle: React.CSSProperties = {
    ...itemBase,
    top: "43%",
    left: "0",
    transform: "translateY(-50%)",
};

export const yieldStyle: React.CSSProperties = {
    ...itemBase,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
};

export const empowermentStyle: React.CSSProperties = {
    ...itemBase,
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
};

export const safetyStyle: React.CSSProperties = {
    ...itemBase,
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
};
