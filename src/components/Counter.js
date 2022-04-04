import classes from './Counter.module.css';
import { useSelector, connect, useDispatch } from "react-redux";
import { Component } from "react";

const Counter = () => {
  const dispatch=useDispatch();
 const counter= useSelector(state => state.counter)

 function incrementHandler(params) {
   dispatch({
     type:'increment'
   })
 }

 function decrementHandler(params) {
  dispatch({
    type:'decrement'
  })
 }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter} </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};




export default Counter;
