import api from "../axios.js";

function useUserApi() {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);

  return {
    signIn,
    signUp,
  };
}

export default useUserApi;
