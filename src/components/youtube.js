import React from 'react'

const YouTube = ({video}) => (
  <div style={{
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: 25,
    height: 0
  }}>
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      title={video}
    />
  </div>
)

export default YouTube