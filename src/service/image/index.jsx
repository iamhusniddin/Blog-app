import api from "../axios";

// const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer" + localStorage.getItem("token")
// }

function useImagesApi() {
  
  const posterImg = async (ImageData, headers) => api.post(`/image`,ImageData, headers)
  return { posterImg };
}

export default useImagesApi;