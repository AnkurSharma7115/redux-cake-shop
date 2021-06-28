import React from "react"
import { connect } from "react-redux"
import { soldIceCream } from "../reduxItems"

function IceCreamContainer(props) {
   return (
      <div>
         <h2>Number of Ice-Creams LEFT : {props.numOfIceCreams} </h2>
         <button onClick={props.soldIceCream}>Sold Ice Cream</button>
      </div>
   )
}
const mapStateToProps = (state) => {
   return {
      numOfIceCreams: state.iceCream.numOfIceCreams,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      soldIceCream: () => dispatch(soldIceCream()),
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
