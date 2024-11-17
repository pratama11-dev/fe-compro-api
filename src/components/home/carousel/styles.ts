// styles.ts

import React from "react";

export const carouselContainerStyle: React.CSSProperties = {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: "400",
    position: 'relative',
    overflow: 'hidden',
    height: '755px',
};

export const backgroundImageStyle1: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    backgroundSize: 'cover',
    zIndex: -1,
};

export const titleStyle: React.CSSProperties = {
    fontSize: '61px',
    fontWeight: '400',
    color: '#fff',
    padding: '0 300px',
    marginBottom: '20px',
    textAlign: "center",
    lineHeight: '76px',
    zIndex: 1,
    fontFamily: "DM Serif Display",
};

export const subtitleStyle: React.CSSProperties = {
    fontSize: '25px',
    fontWeight: '600',
    marginBottom: '30px',
    padding: '0 300px',
    color: '#fff',
    textAlign: "center",
    lineHeight: '32px',
    zIndex: 1,
};

export const buttonStyle: React.CSSProperties = {
    backgroundColor: '#2D3591',
    color: '#fff',
    fontSize: '16px',
    marginTop: "28px",
    textAlign: "center",
    padding: '20px 30px',
    borderRadius: '5px',
    border: 'none',
};
