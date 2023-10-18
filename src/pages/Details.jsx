import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePostApi from "../service/blog";
import userImg from "../assets/userImg2.png";
import { useState } from "react";
import useLoader from "../store";
import { Code, useToast } from "@chakra-ui/react";
import Loader from "../components/UI/Loader";
import { ViewIcon } from "@chakra-ui/icons";
import parse from "html-react-parser";

function Details() {
  const { id } = useParams();
  const { getPostById } = usePostApi();
  const [post, setPost] = useState({});
  const { isLoading, startLoading, endLoading } = useLoader();
  const toast = useToast();

  useEffect(() => {
    try {
      startLoading();
      getPostById(id).then((res) => {
        endLoading(true);
        setPost(res.data);
      });
    } catch (error) {
      endLoading(true);
      toast({
        title: "Something went wrong",
        status: "error",
        position: "top",
        variant: "top-accent",
      });
    }
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px]">
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={userImg}
                  alt="User img"
                />
              </div>
              <div>
                <h2 className="font-semibold text-[20px]">
                  {post?.user?.full_name}
                </h2>
                <h3 className="font-medium text-slate-500 text-[17px]">
                  {localStorage.getItem("my_id") === post?.user?.id
                    ? post?.user?.username + " - you "
                    : post?.user?.username}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-7">
            <Code>{new Date(post?.createdAt).toDateString()}</Code>
            <div>
              <ViewIcon className="text-[18px] mr-2" />
              <Code>{post?.views}</Code>
            </div>
          </div>
          <div className="mt-9">
            <h2 className="nohover  mb-4">{post?.title}</h2>
            <div className="det-body">{parse(`${post?.body}`)}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
