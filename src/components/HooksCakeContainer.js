import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { soldCake } from "../reduxItems"

function HooksCakeContainer() {
   const numOfCakes = useSelector((state) => state.cake.numOfCakes)
   const dispatch = useDispatch()
   // const dispatch = useDispatch(soldCake())   
   return (
      <div>
         <h2>Number of cake LEFT : {numOfCakes}</h2>
         <button onClick={() => dispatch(soldCake)}>Sold Cake</button>
         {/* <button onClick={dispatch}>Sold Cake</button> */}
      </div>
   )
}

export default HooksCakeContainer


