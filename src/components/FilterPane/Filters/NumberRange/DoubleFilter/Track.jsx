import React from "react";


export default function Track({ source, target, getTrackProps }) {
    return (
      <div
        style={{
          position: 'absolute',
          height: 10,
          zIndex: 1,
          marginTop: 35,
          backgroundColor: '#546C91',
          // backgroundColor:"#efefef",
          borderRadius: 5,
          cursor: 'pointer',
          left: `${source.percent}%`,
          width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
      />
    )
  }