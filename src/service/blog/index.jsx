import React from 'react'
import api from '../axios'

function usePostApi() {
  const getAllPosts = async() => api.get("/blog");

  return { getAllPosts }
}

export default usePostApi