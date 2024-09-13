import { createSlice } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    loading:true,
    currentPage:1,
};

const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts=action.payload;
            state.loading=false;
        },
        removePost:(state,action)=>{
            state.posts=state.posts.filter(post=>post.id!==action.payload);
        },
        setPage:(state,action)=>{
            state.currentPage=action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
    }
})
 
export const {setPosts,removePost,setPage,setLoading}=postSlice.actions;
export default postSlice.reducer;

