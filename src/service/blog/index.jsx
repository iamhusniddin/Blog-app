import api from "../axios";

function usePostApi() {
  const getAllPosts = async () => api.get("/blog");
  const getPostById = async (id) => api.get(`/blog/${id}`);
  const deletePost = async (id) => api.delete(`/blog/${id}`);
  const createPost = async (data) => api.post(`/blog`, data)
  return { getAllPosts, getPostById, createPost };
}

export default usePostApi;
