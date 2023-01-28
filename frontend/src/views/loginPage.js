import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import "../Styles/login.css";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <div className="user">
        <label htmlFor="username">Username</label>
        <input type="email" id="username" placeholder="Enter Username" />
        </div>
        <div className="passwd">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <div className="submit">
        <button className="LoginBtn" type="submit">Login</button>
        </div>
        <div className="col">
        <a href="#!">Forgot password?</a>
       <p>Not a member? <a href="http://localhost:3000/register">Register</a></p>
    </div>
      </form>
    </section>
  );
};

export default LoginPage;

