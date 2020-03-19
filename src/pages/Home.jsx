import React, { useEffect } from "react";
import { useAuth } from "../hooks";

const Home = props => {
  const { user, loggedIn } = useAuth();

  console.log(user, loggedIn);
  return (
    <div>
      <h1>Home Page</h1>
      {loggedIn ? <h2>{`Hi ${user.name}!`}</h2> : null}
    </div>
  );
};

export default Home;

// export default Home;
