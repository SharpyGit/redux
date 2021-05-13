import {connect} from "react-redux"

import './App.css';


import {increaseCounter, decreaseCounter} from './redux/counter.actions'

function App(props) {
  return (
    <div className="App">
      <p>Count is:</p>
      <button onClick={() => props.increaseCounter()}>Increase counter</button>
      <button onClick={() => props.decreaseCounter()}>Decrease counter</button>
    </div>
  );
}

//take state and put into props
const mapStateToProps = (state) => {
  return{
    count: state.count
  }
}

//make use of actions we declared in counter.actions.js
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
