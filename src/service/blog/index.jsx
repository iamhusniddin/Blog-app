import api from "../axios";

function usePostApi() {
  const getAllPosts = async () => api.get("/blog");
  const getPostById = async (id) => api.get(`/blog/${id}`);

  return { getAllPosts, getPostById };
}

export default usePostApi;
