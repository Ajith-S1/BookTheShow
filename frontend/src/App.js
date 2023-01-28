import React from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import AboutMovie from "./components/AboutMovie";
import BookingPage from "./views/BookingPage";

function App() {
  return (
    <Router>
    <div className="App">
      <AuthProvider>
      {/* <Home /> */}
      <Switch>
            <PrivateRoute exact path="/protected/:id" component= {ProtectedPage} />
            <PrivateRoute exact path="/Booking/:city/:id" component= {BookingPage} />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
            <Route component={AboutMovie} path="/about" />
      </Switch>
      </AuthProvider>
    </div>
    </Router>
  );
}

export default App;
