import React from "react";

export default function Handle({
  handle: { id, value, percent },
  getHandleProps
}) {
  return (
    <div style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: -15,
      marginTop: 25,
      zIndex: 2,
      width: 30,
      height: 30,
      border: 0,
      textAlign: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      // backgroundColor: '#2C4870',
      backgroundColor:"#efefef",
      boxShadow:"0px 0px 5px #999",
      color: '#333',
    }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
        {value}
      </div>
    </div>
  )
}