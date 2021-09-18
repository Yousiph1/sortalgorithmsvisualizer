import React from 'react'
import './bars.css'
export default function Bar({current,active,toSwap,inPlace,height}) {
  let name = "bar"
  if(active ) {
    name += " active"
  }
  if (current) {
    name += " current"
  }

  if(inPlace) {
    name += " in-place"
  }
  if(toSwap) {
    name += " to-swap"
  }
  return (
   <div className = {name} style = {{height}}>
   <p>{height/18}</p>
   </div>
  )
}
