import React from 'react'
import { connect } from 'react-redux'
import { soldCake } from '../reduxItems'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes LEFT : {props.numOfCakes} </h2>
            <button onClick = {props.soldCake}>Sold Cake</button>
        </div>
    )
}
 const mapStateToProps = (state) => {
     return {
        numOfCakes : state.cake.numOfCakes
     }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         soldCake : () => dispatch(soldCake())
     }
 }
export default connect(mapStateToProps, mapDispatchToProps)( CakeContainer)
//Redux Saga