import React from "react"

const userOutput = (props) => {
  const style = {
    border : '2px solid black',
    background: 'grey',
    padding : '16px',
    margin : '16px',
    align : 'center'
  }
  return(

      <div style = {style}>
        <p > Hi I am {props.name}</p>
        <p> Hope you are doing good</p>
      </div>
)
}

export default userOutput
