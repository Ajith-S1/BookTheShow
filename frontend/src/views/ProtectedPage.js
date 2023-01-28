import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import GetMovie from "../Fetches/GetMovie";
import Copyright from "../components/Copyright";
import { useParams } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);
  let params = useParams();
  return (
    <section>
      <Navbar/>
      {/* {user && <UserInfo user={user} />} */}
      <GetMovie id = {params.id} variant = "desc"/>
      <Copyright/>
    </section>
  );
};

export default Home;