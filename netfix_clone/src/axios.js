import axios from "axios"
// to create an instance of the axios  with baseUrl propereties
const instance=axios.create({
    baseUrl:"https://api.themoviedb.org/3",
   
})
// console.log(instance)
// for fetching data we use  get method
       //ex instance.get("/movie/top_rated")<==>api.themoviedb.org/3/movie/top_rated
export default instance