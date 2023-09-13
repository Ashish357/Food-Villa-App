import React from 'react'
import ProfileClass from './ProfileClass';
import Profile from './Profile';

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }
 
class About extends React.Component {
  constructor(props){
    super(props);
    //console.log("Parent - constructor");
  }
  componentDidMount(){
     // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render(){
     //console.log("Parent - render");
    return(
      <>
      <div>
        <h1>About</h1>
      <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
      </p>
      </div>
      {/* <Profile name="Ashish"/> */}
      <ProfileClass fname="Ashish " lname={"Saha"} age={23} />
      </>
    )
  }
}

export default About


/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDidMount
 *  Parent componentDidMount
 *
 *
 */