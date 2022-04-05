import React from "react";
import { line1, line2, line3, line4, line5 } from "./qwertyKeys";
import KeySpan from "./keySpan";


function QwertyContainer() {

  const KeyLine1 = line1.map((value, index) => {
    return(
    <KeySpan
      line={'l1-'}
      value={value}
      key={index}
      index={index}
    />)
  })

  const KeyLine2 = line2.map((value, index) => {
    return(
    <KeySpan
      line={'l2-'}
      value={value}
      key={index}
      index={index}
    />)
  })

  const KeyLine3 = line3.map((value, index) => {
    return(
    <KeySpan
      line={'l3-'}
      value={value}
      key={index}
      index={index}
    />)
  })

  const KeyLine4 = line4.map((value, index) => {
    return(
    <KeySpan
      line={'l4-'}
      value={value}
      key={index}
      index={index}
    />)
  })

  const KeyLine5 = line5.map((value, index) => {
    return(
    <KeySpan
      line={'l5-'}
      value={value}
      key={index}
      index={index}
    />)
  })






  return (
    <div className="card" id="qwerty-container">
      {/* <div className="keyboard" id="keyboard">
        <ul className="kl1 kl">{KeyLine1}</ul>
        <ul className="kl2 kl">{KeyLine2}</ul>
        <ul className="kl3 kl">{KeyLine3}</ul>
        <ul className="kl4 kl">{KeyLine4}</ul>
        <ul className="kl5 kl">{KeyLine5}</ul>
      </div> */}
    </div>
  )
}


export default QwertyContainer;

