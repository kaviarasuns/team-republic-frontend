import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { BASE_URL } from "../../global";
import "./home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
