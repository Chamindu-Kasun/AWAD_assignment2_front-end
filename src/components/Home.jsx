import Heading from "./Heading";
import UserList from "./UserList";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/user/getUsers"
        );
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Heading />
      <UserList users={users} />
    </>
  );
};

export default Home;
