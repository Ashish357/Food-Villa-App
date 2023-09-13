import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API Call
    // const timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP ");
    // }, 1000);
    // console.log("useEffect");

    return () => {
      // clearInterval(timer);
      // console.log("useEffect Return");
    };
  }, []);
  // console.log("render");

  return (
    <div>
      <h2>Porofile Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button className="p-2 bg-purple-500"
        onClick={() => {
          setCount(count+1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
