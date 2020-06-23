import React, { Component } from "react";
import "./Person.css";



// const person=(props)=>{
//     console.log("Person.js rendering the child.....");
// return (

//     <div className="Person">
//      {/* Lets add the switch name handler on the paragraph by making the paragraph as the  button. */}
//     <p onClick={props.Click}>My name is {props.name} and I am {props.age} years old!!!  {props.children} </p>
//     {/* // I am going to create a input type where we can apply the namechanagehandler */}
//     <input type="text" onChange={props.Change} ></input>
//     </div>
// )
// }

// So i have converted the above functional based to the class based.
// to do this i have changed the props.clicked to the this.props.clicked and add render() { return( <div> </div>)}
class Person extends Component{

    // this is the Lifecycle hoook for Action
    // static getDerivedStateFromProps(props,state){
    //     console.log("Person.js getDerivedStateFromProps")
    //     return state;
    // }

    // Lifecycle hook number 2 for action sould ComponentUpdate executes every time
    // It has a boolean value which states weither to render the further part or not
    // it is very important lifecycle hook.
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("Person.js shouldComponentUpdate")
        return true;
    }

    // ComponentDidUpdate 
    componentDidUpdate()
    {
        console.log("Person.js componntDidUpdate")
    }

    render(){
        console.log("Person.js rendering the child.....");
return(
        <div className="Person">
        {/* Lets add the switch name handler on the paragraph by making the paragraph as the  button. */}
       <p onClick={this.props.Click}>My name is {this.props.name} and I am {this.props.age} years old!!!  {this.props.children} </p>
       {/* // I am going to create a input type where we can apply the namechanagehandler */}
       <input type="text" onChange={this.props.Change} ></input>
       </div>
      )
    }
 }

    export default Person

