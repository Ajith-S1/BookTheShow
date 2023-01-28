import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import GetShows from "../Fetches/GetShows";
import Copyright from "../components/Copyright";
import { useParams } from 'react-router-dom';
import GetMovie from "../Fetches/GetMovie";

const Home = () => {
  const { user } = useContext(AuthContext);
  let params = useParams();
  return (
    <section>
      <Navbar/>
      {/* {user && <UserInfo user={user} />} */}
      <GetMovie id = {params.id}/>
      <p>{params.city}</p>
      <GetShows id = {params.id} city = {params.city} />
      <Copyright/>
    </section>
  );
};

export default Home;