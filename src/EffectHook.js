import { useState, useEffect, Component } from "react";

// useEffect which handles the side effect of the component
// Mounting
// updating
// unMounting

// componentDidMount()
// componentDidUpdate
// unmounting

const EffectHook = () => {
  const [userData, setUserData] = useState([{}]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const getTheServerData = async () => {
    const result = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
    setUserData(data);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);

    console.log(firstName);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  useEffect(() => {
    console.log("Component Mounted");
    // console.log("Component rerendered");
    getTheServerData();
  }, []);

  useEffect(() => {
    console.log("Component Rerendered");
    // document.addEventListener('')

    return () => {
      // clean up the data
      console.log("Component Unmounted for rerendering");
    };
  }, [firstName, lastName]);

  //   componentDidUpdate

  //   component did update

  //
  return (
    <div>
      Effect Hook
      <div>
        {userData && userData.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
      <form>
        <input type="text" placeholder="firstName" onChange={handleFirstName} />
        {firstName}
        <input type="text" placeholder="lastName" onChange={handleLastName} />
      </form>
    </div>
  );
};

export default EffectHook;
