import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }

   async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP ");
    // }, 1000);
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json();
    this.setState({userInfo:json})
    //console.log("Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    // console.log("Component Did Update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
  }

  render() {
    const { count } = this.state;
    //console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <h2>{this.props.fname}{this.props.lname}</h2>
        <h2>{this.props.age}</h2>
        <h2>Count: {this.state.count}</h2>
        <button className="p-2 bg-purple-500"
        onClick={() => {
          this.setState({count:this.state.count+1})
        }}
      >
        Count
      </button> */}
      </div>
    );
  }
}

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */

export default Profile;
