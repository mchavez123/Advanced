import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import Counter from "./components/Counter/Counter";
import PostsUsersComments from "./components/PostsUsersComments/PostsUsersComments";
import Todo from "./components/Todo/Todo";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <React.Fragment>
        <MainHeader  />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home  />}
        </main>
      </React.Fragment>
      <Counter />
      <Todo />
      <PostsUsersComments />
    </>
  );
}

export default App;
