import { SearchIcon } from "@chakra-ui/icons";

import React, { useEffect } from "react";
import { useState } from "react";
import usePostApi from "../service/blog";
import usePostStore from "../store/posts";

function SubNavbar() {
  const { getAllPosts } = usePostApi();
  const { setPosts, posts } = usePostStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => setData(res.data));
  }, []);
  let updatedList = [...posts];
  const searchPostsFunc = (val) => {
    updatedList = data.filter((post) => {
      return (
        post.title.toLowerCase().includes(val.toLowerCase()) ||
        post.user.username.toLowerCase().includes(val.toLowerCase()) ||
        post.body.toLowerCase().includes(val.toLowerCase())
      );
    });
    setPosts(updatedList);
  };
  return (
    <div className="relative">
      <SearchIcon className="absolute top-[34%] left-[10px]" />
      <input
        className="subnavbar border-2 rounded-lg border-slate-400 py-3 px-9 w-full"
        type="text"
        placeholder="Search..."
        onChange={(e) => searchPostsFunc(e.target.value)}
      />
    </div>
  );
}

export default SubNavbar;
