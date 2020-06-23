import React, {Component} from "react";
import './App.css';
import Person from "../components/Person/Person"
import Cockpit from "../components/Cockpit/Cockpit"



class App extends Component {

// Life cycle Hook number 1 --Constructor--Noemally this is old syntax 
// it can also be done as I have done below by using the state and then by managing by using the setState.
constructor(props){
  super(props);
    console.log("App.js constructor")
}

state={
       persons:[{id:"1" ,name:"satish",age:"25"},   //id is added to remover the error of inserting the keys .which is further added in the person down.
                {id:"2" ,name:"varun",age:"22"},
                {id:"3" ,name:"gopi",age:"24"}],

                othereState:"Some other value",
                                       // for the toggle button step 1
                showPerson:false   

     }

 //  Lifecycle Hook Number --2--getderivedstatefromprops
  // it is not very useful and should be avoided as many as possible.
 static getDerivedStateFromProps(props,state)
 {
   console.log("App.js getDerivedStateFromProps" ,props );
   return state;
 }

 //  Life cycle hook number--5 componentwillmount
// It is very rarely used and will be removed in the future
// componentWillMount()
// {
//   console.log("App.js ComponentWillMount");
// }

//  Life cycle hook number--4 componentdidmount
// It is very important as it is used to send the http request.
componentDidMount()
{
  console.log("App.js ComponentDidMount")
}

// switchNameHandler=()=>{

//   // console.log("was clicked!!!")
//   this.setState({
//     persons:[{name:"Gadge",age:"25"},
//              {name:"Gaod",age:"22"},
//              {name:"Sabbinneni",age:"24"}],
// })}
// so i am removing this handler and will put  new handler name as deletePersonHandler.
// I want to delete one by one the person when I click the person one by one .Hence i want to appy the clicked on the person.
deleteNameHandler=(personindex)=>{
  const p=[...this.state.persons]              //it will fetch all the persons.
  p.splice(personindex,1)  //this splice take only one element at a time from the array.
  //so now we have to use the setState which is mandatory in every method.
  this.setState({persons:p})

}

nameChangeHandler=(event)=>{

  // console.log("was clicked!!!")
  this.setState({
    persons:[{name:event.target.value ,age:"25"},
            {name:"varun",age:"22"},
            {name:"gopi",age:"24"}],
})
}

// this a method for the toggle button.
togglePersonHandler=()=>{
  this.setState({
   showPerson:!this.state.showPerson     // I have initialize the showperson is false so when we hit on toggle then reverse the action.  
  })

}

// Render is also a Life cycle hook which returns all the Ui--number 4
// Further it renders all the child compnents.
  render(){
    console.log("App.js render") //fuurther I will go in the person and add the console for the child components.

       // here I have to put the inline styling which is used as a object.
  //  take any name and create a object of the style and then pass the reference to the button as we are creating the css for button.
  const style14={
    backgroundColor:"lightgray",
    font:"inherit",
    padding:"8px",
    cursor:"pointer"
  };

  // Here I put the styling for the toggle button when it empty.
  const style15={
    backgroundColor:"green",
    font:"inherit",
    color:"white",
    padding:"8px",
    cursor:"pointer"
  };
  
    // now we have to render the toggle on the UIvso i am gonna put inside the render
   let personality=null;  // this means it is not visible
   if(this.state.showPerson===true)  // this means if it is not visible ad i have set the showperson as false.
   {
     personality=(
       <div>

         {/* here I am trying to change the name to the capital hene I am going to apply the onchange  */}
     {/* <Person Change={
       this.nameChangeHandler} 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>

     <Person name={
       this.state.persons[1].name} 
       age={this.state.persons[1].age}/> */}

     {/* I want to make this third line as the button and load the switch nme handler on it Click and the method is passed over here and further it is reffered in the person component */}
     {/* <Person Click={
       this.switchNameHandler} 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}><strong>Sabbinneni</strong></Person> */}
        {/* //  This persons are hardcoded what if there are 1000 of persons....hence lets create it dynamically.
    // to do it dynamically we have tyo make the state as the data source. */}
     {/* }); */}

{/*apply this index on the deletenamehandler */}
    {this.state.persons.map((el,index) => {  
      return <Person 
         Click={()=>this.deleteNameHandler(index)}   
        //  {/* so here I ahve added the delete person handler reference but there are three person so itsould identify the index hence add the second parameter as the index*/}
            name={el.name}
            age={el.age}
            key={el.id}/>})}
    </div>
      );
      style15.backgroundColor="red"
   }



   return (
    <div className="App">

      {/* I have picked the below code and put in the cockpit component
      <h1>Hello!!! I am Satish</h1>
     <p>This is really working!!!</p>
    //  As I have created a separate cockpit just for a practice of the components, I just need to put that component over here.
     */}

      <Cockpit/>

     {/* we were apliying the onclick on the button which is further reffered in the method of switch name handler */}
     <button style={style14} onClick={this.switchNameHandler}><strong>Switch Name</strong></button> {/*now i want to style this button using the inline styling */}
     <br/><br/>
     <button style={style15}  onClick={this.togglePersonHandler}><strong>Toggle</strong></button> {/*now I have created this button for the toggle */}
     
            {/* Now add the personality reference over here */}
      {personality}
    </div>
     
  );
}
}


export default App;
