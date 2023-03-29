import React from 'react'
import "./Alert.css"

export default function Alert(props) {
  return (
    props.alert && <div className={props.alert.classes} id="alertdiv">
      <strong>{props.alert.title} </strong> : {props.alert.message}
    </div>
  )
}
