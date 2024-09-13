import axios from "axios"
import { setLoading, setPosts } from "./PostSlice"

export const fetchPosts=()=>async dispatch=>{
    dispatch(setLoading(true));
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        dispatch(setPosts(response.data)); 
        console.log(response)
    }).catch((err)=>{
        console.log("error in fetching",err);
    })
}