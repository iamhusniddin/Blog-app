import api from "../axios.js"

function useUserApi() {

   const signIn = async (data)=> api.post("/user/signin", data)
   

  return {
    signIn,
  }
}

export default useUserApi