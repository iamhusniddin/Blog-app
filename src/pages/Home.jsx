
import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from '../components/Card'
import SubNavbar from '../components/SubNavbar';
import Loader from '../components/UI/Loader';
import usePostApi from '../service/blog'
import useLoader from '../store';
import usePostStore from '../store/posts';


function Home() {
  const { getAllPosts } = usePostApi();
  // const [data, setData] = useState([]);
  const toast = useToast()
  const { isLoading, startLoading, endLoading }= useLoader()
  const {setPosts, posts} = usePostStore()

  useEffect(()=>{
    if (posts.length === 0){
      startLoading()
    getAllPosts()
    .then((res) => {
      setPosts(res.data)
      endLoading()
    }).catch(err=> {
      toast({
        title: err.response.data.message,
        status: "error",
        position: "top",
        variant: "top-accent",
      });
       endLoading(true)
    })
    } else {
      endLoading(true)
    }
    return () =>{
      endLoading(true)
    }
  },[])
  console.log(posts);
  return (
    <div className='ml-[50px]'>
      <SubNavbar />
      {isLoading ? <Loader/> :  (posts?.map((post)=> <Card key={post.id} {...post}/>))}
      
    </div>
  )
}

export default Home